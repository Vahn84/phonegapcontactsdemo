var angulargap = angular.module("angulargap", ['ngMdIcons']);
angulargap.controller("MyController", function ($scope, $mdSidenav) {
    $scope.message = "AngularJS!";
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
      };
});