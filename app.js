angular.module('playgroundApp', [])
.controller('playgroundController', function($scope) {
  $scope.namechange = function () {
    $scope.greeting = "Hello" + $scope.name;
  };
});
