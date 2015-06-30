'use strict';
	// ---------------------------------
	// コントローラー MessageCtrl
	// ---------------------------------
	app.controller('MessageCtrl'
				, ['$scope', 'SharedService'
				, function($scope, SharedService) {

        $scope.MessageList = [];
        
        $scope.$on('changedErrorMessage', function() {
            // console.log("[enter] changedErrorMessage");
            $scope.MessageList = [];
            var msg = SharedService.errorMessage;
            if (msg != undefined && msg != "") {
              $scope.MessageList = [SharedService.errorMessage];
            }
            // console.log("[leave] changedErrorMessage");
        });

	}]);
	
