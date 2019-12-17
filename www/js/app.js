// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
		   controller: 'search'
      }
    }
  })
  .state('app.browse', {
    url: '/browse',
    views: {
      'menuContent': {
        templateUrl: 'templates/browse.html',
		  controller: 'browse'
      }
    }
  })
  .state('app.intro', {
    url: '/intro',
    views: {
      'menuContent': {
        templateUrl: 'templates/intro.html' 
		 
      }
    }
  })
  .state('app.share', {
    url: '/share',
    views: {
      'menuContent': {
        templateUrl: 'templates/share.html' ,
		 controller: 'share11' 
      }
    }
  })
   .state('app.Copmatability', {
      url: '/Copmatability',
      views: {
        'menuContent': {
          templateUrl: 'templates/Copmatability.html',
		   controller: 'Copmatability' 
        }
      }
    })
  .state('app.ESFJ', {
      url: '/ESFJ',
      views: {
        'menuContent': {
          templateUrl: 'templates/ESFJ.html'
        }
      }
    })
	
		 .state('app.ENFJ', {
      url: '/ENFJ',
      views: {
        'menuContent': {
          templateUrl: 'templates/ENFJ.html'
        }
      }
    })
	 .state('app.ENFP', {
      url: '/ENFP',
      views: {
        'menuContent': {
          templateUrl: 'templates/ENFP.html'
        }
      }
    })
	 .state('app.ENTJ', {
      url: '/ENTJ',
      views: {
        'menuContent': {
          templateUrl: 'templates/ENTJ.html'
        }
      }
    })
	 .state('app.ENTP', {
      url: '/ENTP',
      views: {
        'menuContent': {
          templateUrl: 'templates/ENTP.html'
        }
      }
    })
	 .state('app.ESFP', {
      url: '/ESFP',
      views: {
        'menuContent': {
          templateUrl: 'templates/ESFP.html'
        }
      }
    })
	 .state('app.ESTJ', {
      url: '/ESTJ',
      views: {
        'menuContent': {
          templateUrl: 'templates/ESTJ.html'
        }
      }
    })
	 .state('app.ESTP', {
      url: '/ESTP',
      views: {
        'menuContent': {
          templateUrl: 'templates/ESTP.html'
        }
      }
    })
	 .state('app.INFJ', {
      url: '/INFJ',
      views: {
        'menuContent': {
          templateUrl: 'templates/INFJ.html'
        }
      }
    })
	 .state('app.INFP', {
      url: '/INFP',
      views: {
        'menuContent': {
          templateUrl: 'templates/INFP.html'
        }
      }
    })
	 .state('app.INTJ', {
      url: '/INTJ',
      views: {
        'menuContent': {
          templateUrl: 'templates/INTJ.html'
        }
      }
    })
	 .state('app.INTP', {
      url: '/INTP',
      views: {
        'menuContent': {
          templateUrl: 'templates/INTP.html'
        }
      }
    }) 
	.state('app.ISFJ', {
      url: '/ISFJ',
      views: {
        'menuContent': {
          templateUrl: 'templates/ISFJ.html'
        }
      }
    }) 
	.state('app.ISFP', {
      url: '/ISFP',
      views: {
        'menuContent': {
          templateUrl: 'templates/ISFP.html'
        }
      }
    }) 
	.state('app.ISTJ', {
      url: '/ISTJ',
      views: {
        'menuContent': {
          templateUrl: 'templates/ISTJ.html'
        }
      }
    }) 
	.state('app.ISTP', {
      url: '/ISTP',
      views: {
        'menuContent': {
          templateUrl: 'templates/ISTP.html'
        }
      }
    })
	
	
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }

	
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/browse');
})
.directive('capitalize', function() {
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
        var capitalize = function(inputValue) {
           if(inputValue == undefined) inputValue = '';
           var capitalized = inputValue.toUpperCase();
           if(capitalized !== inputValue) {
              modelCtrl.$setViewValue(capitalized);
              modelCtrl.$render();
            }         
            return capitalized;
         }
         modelCtrl.$parsers.push(capitalize);
         capitalize(scope[attrs.ngModel]);  // capitalize initial value
     }
   };
});
