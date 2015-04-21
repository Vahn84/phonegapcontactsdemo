  
     var angulargap= angular.module('angulargap');
     angulargap.controller('IndexCtrl', ['$scope', '$mdSidenav', '$cordovaContacts', function ($scope, $mdSidenav, $cordovaContacts) {
    	 
    	
    	 
    	 $scope.getContacts = function() {
             $scope.contacts = [];
             function onSuccess(contacts) {
               for (var i = 0; i < contacts.length; i++) {
                 var contact = contacts[i];
                 $scope.contacts.push(contact);
                
               }
             };
             function onError(contactError) {
               alert(contactError);
             };
             var options = {};
             options.multiple = true;
             $cordovaContacts.find(options).then(onSuccess, onError);
           };

    	 
           
    	
	     $scope.openLeftMenu = function() {
	         $mdSidenav('left').toggle();
	       };
	       
    	 
    	 
     }]);
  
     
     
     