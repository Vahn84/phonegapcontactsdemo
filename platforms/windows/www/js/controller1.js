 /**
  * controller1.js
  */
 (function () {
     'use strict';
  
     var angulargap= angular.module('angulargap');
     angulargap.controller('IndexCtrl', ['$scope', '$mdSidenav' function ($scope, $mdSidenav) {

    	 $scope.findContact = function (contactSearch) {
    		    ContactService.find(contactSearch).then(function (contacts) {
    		        $scope.contacts = contacts;
    		    }, function (error) {
    		        console.log(error);
    		    });
    		};
    	 
    	 
    	 
	     $scope.openLeftMenu = function() {
	         $mdSidenav('left').toggle();
	       };
	       
    	 
    	 
     }]);
  
 }());