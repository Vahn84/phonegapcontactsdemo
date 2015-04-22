

var angulargap = angular.module("angulargap", ['ngMaterial', 'ngAnimate']).config(function($compileProvider, $mdThemingProvider) {
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|content):|data:image\//);
			
						 $mdThemingProvider.theme('default')
				.primaryPalette('pink')
				.accentPalette('orange');
			
        });
console.log("linked dependencies");
