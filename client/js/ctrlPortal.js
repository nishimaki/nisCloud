	// ---------------------------------
	// コントローラー PortalCtrl
	// ---------------------------------
    app.controller('PortalCtrl', function($rootScope, $scope, $controller) {
        
        // AppCtrlから継承
        $controller('AppCtrl', {$rootScope: $rootScope, $scope: $scope});
    
            $scope.portalList = [];

            $scope.init = function init() {
              console.log("PortalCtrl init");
              $scope.portalList = [
                {title: 'タイトル１'},
                {title: 'タイトル２'},
                {title: 'タイトル３'}
              ];
            };

    });
