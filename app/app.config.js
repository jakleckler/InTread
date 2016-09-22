(function () {
	'use strict';
	angular
		.module('inTread')
		.config(configRoutes);

		function configRoutes($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");

			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'app/views/home.html'
				})
				.state('contact', {
					url: '/contact',
					templateUrl: 'app/views/contact.html'
				})
				.state('about', {
					url: '/about', 
					templateUrl: 'app/about/about.html'
				})
				.state('survey', {
					url: '/survey',
					templateUrl: 'app/survey/survey.html'
				})
				.state('thankyou', {
					url: '/thankyou',
					templateUrl: 'app/views/thankyou.html'
				})
		}
}());