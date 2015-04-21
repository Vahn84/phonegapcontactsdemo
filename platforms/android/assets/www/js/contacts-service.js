// Factory
     angulargap.factory('testFactory', function(){
         return {
        	 retrieveContacts: function($cordovaContacts){
            	 
            	   var contacts = [];
                   function onSuccess(contacts) {
                     for (var i = 0; i < contacts.length; i++) {
                       var contact = contacts[i];
                       contacts.push(contact);
                      
                     }
                   };
                   function onError(contactError) {
                     alert(contactError);
                   };
                   var options = {};
                   options.multiple = true;
                   $cordovaContacts.find(options).then(onSuccess, onError);
            	 
                 return contacts;
             }  
         }               
     });  