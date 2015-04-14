var app = angular.module('FlashCards', []);

app.controller('FlashCardController', function ($scope) {
    // We now have access to our scope using $scope.
    $scope.flashCard = {
    	question: 'What is Angular?',
    	answers: [
        	{ text: 'A front-end framework for great power!', correct: true },
        	{ text: 'Something lame, who cares, whatever.', correct: false },
        	{ text: 'Some kind of fish, right?', correct: false }
    	]
	};

	$scope.answered = false;
	$scope.answeredCorrectly = false;
	$scope.answerQuestion = function(answer) {
		if ($scope.answered == false) {
			
			if (answer.correct == true) {
				$scope.answeredCorrectly = true;
			}

			$scope.answered = true;
		}
	};

});