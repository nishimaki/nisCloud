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
	            var cnt = 1;
	            _.each(data, function(dat) {
	                dat["recid"] = cnt++;
	                // console.log("dat:" + angular.toJson(dat) );
	            });
	            console.log("data length:" + data.length);

	            $scope.custmerList = data;

                $("#myGridCust").w2destroy("myGridCust");
	            $('#myGridCust').w2grid({
	                name: 'myGridCust',
	                columns: [{
	                    field: 'code',
	                    caption: 'First Name',
	                    size: '30%'
	                }, {
	                    field: 'name_sei',
	                    caption: 'Last Name',
	                    size: '30%'
	                }, {
	                    field: 'name_mei',
	                    caption: 'Email',
	                    size: '40%'
	                }, {
	                    field: 'kananame_sei',
	                    caption: 'Start Date',
	                    size: '120px'
	                }, ],
	                records: $scope.custmerList
	            });

	            /****
	            	            var
	            	                container1 = document.getElementById('example'),
	            	                hot1;

	            	            hot1 = new Handsontable(container1, {
	            	                data: $scope.custmerList,
	            	                width: 350,
	            	                height: 400,
	            	                rowHeaders: true,
	            	                colHeaders: true,
	            	                colHeaders: ['CODE', '氏名', 'カナ氏名'],
	            	                columns: [{
	            	                    data: 'code',
	            	                    readOnly: true
	            	                }, {
	            	                    data: 'name_sei'
	            	                }, {
	            	                    data: 'name_mei'
	            	                }, {
	            	                    data: 'kananame_sei'
	            	                }]
	            	            });
	            ****/
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