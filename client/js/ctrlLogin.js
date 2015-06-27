'use strict';
	// ---------------------------------
	// コントローラー LoginCtrl
	// ---------------------------------
	app.controller('LoginCtrl'
				, ['$rootScope', '$scope'
				, function($rootScope, $scope) {

        $scope.init = function init() {
          console.log("LoginCtrl init");
        };

	      $scope.submit = function() {
        	console.log("LoginCtrl submit");
	        if ($scope.inputEmail) {
						console.log("LoginCtrl submit:" + $scope.inputEmail);
	        }
	      };

	}]);
	
