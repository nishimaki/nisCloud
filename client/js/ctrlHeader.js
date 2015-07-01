	'use strict';
	// ---------------------------------
	// コントローラー HeaderCtrl
	// ---------------------------------
	app.controller('HeaderCtrl'
				, ['$rootScope', '$scope', '$http', '$interval', '$state', 'SharedService'
				, function($rootScope, $scope, $http, $interval, $state, SharedService) {
		$scope.SystemTitle = "◯△◯△システム";
		$scope.Title = "";
		$scope.LoginStatus = false;
		$scope.DateTime = "";

        $scope.init = function init() {
			console.log("HeaderCtrl init");
			$state.go("home");
		};

		$interval(function () {
			var formatDate = moment().format('YYYY/MM/DD(ddd)  HH:mm:ss');
			$scope.DateTime = formatDate;
		}, 1000);
		
        $scope.logout = function logout() {
			console.log("HeaderCtrl logout");
			$http.get('/logout')
			.success(function(data) {
			  if (data == "OK") {
				$state.go("login");
			  }
			});
        };

        $scope.$on('changedLoginStatus', function() {
            var sts = SharedService.loginStatus;
            if (sts != "") {
            	$scope.LoginStatus = true;
            } else {
            	$scope.LoginStatus = false;
            }
        });
        $scope.$on('changedTitle', function() {
            $scope.Title = SharedService.title;
        });
        
	}]);