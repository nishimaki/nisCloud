	'use strict';
	// ---------------------------------
	// コントローラー PortalCtrl
	// ---------------------------------
	app.controller('PortalCtrl'
        , function($rootScope, $scope, $http, $controller, SharedService) {
        
        // AppCtrlから継承
        $controller('AppCtrl', {$rootScope: $rootScope, $scope: $scope});
    
        $scope.portalList = [];

        $scope.init = function init() {
            console.log("PortalCtrl init");
            
            SharedService.SetTitle("ポータル");
          
    		$http.get('/portal').success(function(data) {
      			$scope.portalList = data;
    		});
        };
    });