angular.module('dreamophone', ['ionic', 'dreamophone.controllers', 'dreamophone.services'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html'
      })
      
      // if the url matches something like /dream/88 then this route
      // will fire off the DreamDetailCtrl (controllers.js)
      .state('dreamView', {
        url: '/dream/:dreamId',
        templateUrl: '/dream.html',
        controller: 'DreamDetailCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })

