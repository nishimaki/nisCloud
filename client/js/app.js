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
            templateUrl: 'app/layout/home.html'
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
            templateUrl: 'app/login/login.html'
        });
        
    });
  
	// ---------------------------------
	// run
	//    state変更
	// ---------------------------------
    app.run(['$rootScope', '$state', '$http','SharedService', function ($rootScope, $state, $http, SharedService) {
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
                        } else {
                            SharedService.SetLoginStatus("LOGIN");
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
    //    SharedService: 共有メッセージ
    // ---------------------------------
    app.factory("SharedService", ["$rootScope", function($rootScope) {
        var service = {};
        // ---------------------------------
        // エラーメッセージ
    	// ---------------------------------
        service.errorMessage = {};
        service.SetErrorMessage = function(value){
            this.errorMessage = value;
            $rootScope.$broadcast("changedErrorMessage");
        };
        // ---------------------------------
        // ログイン状態
        // ---------------------------------
        service.loginStatus = {};
        service.SetLoginStatus = function(value){
            this.loginStatus = value;
            $rootScope.$broadcast("changedLoginStatus");
        };

        return service;
    }]);

    // ---------------------------------
    // moment設定
    // ---------------------------------
    moment.locale('ja');
