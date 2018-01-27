myApp.controller('indexCardsController',  function($scope, Vocabulary, Score, Data){

    //initial score value
    $scope.score = 0;    
    
    //setup variable to hide Finish screen
    $scope.landingPage = true;
    
    //setup variable to hide the fill in the blank test
    $scope.fillInBlank = false;
        
    //setup variable to hide Finish screen
    $scope.finish = false;

    //get length of the test array to determine when test is finish in the continue function
    $scope.endOfTest= 0;
    
    //initialize the variable to hold the vocabulary terms and answers
    $scope.testData = [];
    
    //initial setup of what type of test ui to show
    $scope.typeOfTest = "MC";
    
    //sets up the index cards for Multiple Choice test with the backend data
    $scope.setupIndexCards = function(){    
        
        //get current index card
        $scope.currentTest = Vocabulary.getCurrentTest($scope.testData);

        //get the current location in the test array
        $scope.currentQuestionNumber = Vocabulary.getCurrentLocation();

        //get the current question from the test array
        $scope.currentQuestion = $scope.currentTest[0];

        //get the current array of answers from the test array
        $scope.currentAnswers = $scope.currentTest[1];
        
        //get a random positive Feedback to show when a correct answer is chosen
        $scope.positiveFeedBack = Score.getPositiveFeedBack();
        
        //get a random negative Feedback to show when a incorrect answer is chosen
        $scope.negativeFeedBack = Score.getNegataiveFeedBack();
        
        //Change the app UI screen from the landing page to the Q & A.
        $scope.landingPage = false;
    }
    
    //sets up the index cards for Fill in the Blank test with the backend data
    $scope.setupIndexCardsBlank = function(){    
        
        //get current index card
        $scope.currentTest = Vocabulary.getCurrentFillInTheBlankTest($scope.testData);

        //get the current location in the test array
        $scope.currentQuestionNumber = Vocabulary.getCurrentLocation();

        //get the current question from the test array
        $scope.currentQuestion = $scope.currentTest[0];

        //get the current array of answers from the test array
        $scope.currentAnswers = $scope.currentTest[1];
        
        //get a random positive Feedback to show when a correct answer is chosen
        $scope.positiveFeedBack = Score.getPositiveFeedBack();
        
        //get a random negative Feedback to show when a incorrect answer is chosen
        $scope.negativeFeedBack = Score.getNegataiveFeedBack();
        
        //Change the app UI screen from the landing page to the Q & A.
        $scope.landingPage = false;
    }    
    
    //set the showCorrectAnswer varible to false at startup
    $scope.showCorrectAnswer = false;
    
    //set the showIncorrectAnswer varible to false at startup
    $scope.showIncorrectAnswer = false;
    
    $scope.showButtons = false;
    
    //function used in the radio button to save the answer to the selected radio value (eighter true or false based on the current answer correct property)
    $scope.select= function(x){
        $scope.correct = x;
    }//end of select function    
    
    //function for the "finish" button. The user press this button after each question.
    $scope.done = function(){
        //update Score service that a question has been answered
        Score.addQuestionsAnswered();
        
        //hides the done button and show the continue button
        $scope.showButtons = true;

        //test if the chosen answer is true for mulitple choice and fill in the blank type tests        
        if($scope.correct==true || $scope.correct.correct){
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
    }//end of done function
    
    $scope.continue = function(){
        if($scope.currentQuestionNumber >= $scope.endOfTest){
            $scope.finish = true;
        }else {    
        $scope.showButtons = false;
        $scope.showCorrectAnswer = false;
        $scope.showIncorrectAnswer = false;
        
        //Change the location controller the next number
        Vocabulary.updateCurrentLocation();
            
        if($scope.typeOfTest=="MC"){
            //get the next vocabulary question and answer    
            $scope.setupIndexCards();            
        }else{
            $scope.setupIndexCardsBlank();
        }
            
        }//end of else statement
    }//end of continue function
    
    //restart the app by reloading the browser page
    $scope.restart = function(){
        location.reload();
    }
    
    $scope.scienceChp1MC = function(){
        //gets the vocabulary terms from the Data service to be loaded into the app.
        $scope.testData = Data.getScienceChp1();
        
        //randomize test questions
        Vocabulary.randomizeTest($scope.testData);
        
        //get length of the test array to determine when test is finish in the continue function
        $scope.endOfTest = Vocabulary.getLengthOfArray($scope.testData);  
        //Method that gets the vocab. data from the Data service, chosen by the user, and starts the app
        $scope.setupIndexCards();
        
        //Change the app UI screen from the landing page to the Q & A.
        $scope.landingPage = false;
        
        $scope.typeOfTest = "MC";
    }
    
    //method to retrived and assign chp. 2 science terms to the global $scope.testData array. This array is used in the multiple choice test.
    $scope.scienceChp2MC = function(){
        //gets the vocabulary terms from the Data service to be loaded into the app.
        $scope.testData = Data.getScienceChp2();
        
        //randomize test questions
        Vocabulary.randomizeTest($scope.testData);
        
        //get length of the test array to determine when test is finish in the continue function
        $scope.endOfTest = Vocabulary.getLengthOfArray($scope.testData); 
        
        //Method that gets the vocab. data from the Data service, chosen by the user, and starts the app
        $scope.setupIndexCards();
        
        //Change the app UI screen from the landing page to the Q & A.
        $scope.landingPage = false;
        
        $scope.typeOfTest = "MC";
    }        
    
    $scope.MSChp1MC = function(){
        //gets the vocabulary terms from the Data service to be loaded into the app.
        $scope.testData = Data.getMSChp1();
        
        //randomize test questions
        Vocabulary.randomizeTest($scope.testData);
        
        //get length of the test array to determine when test is finish in the continue function
        $scope.endOfTest = Vocabulary.getLengthOfArray($scope.testData); 
        
        //Method that gets the vocab. data from the Data service, chosen by the user, and starts the app
        $scope.setupIndexCards();
        
        //Change the app UI screen from the landing page to the Q & A.
        $scope.landingPage = false; 
        
        //change the type of test ui to show
        $scope.typeOfTest = "MC";
    }
    
    $scope.scienceChp1FB = function(){
        
        //gets the vocabulary terms from the Data service to be loaded into the app.
        $scope.testData = Data.getScienceChp1();
        
        //randomize test questions
        Vocabulary.randomizeTest($scope.testData);
        
        //get length of the test array to determine when test is finish in the continue function
        $scope.endOfTest = Vocabulary.getLengthOfArray($scope.testData); 
        
        //Method that gets the vocab. data from the Data service, chosen by the user, and starts the app
        $scope.setupIndexCardsBlank();
        
        //Change the app UI screen from the landing page to the Q & A.
        $scope.landingPage = false; 
        
        //Change the app UI screen from the landing page to the Q & A.
        $scope.fillInBlank = true;
        
        //change the type of test ui to show
        $scope.typeOfTest = "FB";
        
    }
    
    $scope.MSChp1FB = function(){
        //gets the vocabulary terms from the Data service to be loaded into the app.
        $scope.testData = Data.getMSChp1();
        
        //randomize test questions
        Vocabulary.randomizeTest($scope.testData);
        
        //get length of the test array to determine when test is finish in the continue function
        $scope.endOfTest = Vocabulary.getLengthOfArray($scope.testData);
        
        //Method that gets the vocab. data from the Data service, chosen by the user, and starts the app
        $scope.setupIndexCardsBlank();
        
        //Change the app UI screen from the landing page to the Q & A.
        $scope.landingPage = false;
        
        //Change the app UI screen from the landing page to the Q & A.
        $scope.fillInBlank = true;        
        
        //change the type of test ui to show
        $scope.typeOfTest = "FB";
    }
    
    //method to retrived and assign chp. 2 science terms to the global $scope.testData array. This array is used in the fill in the blank test.    
    $scope.scienceChp2FB = function(){
        
        //gets the vocabulary terms from the Data service to be loaded into the app.
        $scope.testData = Data.getScienceChp2();
        
        //randomize test questions
        Vocabulary.randomizeTest($scope.testData);
        
        //get length of the test array to determine when test is finish in the continue function
        $scope.endOfTest = Vocabulary.getLengthOfArray($scope.testData);
        
        //Method that gets the vocab. data from the Data service, chosen by the user, and starts the app
        $scope.setupIndexCardsBlank();
        
        //Change the app UI screen from the landing page to the Q & A.
        $scope.landingPage = false; 
        
        $scope.fillInBlank = true;
        
        $scope.typeOfTest = "FB";
        
    }       
    
});//end of indexCardsController