/*A service that provides an array of vocabulary terms and definitions to the controller */
myApp.factory('Vocabulary',  function () {
    
    //test array containing vocabulary words as terms and definitions as correctAnswer
    /*
    var test = [
        {"term":"The knowledge obtained by observing natural events and conditions in order to discover facts and formulate laws or priniciples that can be verified or tested", "correctAnswer":"Science"}, 
        {"term":"The application of science for pratical purposes", "correctAnswer":"Technology"}, 
        {"term":"A descriptive statement or equation that reliably predicts events under certain conditions", "correctAnswer":"Law"}, 
        {"term":"A system of ideas that explains many related observations and is supported by a large body of evidence acquired through scientific investigation", "correctAnswer":"Theory"},
        {"term":"The ability and willingness to access claims critically and to make judgements on the basic of objective and supported research ", "correctAnswer":"Critical Thinking"},
        {"term":"A series of steps followed to solve problems including collecting data, formulating a hypothsis, testing the hypothsis, and coming to a conclusion", "correctAnswer":"Scientific Methods"},
        {"term":"A factor that changes in a experiment in order to test a hypothesis", "correctAnswer":"variable"},
        {"term":"a measure of the straight line distance between two points", "correctAnswer":"Length"},
        {"term":"A measure of the amount of mass in a object", "correctAnswer":"Mass"},
        {"term":"A measure of the size of a body or region in a three-dimensional space", "correctAnswer":"volumn"},
        {"term":"A measure of the gravitational force exerted on an object", "correctAnswer":"weight"},
        {"term":"A meathod of expressing a quantity as a number mulitplied by 10 to the approparate power", "correctAnswer":"Scientific notation"},
        {"term":"The exactness of a measurement", "correctAnswer":"Precision"},
        {"term":"A prescribed decimal place that determines the amount of rounding of the measurement", "correctAnswer":"Signifant Figure"},
        {"term":"A description of how close a measurement is to the true value of the quantity measured", "correctAnswer":"Accuracy"},
        {"term":"On planet Earth", "correctAnswer":"Location"},
        {"term":"has both physical characteristics and human, or cultural characteristics", "correctAnswer":"Place"},        
        {"term":"describes how humans use and interact with the enviroment", "correctAnswer":"Human-enviroment interaction"},
        {"term":"concerns humans interactions the way we are linked with regions, cultures, and people beyond our immediate envirment", "correctAnswer":"Movement"},
        {"term":"Geographers divide the world", "correctAnswer":"Regions"},
        {"term":"Is the distance north and south of the equatar", "correctAnswer":"Latitude"},
        {"term":"Is the distance east or west of the prime meridian at Greenwich, England", "correctAnswer":"Longitude"},
        {"term":"Now helps us determine the precise location of a place", "correctAnswer":"Global Positioning System (GPS)"},
        {"term":"includes such elements as climate, water, land forms, soil, energy, and mineral resource, vegtation, and different species of wildlife.", "correctAnswer":"Natural Environment"},
        {"term":"refers to the long terms of temperature and rainfall", "correctAnswer":"Climate"},
        {"term":"refers to the day-to-day conditions and changes in the atmosphere for temperature, rainfall, wind, cloudiness, humidly, and air pressure", "correctAnswer":"weather"},
        {"term":"rain, snow, sleet, and hail is 52 inches", "correctAnswer":"precipitation"},
        {"term":"generally occur during the spring and early summer when warm moist air moving northward from the Gulf of Mexico meets colder air coming from the interior of the United States", "correctAnswer":"Tornadoes"},
        {"term":"are storms that arise in the tropical Atlantic ocean and cover hundreads of square miles", "correctAnswer":"Hurricanes"},
        {"term":"refers to the water in lakes, ponds, rivers, and the ocean", "correctAnswer":"Surface Water"},
        {"term":"seeps below Earth's surface into the spaces and cracks in the rocks. Aquifiers: it slowly moves through and accumulates in rocks formation", "correctAnswer":"Ground Water"},
        {"term":"Is in geographical area draining into a area or reservior", "correctAnswer":"Drain-age basin"},
        {"term":"many people plant trees on Earth Day", "correctAnswer":"Left"},
        {"term":"John Muir (right) and Teddy Roosevelt at Yosemite", "correctAnswer":"Above"}        
    ];
*/
    // location object that points to the current location in the test array
    var currentLocation = {"location":0};
    
    var randomizeTest = [];
    
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
    
    
    return {
        
        //function call by the controller to load the current term and three answers using an array
        getCurrentTest: function(data){

            var test = data;
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
        }, 
        
        getLengthOfArray: function(test){
            return test.length
        },
        
        randomizeTest: function(test){
            
            //Shuffle the test array
            var currentIndex = test.length, temporayValue, randomIndex;
            
            while(0 !== currentIndex){
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                
                temporayValue = test[currentIndex];
                test[currentIndex] = test[randomIndex];
                test[randomIndex] = temporayValue;
            } 
        }

    }/*End of main Return*/
    
    //By Smiley
});