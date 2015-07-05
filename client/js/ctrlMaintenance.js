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

	        // var data = [
	        //     ["", "Ford", "Volvo", "Toyota", "Honda"],
	        //     ["2014", 10, 11, 12, 13],
	        //     ["2015", 20, 11, 14, 13],
	        //     ["2016", 30, 15, 12, 13]
	        // ];

	        // var container = document.getElementById('example');
	        // var hot = new Handsontable(container, {
	        //     data: data,
	        //     minSpareRows: 1,
	        //     rowHeaders: true,
	        //     colHeaders: true,
	        //     contextMenu: true
	        // });

	        //   function getCarData() {
	        //     return [
	        //       {car: 'Nissan', year: 2012, chassis: 'black', bumper: 'black'},
	        //       {car: 'Nissan', year: 2013, chassis: 'blue', bumper: 'blue'},
	        //       {car: 'Chrysler', year: 2014, chassis: 'yellow', bumper: 'black'},
	        //       {car: 'Volvo', year: 2015, chassis: 'white', bumper: 'gray'}
	        //     ];
	        //   }

	        //   var
	        //     container1 = document.getElementById('example'),
	        //     hot1;

	        //   hot1 = new Handsontable(container1, {
	        //     data: getCarData(),
	        //     colHeaders: ['Car', 'Year', 'Chassis color', 'Bumper color'],
	        //     columns: [
	        //       {
	        //         data: 'car',
	        //         readOnly: true
	        //       },
	        //       {
	        //         data: 'year'
	        //       },
	        //       {
	        //         data: 'chassis'
	        //       },
	        //       {
	        //         data: 'bumper'
	        //       }
	        //     ]
	        //   });

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