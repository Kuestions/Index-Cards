/*A service that provides an array of vocabulary terms and definitions to the controller */
myApp.factory('Data',  function () {
    
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var scienceChp1 = [
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
        {"term":"A method of expressing a quantity as a number mulitplied by 10 to the approparate power", "correctAnswer":"Scientific notation"},
        {"term":"The exactness of a measurement", "correctAnswer":"Precision"},
        {"term":"A prescribed decimal place that determines the amount of rounding of the measurement", "correctAnswer":"Signifant Figure"},
        {"term":"A description of how close a measurement is to the true value of the quantity measured", "correctAnswer":"Accuracy"}
    ];    
    
    var MSChp1 = [ 
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
    
return {      
            //returns the science chp 1 test terms and answers
            getScienceChp1: function() {
                return scienceChp1;
            }, //end of getScienceChp1
            
            // returns the mississippi studies chp 1 test terms and answers
            getMSChp1: function() {
                return MSChp1;
            }
    
        }//end of the return
});