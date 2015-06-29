'use strict';
	// ---------------------------------
	// コントローラー AppCtrl
	// ---------------------------------
	app.controller('AppCtrl'
				, ['$rootScope', '$scope'
				, function($rootScope, $scope) {

        $scope.MessageList = [];

        $scope.init = function init() {
          console.log("AppCtrl init");
        };

        // 日付編集		
        $scope.editDate = function editDate(datetime) {
          var m = moment(datetime);
          var formatDate = m.format('YYYY/MM/DD HH:mm:ss.SSS');
          return formatDate;
        };

	}]);
	
