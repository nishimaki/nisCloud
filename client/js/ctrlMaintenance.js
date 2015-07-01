	'use strict';
	// ---------------------------------
	// コントローラー MaintenanceCtrl
	// ---------------------------------
	app.controller('MaintenanceCtrl'
        , function($rootScope, $scope, $http, $controller) {
        
        // AppCtrlから継承
        $controller('AppCtrl', {$rootScope: $rootScope, $scope: $scope});
    
        $scope.init = function init() {
          console.log("MaintenanceCtrl init");
        };

    });

    // ---------------------------------
    // ディレクティブ MaintenanceCtrl
    // ---------------------------------
    app.directive('test', function () {
        return {
            restrict: "A",
            link: function () {
                alert('これはテストです！');
            }
        };
    });