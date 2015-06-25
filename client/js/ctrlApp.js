'use strict';
	// ---------------------------------
	// モジュール
	// ---------------------------------
	var app = angular.module('myApp', ['ui.router']);

	// ---------------------------------
	// Config
	// ---------------------------------
  app.config (function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
          url: '/home',
          controller: 'AppCtrl',
          templateUrl: 'home.html'
      })
      .state('settings', {
          url: '/settings',
          controller: 'SettingsCtrl',
          templateUrl: 'settings.html'
      })
      .state('settings.profile', {
          url: '/account',
          controller: 'SettingsCtrl',
          templateUrl: 'settings/profile.html'
      })
  
  });

	// ---------------------------------
	// コントローラー　AppCtrl
	// ---------------------------------
	app.controller('AppCtrl'
				, ['$rootScope', '$scope'
				, function($rootScope, $scope) {

        // // テンプレート
        // $scope.templates = [
        //                         { name: 'template1.html', url: 'template1.html'},
        //                         { name: 'template2.html', url: 'template2.html'},
        //                     ];
        // $scope.template = $scope.templates[1];

        $scope.init = function init() {
          $scope.$apply();
        };

        // 日付編集		
        $scope.editDate = function editDate(datetime) {
          var m = moment(datetime);
          var formatDate = m.format('YYYY/MM/DD HH:mm:ss.SSS');
          return formatDate;
        };

	}]);