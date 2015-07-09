	'use strict';
	// ---------------------------------
	// コントローラー PortalCtrl
	// ---------------------------------
	app.controller('PortalCtrl', ['$rootScope', '$scope', '$http', '$controller', 'SharedService', function($rootScope, $scope, $http, $controller, SharedService) {

	    // AppCtrlから継承
	    $controller('AppCtrl', {
	        $rootScope: $rootScope,
	        $scope: $scope
	    });

	    $scope.portalList = [];
	    $scope.changeData = {};

	    $scope.init = function init() {
	        console.log("PortalCtrl init");

	        SharedService.SetTitle("ホーム");

	        $http.get('/portal').success(function(data) {
	            $scope.portalList = data;
	        });

	        var data = [
	            ["", "Ford", "Volvo", "Toyota", "Honda"],
	            ["2014", 10, 11, 12, 13],
	            ["2015", 20, 11, 14, 13],
	            ["2016", 30, 15, 12, 13]
	        ];
	        var container = document.getElementById('example');
	        var hot = new Handsontable(container, {
	            data: data,
	            minSpareRows: 1,
	            rowHeaders: true,
	            colHeaders: true,
	            contextMenu: true,

	            afterChange: function(changes, source) {
	                console.log("afterChange:" + changes + ":" + source);
	                $scope.changeData = changes;
	            }

	        });

	        $('#myGrid').w2grid({
	            name: 'myGrid',
	            columns: [{
	                field: 'fname',
	                caption: 'First Name',
	                size: '30%'
	            }, {
	                field: 'lname',
	                caption: 'Last Name',
	                size: '30%'
	            }, {
	                field: 'email',
	                caption: 'Email',
	                size: '40%'
	            }, {
	                field: 'sdate',
	                caption: 'Start Date',
	                size: '120px'
	            }, ],
	            records: [{
	                recid: 1,
	                fname: 'John',
	                lname: 'Doe',
	                email: 'jdoe@gmail.com',
	                sdate: '4/3/2012'
	            }, {
	                recid: 2,
	                fname: 'Stuart',
	                lname: 'Motzart',
	                email: 'jdoe@gmail.com',
	                sdate: '4/3/2012'
	            }, {
	                recid: 3,
	                fname: 'Jin',
	                lname: 'Franson',
	                email: 'jdoe@gmail.com',
	                sdate: '4/3/2012'
	            }, {
	                recid: 4,
	                fname: 'Susan',
	                lname: 'Ottie',
	                email: 'jdoe@gmail.com',
	                sdate: '4/3/2012'
	            }, {
	                recid: 5,
	                fname: 'Kelly',
	                lname: 'Silver',
	                email: 'jdoe@gmail.com',
	                sdate: '4/3/2012'
	            }, {
	                recid: 6,
	                fname: 'Francis',
	                lname: 'Gatos',
	                email: 'jdoe@gmail.com',
	                sdate: '4/3/2012'
	            }, {
	                recid: 7,
	                fname: 'Mark',
	                lname: 'Welldo',
	                email: 'jdoe@gmail.com',
	                sdate: '4/3/2012'
	            }, {
	                recid: 8,
	                fname: 'Thomas',
	                lname: 'Bahh',
	                email: 'jdoe@gmail.com',
	                sdate: '4/3/2012'
	            }, {
	                recid: 9,
	                fname: 'Sergei',
	                lname: 'Rachmaninov',
	                email: 'jdoe@gmail.com',
	                sdate: '4/3/2012'
	            }]
	        });

	    };
	}]);