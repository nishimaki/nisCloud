	// ---------------------------------
	// モジュール
	// ---------------------------------
	var app = angular.module('myApp', []);

	// ---------------------------------
	// コントローラー　PageCtrl
	// ---------------------------------
	app.controller('AppCtrl'
				, ['$rootScope', '$scope'
				, function($rootScope, $scope) {

        // 日付編集		
        $scope.editDate = function editDate(datetime) {
          var m = moment(datetime);
          var formatDate = m.format('YYYY/MM/DD HH:mm:ss.SSS');
          return formatDate;
        };

	}]);