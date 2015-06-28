'use strict';
	// ---------------------------------
	// コントローラー LoginCtrl
	// ---------------------------------
	app.controller('LoginCtrl'
				, ['$rootScope', '$scope', '$http'
				, function($rootScope, $scope, $http) {

        $scope.init = function init() {
          console.log("LoginCtrl init");

	      $scope.submit = function() {
	        if ($scope.inputEmail) {
        		var postData = {
					    data: {
					        email: $scope.inputEmail,
					        password: $scope.inputPassword
					      }
						};
    			$http.post('/login', postData, null).success(function(data) {
  					$scope.portalList = data;
    			});
      		}
	      };
		};
	}]);
	
