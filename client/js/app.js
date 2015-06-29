'use strict';
	// ---------------------------------
	// モジュール
	// ---------------------------------
	var app = angular.module('myApp', ['ui.router']);

	// ---------------------------------
	// Config
	//    ui-routerによる画面遷移定義
	//
	//      isLoginRequired:ログインが必要な画面
	// ---------------------------------
  app.config (function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
          isLoginRequired: true,
          url: '/home',
          // controller: 'AppCtrl',
          templateUrl: 'home.html'
      })
      .state('home.portal', {
          isLoginRequired: true,
          url: '/portal',
          // controller: 'PortalCtrl',
          templateUrl: 'portal.html'
      })
      .state('home.chat', {
          isLoginRequired: true,
          url: '/chat',
          templateUrl: 'chat.html'
      })
      .state('setting', {
          url: '/setting',
          templateUrl: 'setting.html'
      })
      .state('login', {
          url: '/login',
          templateUrl: 'login.html'
      });
  
  });
  
	// ---------------------------------
	// run
	// ---------------------------------
  app.run(['$rootScope', '$state', '$http', function ($rootScope, $state, $http) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams){
      // ログイン状態が必要か？
      if (toState.isLoginRequired) {
        // ログイン状態の判断処理
        async.waterfall([
            function(callback){
          			$http.get('/islogin')
          			  .success(function(data) {
          			    if (data == "OK") {
                      callback(null, true);
          			    } else {
                      callback(null, false);
          			    }
            			})
          			  .error(function(data) {
                    callback(null, false);
          			  });
            },
            function(res, callback){
                if (!res) {
                  // エラーの為、ログイン画面に遷移
                  $state.go('login');
                  e.preventDefault();
                }
                callback(null, res);
            }
        ], function (err, result) {
            if(err) {
                throw err;
            }
        });        
      }
    });
  }]);

	// ---------------------------------
	// factory
	// ---------------------------------
  app.factory("SharedService", ["$rootScope", function($rootScope) {
    
			console.log("SharedService [Enter]");
    
      // エラーメッセージ
      var errorMessage = "";

      return {
          errorMessage: {
              get: function() { return errorMessage; },
              set: function(t) {
                  console.log("[enter] errorMessage.set");
                  errorMessage = t;
                  $rootScope.$broadcast('changedErrorMessage');
                  console.log("[leave] errorMessage.set");
              }
          }
      };
			console.log("SharedService [Leave]");
      
  }]);