	// ---------------------------------
	// コントローラー　ChatCtrl
	// ---------------------------------
    app.controller('ChatCtrl', function($scope, $controller) {
        
        // AppCtrlから継承
        $controller('AppCtrl', {$scope: $scope});
    
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
    
            $scope.init = function init() {
              $scope.$apply();
            };
    
            $scope.send = function send() {
              console.log('Sending message:', $scope.text);
              socket.emit('message', $scope.text);
              $scope.text = '';
            };
    
            $scope.setName = function setName() {
              socket.emit('identify', $scope.name);
            };
            
    });
