/*A service that provides an array of vocabulary terms and definitions to the controller */
myApp.factory('Vocabulary',  function () {
    
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var test = [
        {"term":"Organisms that get their energy from non-living resources. Meaning they make their own food. ", "correctAnswer":"Producer"}, 
        {"term":"Organisms that eat detritus or dead organic matter.", "correctAnswer":"Detritivores"}, 
        {"term":"The movement of a particular chemical through the biological and geological parts of an ecosystem.", "correctAnswer":"biogeochemical cycle"}, 
        {"term":"An organism that gets its nutrients by feeding on other living things.", "correctAnswer":"parasite"},
        {"term":"When two species are competing for the same resources, one species will be better suited to the niche and the other will be push to another niche or extinct. ", "correctAnswer":"competitive"},
        {"term":"An example of parasitism", "correctAnswer":"humans and tape worms"},
        {"term":"An example of cooperation", "correctAnswer":"wolves hunting in packs"},
        {"term":"An example of commensalism", "correctAnswer":"A whale and barnacles"},
        {"term":"The evaporation of water from the leaves of plants", "correctAnswer":"Transpiration"},
        {"term":"the burning of fuels that release carbon dioxide", "correctAnswer":"combustion"},
        {"term":"An example of plant/herbivore", "correctAnswer":"A cow eating grass"},
        {"term":"An example of predator/prey", "correctAnswer":"A lion attacking a zebra"},
        {"term":"A process that convert ammonia into nitrates or nitrites", "correctAnswer":"nitrification"},
        {"term":"A sequence that link species by their feeding relationship", "correctAnswer":"food chain"},
        {"term":"A relationship among member of a species that helps one another", "correctAnswer":"cooperation"},
        {"term":"A model that shows the complex network of feeding relationships and the flow of energy stored in an ecosystem. ", "correctAnswer":"food web"},
        {"term":"A relationship in which one animal hunt, kills, and eat another animala", "correctAnswer":"predator/prey"},
        {"term":"An animal that is subject to be caught and eaten by another animal", "correctAnswer":"prey"},
        {"term":"Are organisms that eat only animals", "correctAnswer":"carnivores"},
        {"term":"Organisms on which a parasite feed on", "correctAnswer":"host/victim"},
        {"term":"A process use by plants that use energy from the sun to convert carbon dioxide into sugar and oxygen. ", "correctAnswer":"photosynthesis"},
        {"term":"Process that convert nitrogen gas into ammonia.", "correctAnswer":"nitrogen fixation"},
        {"term":"water travel from the atmosphere to the ground", "correctAnswer":"precipitation"},
        {"term":"process that converts nitrogen in the soil back into the atmosphere as nitrogen gas", "correctAnswer":"denitrification"},
        {"term":"diagram that compares energy used by producers, primary consumers and other trophic levels", "correctAnswer":"energy pyramid"},
        {"term":"process used by all living organism that used enery from carbohydrates and release carbon dioxide into the air", "correctAnswer":"cellular respiration"},
        {"term":"process by which an organism gets carbohydrates by using chemicals rather then light as a energy source", "correctAnswer":"chemosynthesis"},
        {"term":"factors are non-living", "correctAnswer":"abiotic"},
        {"term":"factors are living things", "correctAnswer":"biotic"},
        {"term":"the levels of nourishment in a food chain", "correctAnswer":"Trophic levels"},
        {"term":"a relationship that exits between plants and the animal that eat them", "correctAnswer":"plant/herbivore"},
        {"term":"petritivores that break down organic matter into simpler compounds", "correctAnswer":"decomposers"},
        {"term":"organisms that eat both plant and animals", "correctAnswer":"omnivores"},
        {"term":"consumer that have a varying diet", "correctAnswer":"generalists"},
        {"term":"organisms that get their energy by eating other living or once-living resources like plants/animals", "correctAnswer":"consumers"},
        {"term":"The assortment or variety of living things in an ecosystem", "correctAnswer":"biodiversity"},
        {"term":"a major or global community of organisms", "correctAnswer":"biome"},
        {"term":"A measure of the total dry mass of organism in a given area", "correctAnswer":"biomass"},
        {"term":"consumers are also; Organism that get energy by consuming other organisms", "correctAnswer":"heterotrophs"},
        {"term":"the breakdown of dead organism that release carbon back into the atmosphere", "correctAnswer":"decomposition"},
        {"term":"Organism that eat only plants", "correctAnswer":"herbivores"},
        {"term":"All of the organisms, climate, soil, water, rocks, and non-living things in a given area", "correctAnswer":"ecosystem"},
        {"term":"the study of living organisms as they interact with their environment ", "correctAnswer":"ecology"},
        {"term":"example of mutualism", "correctAnswer":"insect and flower"},
        {"term":"known as the water cycle; Pathway of water from the atmosphere to the surface, below ground, and back", "correctAnswer":"hydroligic cycle"},
        {"term":"a group of different species taht live together in one area", "correctAnswer":"community"},
        {"term":"a consumer that primary eat one specific organism or feed on a verysmall number of organism", "correctAnswer":"specialist"}
    ];

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
        
        getLengthOfArray: function(){
            return test.length
        },
        
        randomizeTest: function(){
            
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