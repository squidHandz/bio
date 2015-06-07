var persBio = angular.module('persBio', ['ui.bootstrap', 'ui.router']);

persBio.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider

		.state('/', {
			url: '/home',
			templateUrl: '/template/partial-home.html'
			})

        .state('about', {
            url: '/about',
            templateUrl: '/template/partial-about.html'
        	})
        
			.state('about.nj', {
				url: '/newjersey',
				templateUrl: '/template/partial-about-nj.html'
			})
			.state('about.nova', {
				url: '/villanova',
				templateUrl: '/template/partial-about-nova.html'
			})
			.state('about.slc', {
				url: '/saltlakecity',
				templateUrl: '/template/partial-about-slc.html'
			})

		.state('projects', {
			url: '/projects',
			templateUrl: '/template/partial-projects.html'
			})


	        // use the HTML5 History API
	        $locationProvider.html5Mode(true);


/*            views: {
                '': { templateUrl: 'template/partial-portfolio.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: '/template/table-data.html',
                    controller: 'homeCtrl'
                }
            }
            
        });*/
        
});

