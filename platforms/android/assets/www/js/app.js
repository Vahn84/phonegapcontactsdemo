//var angulargap= angular.module('angulargap');

angular.module('fsCordova', [])
    .service('CordovaService', ['$document', '$q',
        function($document, $q) {
            var d = $q.defer(),
                resolved = false;
            var self = this;
            this.ready = d.promise;
            document.addEventListener('deviceready', function() {
                resolved = true;
                d.resolve(window.cordova);
            });

            // Check to make sure we didn't miss the
            // event (just in case)
            setTimeout(function() {
                if (!resolved) {
                    if (window.cordova) d.resolve(window.cordova);
                }
            }, 3000);
        }]);

var angulargap =angular.module("angulargap",['ngMaterial', 'ngAnimate', 'fsCordova']);
angulargap.config(function($compileProvider, $mdThemingProvider) {
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content):|data:image\//);
			
						 $mdThemingProvider.theme('default')
				.primaryPalette('light-blue')
				.accentPalette('lime');
			
        });
		
console.log("config");

    angulargap.controller('IndexCtrl', function ($scope, $mdSidenav, CordovaService) {
    	 
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

    	 
        CordovaService.ready.then(function() {   
    	$scope.getContacts();
		
		});
		
	     $scope.openLeftMenu = function() {
	         $mdSidenav('left').toggle();
	       };
		   
		 
    	 
     });