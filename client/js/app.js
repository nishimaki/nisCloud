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
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('home', {
          isLoginRequired: true,
          url: '/',
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
  app.run(['$rootScope', '$state', 'UserService', function ($rootScope, $state, UserService) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams){
      // ログイン状態が必要か？
      if (toState.isLoginRequired) {
        // ログイン状態の判断処理
        if (!UserService.isLoggedIn()) {
            // エラーの為、ログイン画面に遷移
            $state.go('login');
            e.preventDefault();
        }
      }
    });
  }]);

	// ---------------------------------
	// UserService
	// ---------------------------------
  app.service('UserService', function () {
    	// ---------------------------------
    	// ログイン判定
    	// ---------------------------------
      this.isLoggedIn = function () {
          console.log('UserService');
          // TODO: implement it.
          return false;
      };
  });