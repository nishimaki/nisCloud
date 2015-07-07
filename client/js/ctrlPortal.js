	'use strict';
	// ---------------------------------
	// コントローラー PortalCtrl
	// ---------------------------------
	app.controller('PortalCtrl'
		, ['$rootScope', '$scope', '$http', '$controller', 'SharedService'
        , function($rootScope, $scope, $http, $controller, SharedService) {
        
        // AppCtrlから継承
        $controller('AppCtrl', {$rootScope: $rootScope, $scope: $scope});
    
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
					console.log("afterChange:"+ changes + ":" + source);
					$scope.changeData = changes;
				}
				                
            });

        };
    }]);