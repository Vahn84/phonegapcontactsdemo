//var angulargap= angular.module('angulargap');

var angulargap =angular.module("angulargap",['ngMaterial', 'ngAnimate']);
angulargap.config(function($compileProvider, $mdThemingProvider) {
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content):|data:image\//);
			
						 $mdThemingProvider.theme('default')
				.primaryPalette('light-blue')
				.accentPalette('lime');
			
        });
		
console.log("config");

