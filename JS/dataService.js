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
    
        //test array containing vocabulary words as terms and definitions as correctAnswer
    var scienceChp2 = [
        {"term":"anything that has mass and takes up space", "correctAnswer":"Matter"}, 
        {"term":"a substance that cannot be separated or broken down into simpler substances by chemical means", "correctAnswer":"Element"}, 
        {"term":"the smallest unit of an element that maintains the chemical properties of that element", "correctAnswer":"Atoms"}, 
        {"term":"a group of atoms that are held together by chemical forces; smallest unit of matter that can exist by itself and retain all of a substance chemical properties", "correctAnswer":"Molecule"},
        {"term":"a substance made up of atoms of two or more different elements joined by chemical bonds", "correctAnswer":"Compound"},
        {"term":"a sample of matter, either a single element or a single compound that has definite chemical and physical properties", "correctAnswer":"Pure Substance"},
        {"term":"a combination of two or more substance that are not chemically combined", "correctAnswer":"Mixture"},
        {"term":"the temperature and pressure at which a solid becomes a liquid", "correctAnswer":"Melting Point"},
        {"term":"the temperature and pressure at which a liquid becomes a gas", "correctAnswer":"Boiling Point"},
        {"term":"the ratio the mass of a substance to the volume of the substance", "correctAnswer":"Density"},
        {"term":"the capacity of a substance to combine chemically with another substance", "correctAnswer":"Reactivity"},
        {"term":"a change of matter from one form to another without a change in chemical properties", "correctAnswer":"Physical change"},
        {"term":"a change that occurs when one substance change into an entirely new substance", "correctAnswer":"Chemical change"}
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
    
        var MSChp2 = [ 
        {"term":"lived along rivers and streams. Learn how to farm", "correctAnswer":"Mound builders"},
        {"term":"The Mississippi also used the bow and arrow to make hunting easier", "correctAnswer":"Maize"},        
        {"term":"Punished criminals and protected individuals from violence", "correctAnswer":"Clans"},
        {"term":"Marrying outside the clan", "correctAnswer":"Exogamy"},
        {"term":"A man have more than one wife", "correctAnswer":"Polygany"},
        {"term":"A formal agreement between two or more nations. France gave all of its territory east of the Mississippi River, except New Orleans, to Great Britain", "correctAnswer":"Treaty"},
        {"term":"The United States had established the frameworks for the government of territories", "correctAnswer":"Northwest Ordinance"},
        {"term":"An allegiance to local interests. Became an important topic", "correctAnswer":"Sectionalism"},
        {"term":"sets up the frameworks of a government and determines its powers and limitations", "correctAnswer":"Constitution"},
        {"term":"discovered the Mississippi River but died while searching for treasure", "correctAnswer":"Hernando de Soto"},
        {"term":"Came down the Mississippi River and claim the region for France along with Father Zenobias Membre", "correctAnswer":"Rene Robert Cavelier, Sieur de La Salle, and Henri de Tonto\i"},
        {"term":"Died during an unsuccessful attempt to established a settlement at the mouth of the Mississippi", "correctAnswer":"La Salle"},
        {"term":"Made several trips up and down the Mississippi river looking for La Salle.", "correctAnswer":"Tonti"},
        {"term":"of Canada to the Gulf of Mexico to establish a colony", "correctAnswer":"Pierre le Moyne"},
        {"term":"of Canada to the Gulf of Mexico to establish a colony", "correctAnswer":"Sieur d'Iberule"},
        {"term":"Is the young brother of Sieur d'Iberule", "correctAnswer":"Jean-Baptiste La Moyne"},
        {"term":"Sailed up the Mississippi River and seized several chiefs as hostages until the murderes where executed", "correctAnswer":"Sieur d'Bienville"},
        {"term":"Served as territorial governer before being elected as Mississippi first governor.", "correctAnswer":"David Homes"},
        {"term":"First territorial governor of Mississippi", "correctAnswer":"Winthrop Sargent"}        
    ];
    
return {      
            //returns the science chp 1 test terms and answers
            getScienceChp1: function() {
                return scienceChp1;
            }, //end of getScienceChp1
    
            //returns the science chp 2 test terms and answers
            getScienceChp2: function() {
                return scienceChp2;
            }, //end of getScienceChp2    
            
            // returns the mississippi studies chp 1 test terms and answers
            getMSChp1: function() {
                return MSChp1;
            },
    
            // returns the mississippi studies chp 2 test terms and answers
            getMSChp2: function() {
                return MSChp2;
            }
    
        }//end of the return
});