//var angulargap= angular.module('angulargap');

var angulargap =angular.module("angulargap",['ngMaterial', 'ngAnimate']);
angulargap.config(function($compileProvider, $mdThemingProvider) {
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content):|data:image\//);
			
						 $mdThemingProvider.theme('default')
				.primaryPalette('light-blue')
				.accentPalette('lime');
			
        });
		
console.log("config");

var appang = angular.module('angulargap');
		
   
     appang.controller('IndexCtrl', function ($scope, $mdSidenav) {
    	 
		    $scope.loader = { 
			  animateList : false,
              loading : true

             };
		 
    	 console.log("initialize controller");
    	 
    	 $scope.getContacts = function() {
             $scope.contacts = [];
             function onSuccess(contacts) {
               for (var i = 0; i < contacts.length; i++) {
                 var contact = contacts[i];
                 $scope.contacts.push(contact);
				 $scope.$apply(function(){
				  $scope.loader.loading = false;
				   $scope.loader.animateList = true;
				  console.log(contact.name.givenName);
				  });
               }
			    console.log("contacts pushed in scope");
             };
             function onError(contactError) {
               alert(contactError);
             };
             var options = {};
             options.multiple = true;
             var fields = ["displayName", "name", "phoneNumbers", "photos"];
			 navigator.contacts.find(fields, onSuccess, onError, options);
			 console.log("navigator started");
           };

    	 
           
    	$scope.getContacts();
		
	     $scope.openLeftMenu = function() {
	         $mdSidenav('left').toggle();
	       };
		   
		 
    	 
     });