angular.module('dreamophone.controllers', [])

.controller('HomeCtrl', function($scope, $ionicSideMenuDelegate, Dreams) {
    
  $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  
  $scope.dreams = Dreams.all();
});