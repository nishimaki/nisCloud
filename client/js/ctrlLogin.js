'use strict';
	// ---------------------------------
	// コントローラー LoginCtrl
	// ---------------------------------
	app.controller('LoginCtrl'
				, ['$rootScope', '$scope', '$http', '$state', 'SharedService'
				, function($rootScope, $scope, $http, $state, SharedService) {

        $scope.init = function init() {
			//console.log("LoginCtrl init");
			SharedService.SetLoginStatus("");
		};

		$scope.submit = function() {
			if ($scope.inputUserName) {
				var postData = {
					data: {
						email: null,
						username: $scope.inputUserName,
						password: $scope.inputPassword
					}
				};
				$http.post('/login', postData, null).success(function(data) {
					// console.log("Loing result:" + data);
					if (data == "OK") {
						// console.log("Loing OK!! GOTO Home");
						SharedService.SetErrorMessage("");
						SharedService.SetLoginStatus("LOGIN");
						$state.go("home");
					} else {
						// console.log("Loing NG!!");
						SharedService.SetErrorMessage("ログインエラー");
					}
				});
			}
		};

	}]);
	
