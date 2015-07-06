	'use strict';
	// ---------------------------------
	// コントローラー MaintenanceCtrl
	// ---------------------------------
	app.controller('MaintenanceCtrl', function($rootScope, $scope, $http, $controller, SharedService) {

	    // AppCtrlから継承
	    $controller('AppCtrl', {
	        $rootScope: $rootScope,
	        $scope: $scope
	    });

	    $scope.custmerList = {};

	    $scope.init = function init(title) {
	        console.log("MaintenanceCtrl init");

	        SharedService.SetTitle(title);

	        $http.get('/custmer').success(function(data) {
	            $scope.custmerList = data;

	            var
	                container1 = document.getElementById('example'),
	                hot1;

	            hot1 = new Handsontable(container1, {
	                data: $scope.custmerList,
	                colHeaders: ['name', 'namekana', 'yuubin', 'addr'],
	                columns: [{
	                    data: 'name',
	                    readOnly: true
	                }, {
	                    data: 'namekana'
	                }, {
	                    data: 'yuubin'
	                }, {
	                    data: 'addr'
	                }]
	            });

	        });

	    };
	});

	// ---------------------------------
	// ディレクティブ MaintenanceCtrl
	// ---------------------------------
	app.directive('test', function() {
	    return {
	        restrict: "A",
	        link: function() {
	            alert('これはテストです！');
	        }
	    };
	});