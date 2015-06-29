'use strict';
	// ---------------------------------
	// コントローラー MessageCtrl
	// ---------------------------------
	app.controller('MessageCtrl'
				, ['$scope', 'SharedService'
				, function($scope, SharedService) {

        $scope.MessageList = [];
        
        $scope.$on('changedErrorMessage', function() {
            console.log("[enter] changedErrorMessage");
            $scope.MessageList = [];
            var msg = SharedService.errorMessage.get();
            if (msg != undefined && msg != "") {
              $scope.MessageList = [SharedService.errorMessage.get()];
            }
						$scope.$apply();
            console.log("[leave] changedErrorMessage");
        });

	}]);
	
