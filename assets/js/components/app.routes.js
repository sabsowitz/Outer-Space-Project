// configure our routes
CosmosApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/mothership');

    $stateProvider
    // route for the home page
        .state('home', {
            url: '/mothership',
            templateUrl : 'pages/home.html',
        })

        // route for the explore page
        .state('explore', {
            url: '/explore',
            templateUrl : 'pages/explore.html',
            controller  : 'ExploreController'
        })
        // sine wave state
        .state('explore.sine', {
            url: '&sine',
            templateUrl : 'pages/explore.sine.html',
            controller : 'ExploreController'
        })
        // apod state
        .state('explore.apod', {
            url: '&apod',
            templateUrl : 'pages/explore.apod.html',
            controller : 'ExploreController'
        })
        // mars rover state
        .state('explore.mars', {
            url: '&rover',
            templateUrl : 'pages/explore.mars.html',
            controller : 'MarsController'
        })
        // mars rover "Curiosity" state
        .state('explore.mars.curiosity', {
            url: '&curiosity',
            templateUrl : 'pages/rover.curiosity.html',
            controller : 'MarsController'
        })
        // particle state
        .state('explore.particles', {
            url: '&particles',
            templateUrl : 'pages/explore.particles.html',
            controller : 'ExploreController'
        })
        // circle state
        .state('explore.circles', {
            url: '&circles',
            templateUrl: 'pages/explore.circles.html',
            controller: 'ExploreController'
        })

        // route for the art page
        .state('art', {
            url: '/art',
            templateUrl : 'pages/art.html',
            controller  : 'artController'
        })

        // route for the contact page
        .state('contact', {
            url: '/contact',
            templateUrl : 'pages/contact.html'
        })
});