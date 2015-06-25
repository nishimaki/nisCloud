'use strict';
	// ---------------------------------
	// モジュール
	// ---------------------------------
	var app = angular.module('myApp', ['ui.router']);

	// ---------------------------------
	// Config
	//    ui-routerによる画面遷移定義
	// ---------------------------------
  app.config (function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
          url: '/home',
          // controller: 'AppCtrl',
          templateUrl: 'home.html'
      })
      .state('home.portal', {
          url: '/portal',
          controller: 'AppCtrl',
          templateUrl: 'portal.html'
      })
      .state('home.chat', {
          url: '/chat',
          templateUrl: 'chat.html'
      })
      .state('setting', {
          url: '/setting',
          templateUrl: 'setting.html'
      });
  
  });

	// ---------------------------------
	// コントローラー　AppCtrl
	// ---------------------------------
	app.controller('AppCtrl'
				, ['$rootScope', '$scope'
				, function($rootScope, $scope) {

        $scope.init = function init() {
          console.log("AppCtrl init")
        };

        // 日付編集		
        $scope.editDate = function editDate(datetime) {
          var m = moment(datetime);
          var formatDate = m.format('YYYY/MM/DD HH:mm:ss.SSS');
          return formatDate;
        };

	}]);