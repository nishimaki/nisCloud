	// ---------------------------------
	// コントローラー PortalCtrl
	// ---------------------------------
    app.controller('PortalCtrl', function($rootScope, $scope, $http, $controller) {
        
        // AppCtrlから継承
        $controller('AppCtrl', {$rootScope: $rootScope, $scope: $scope});
    
            $scope.portalList = [];

            $scope.init = function init() {
              console.log("PortalCtrl init");
              
        			$http.get('/portal').success(function(data) {
      					$scope.portalList = data;
        			});
              
            };

    });
