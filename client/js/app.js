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