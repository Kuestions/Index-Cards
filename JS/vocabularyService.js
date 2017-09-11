/*A service that provides an array of vocabulary terms and definitions to the controller */
myApp.factory('Vocabulary',  function () {
    
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var test = [{"term":"apple", "correctAnswer":"red"}, {"term":"orange", "correctAnswer":"orange"}, {"term":"kiwi", "correctAnswer":"green"}, {"term":"banana", "correctAnswer":"yellow"}];

    // location object that points to the current location in the test array
    var currentLocation = {"location":0};
    
    
    return {
        
        //function call by the controller to load the current term and three answers using an array
        getCurrentTest: function(){

            var currentTestArray = [];//array return to the controller with term and three answers
            
            var currentAnswerArray = [];// array to hold three answers
            var currentTestAnswers = [];// array to to hold randomize test answers

            //get the current term and correct answer
            var currentTerm  = test[currentLocation.location].term;
            var currentCorrectAnswer = test[currentLocation.location].correctAnswer;

            //create an array of all answers
            for(var i=0;i<test.length;i++){
                currentAnswerArray.push(test[i].correctAnswer);
            }

            //randomly pick the first answer. Keep if it doesn’t match the currentCorrectAnswer, re-pick if it matches the currentCorrectAnswer
            var firstAnswer = currentAnswerArray[Math.floor(Math.random() * currentAnswerArray.length)];
            while(currentCorrectAnswer==firstAnswer){
             var firstAnswer = currentAnswerArray[Math.floor(Math.random() * currentAnswerArray.length)];
            }

            //randomly pick the second answer and keep if it doesn’t match the correct answer and first answer
            var secondAnswer = currentAnswerArray[Math.floor(Math.random() * currentAnswerArray.length)];
            while(currentCorrectAnswer===secondAnswer || firstAnswer === secondAnswer){
            var secondAnswer = currentAnswerArray[Math.floor(Math.random() * currentAnswerArray.length)];
            }

            //push all answers into the currentTestAnswers as an object with a second attribute as true or false
            currentTestAnswers.push({"answer": currentCorrectAnswer, "correct":true}, {"answer": firstAnswer, "correct":false}, {"answer": secondAnswer, "correct":false});
            
        

        /* Fisher-Yates shuffle used below
        shuffles: function(array){
            var currentIndex = array.length, temporayValue, randomIndex;
            
            while(0 !== currentIndex){
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                
                temporayValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporayValue;
            }
            return array;
        }
        */            
            //Shuffle the currentTestAnswers array
            var currentIndex = currentTestAnswers.length, temporayValue, randomIndex;
            
            while(0 !== currentIndex){
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                
                temporayValue = currentTestAnswers[currentIndex];
                currentTestAnswers[currentIndex] = currentTestAnswers[randomIndex];
                currentTestAnswers[randomIndex] = temporayValue;
            } 

            //add the currentTerm and the randomize array of object answers to currentTestArray
            currentTestArray.push(currentTerm);
            currentTestArray.push(currentTestAnswers);
            
            //return the currentTestArray to use in the controller
            return currentTestArray;
           
        }, // end of getCurrentTest function
        
        updateCurrentLocation: function(){
            currentLocation.location +=  1;
        },
        
        getCurrentLocation: function(){
            return currentLocation.location + 1;
        }

    }/*End of main Return*/
    
    
});