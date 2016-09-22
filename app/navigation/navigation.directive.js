(function () {
	'use strict';

	angular
		.module("inTread")
		.directive("navigation", navigation);

		function navigation() {
			var directive = {
				restrict : 'E',
				templateUrl :'app/navigation/navigation.directive.html',
				controller : NavigationController,
				controllerAs : 'nc',
				bindToController : true

			};

			return directive;
		}

		NavigationController.$inject = ['$state'];

		function NavigationController($state) {
			var nc = this;

			function home() {
				$state.go('home');
			}

			function contact() {
				$state.go('contact');
			}

			function about() {
				$state.go('about');
			}
		}

	
}());