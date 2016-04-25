angular.module('pgApp', [])
.controller('pgController', function($scope) {
  $scope.namechange = function () {
    $scope.greeting = "Hello" + $scope.name;
  };
});
