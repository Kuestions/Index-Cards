myApp.controller('indexCardsController',  function($scope, Vocabulary){

    //initial score value
    $scope.score = 0;
    
    //initial vocabulary database for testing
    $scope.currentTest = Vocabulary.getCurrentTest();
    $scope.currentQuestionNumber = Vocabulary.getCurrentLocation();
    $scope.currentQuestion = $scope.currentTest[0];
    $scope.currentAnswers = $scope.currentTest[1];
    
    //function used in the radio button to save the answer to the selected radio value (eighter true or false based on the current answer correct property)
    $scope.select= function(x){
        $scope.correct = x;
    }//end of select function    
    
    
    
});//end of indexCardsController