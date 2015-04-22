/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var app = {
	    // Application Constructor
	    initialize: function() {
	        this.bindEvents();
	    },
	    // Bind Event Listeners
	    //
	    // Bind any events that are required on startup. Common events are:
	    // 'load', 'deviceready', 'offline', and 'online'.
	    bindEvents: function() {
	        document.addEventListener('deviceready', this.onDeviceReady, false);
	    },
	    // deviceready Event Handler
	    //
	    // The scope of 'this' is the event. In order to call the 'receivedEvent'
	    // function, we must explicity call 'app.receivedEvent(...);'
	    onDeviceReady: function() {
	        app.receivedEvent('deviceready');
	    },
	    // Update DOM on a Received Event
	    receivedEvent: function(id) {
	        console.log('Received Event: ' + id);
			 initializeFirstController();
	    }
	};


app.initialize();

function initializeFirstController() {
	
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
	
}