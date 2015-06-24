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
		
		$scope.test = "";
		
        var socket = io.connect();

        $scope.messages = [];
        $scope.roster = [];
        $scope.name = '';
        $scope.text = '';

        socket.on('connect', function () {
          $scope.setName();
        });

        socket.on('message', function (msg) {
          $scope.messages.push(msg);
          $scope.$apply();
        });

        socket.on('roster', function (names) {
          $scope.roster = names;
          $scope.$apply();
        });

        $scope.send = function send() {
          console.log('Sending message:', $scope.text);
          socket.emit('message', $scope.text);
          $scope.text = '';
        };

        $scope.setName = function setName() {
          socket.emit('identify', $scope.name);
        };
        
        $scope.editDate = function editDate(datetime) {
          var m = moment(datetime);
          var formatDate = m.format('YYYY/MM/DD HH:mm:ss.SSS');
          return formatDate;
        };

	}]);