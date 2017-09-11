myApp.controller('indexCardsController',  function($scope, Vocabulary, Score){

    //initial score value
    $scope.score = 0;
    
    $scope.setupIndexCards = function(){
        
        //get current index card
        $scope.currentTest = Vocabulary.getCurrentTest();

        //get the current location in the test array
        $scope.currentQuestionNumber = Vocabulary.getCurrentLocation();

        //get the current question from the test array
        $scope.currentQuestion = $scope.currentTest[0];

        //get the current array of answers from the test array
        $scope.currentAnswers = $scope.currentTest[1];    
    }
    
    //initial vocabulary database for start-up
    $scope.setupIndexCards();
    
    //set the showCorrectAnswer varible to false at startup
    $scope.showCorrectAnswer = false;
    
    //set the showIncorrectAnswer varible to false at startup
    $scope.showIncorrectAnswer = false;
    
    $scope.showButtons = false;
    
    //function used in the radio button to save the answer to the selected radio value (eighter true or false based on the current answer correct property)
    $scope.select= function(x){
        $scope.correct = x;
    }//end of select function    
    
    $scope.done = function(){
        //update Score service that a question has been answered
        Score.addQuestionsAnswered();
        //hides the done button and show the continue button
        $scope.showButtons = true;
        
        if($scope.correct==true){
            //show the correct answer celebrations
            $scope.showCorrectAnswer = true;
            //update the Score service that a question has been answered correctly
            Score.addScore();
        }else {
            // show the incorrect answer celebrations
            $scope.showIncorrectAnswer= true;
        }
        //update the score
        $scope.score = Score.getScore();        
    }
    
    $scope.continue = function(){
        $scope.showButtons = false;
        $scope.showCorrectAnswer = false;
        $scope.showIncorrectAnswer = false;
        
        Vocabulary.updateCurrentLocation();
        $scope.setupIndexCards();
    }
    
});//end of indexCardsController