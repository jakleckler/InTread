(function() {
	'use strict';

	angular
		.module('inTread')
		.directive('survey', survey);

		function survey() {
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/survey/survey.directive.html',
				controller: SurveyController,
				controllerAs: 'sc',
				bindToController: true
			};

			return directive;
		}

		SurveyController.$Inject = [];

		function SurveyController() {
			var sc = this;
		}
}());