/*A service that provides an array of vocabulary terms and definitions to the controller */
myApp.factory('Data',  function () {
    
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var scienceChp5 = [
        {"term":"the arrangement of atoms in a substance", "correctAnswer":"Chemical Structure"}, 
        {"term":"the average distance between the nucleis of two bonded atoms", "correctAnswer":"Bond Length"}, 
        {"term":"the angle formed by two bonds of the same atom", "correctAnswer":"Bond angle"}, 
        {"term":"the attractive force between oppositely charged ???, which formed when electrons are transferred from one atom to another", "correctAnswer":"Ionic Bond"},
        {"term":"formed when a atom share one or more pairs of electrons", "correctAnswer":"Covalent Bond"},
        {"term":"a bond formed by the attraction betwen positively charged metal ions and the electrons aound them ", "correctAnswer":"Matallic Bond"},
        {"term":"an ion made of two or more atoms", "correctAnswer":"Polyatomic Ion"},
        {"term":"the composition of a compound in terms of the relative numbers and kinds of atoms in the simplest ratio", "correctAnswer":"Empirical Formaula"},
        {"term":"a chemical formula that shows the number and kinds of atoms in a molecule but not the arrangemen of atom", "correctAnswer":"Molecular formala"},
        {"term":"a covaienty bonded compound that contains carbon , excluding carbon ates and oxids", "correctAnswer":"Organic Compound"},
        {"term":"A large molecule that is formed by more then 5 ????", "correctAnswer":"Polymer"},
        {"term":"The attractive force that holds atoms or ions togehter", "correctAnswer":"Chemical Bond"}, 
        {"term":"a class of molecules that includes sugars, starches, and fiber; contains carbon, hydrogen, and oxygen", "correctAnswer":"Carbohydrate"}, 
        {"term":"an organic compound that is made of one or more chains of amino acids and that is a principal componet of all cells", "correctAnswer":"Protein"},
        {"term":"a compound of a class of simple organic compounds that contains a carboxyl group and an amino group and combine to form proteins.", "correctAnswer":"Amino acid"}    
    ]; 
    
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var worldGeoChp1 = [
        {"term":"the study of where people, places, and things are located and how they are related to each other", "correctAnswer":"Geography"}, 
        {"term":"(sound, navigation, and ronging) a tool that analize sounds to determine distance", "correctAnswer":"sonar"}, 
        {"term":"a radio navigation system that allow land, sea, and airborne uses", "correctAnswer":"GPS"}, 
        {"term":"a geographic intermation system, which uses compouter technology to connect", "correctAnswer":"GIS"},
        {"term":"location, place, region, movement, human-enviroment interaction", "correctAnswer":"5 themes of Geography"},
        {"term":"Absolute location (the location's place on the globe equater), relative location (its location compared to each place) ", "correctAnswer":"Absolute Location vs Relative location"},
        {"term":"Imaginary line halfway betweeen the North and South poles", "correctAnswer":"Equater"},
        {"term":"Lines that run parallel to the Equater that measure distance north to south and run east to west", "correctAnswer":"Latitude"},
        {"term":"Lines that measure distance east to west and run north to south", "correctAnswer":"Longitude"},
        {"term":"at 0 degrees longitude. Shifts world into North and South", "correctAnswer":"Prime Meridian"},
        {"term":"include land forms (mountan or flat). Human charatereristics. include languages, customes, adn beliefs", "correctAnswer":"Physical and Human chara. of a Place"},
        {"term":"Inner Core, Outer Core, Mantel, Crust", "correctAnswer":"4 layers of Earth"}, 
        {"term":"Mountains, Hills, Plataus, plains", "correctAnswer":"4 different types of land forms"}, 
        {"term":"circle of volcanes surrounding the pacific ocean", "correctAnswer":"Ring of Fire"},
        {"term":"When plates pull away from each other", "correctAnswer":"Divergent"},
        {"term":"when two connected plates collide", "correctAnswer":"Covergent"},
        {"term":"plates grind past each other on faults", "correctAnswer":"Transform"},
        {"term":"when rocks is harden down ", "correctAnswer":"Mechanical Weathering"},
        {"term":"when the actual chemical makeup of the rocks has changed", "correctAnswer":"chemical weathering"},
        {"term":"the movement of weathered sediment such as gravel, soil, and sand. The cause of erosion are water, wind, and glaciers", "correctAnswer":"erosions"}        
    ];
    
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var worldGeoChp2 = [
        {"term":"Turning of the earth on its own axis", "correctAnswer":"Rotation"}, 
        {"term":"It takes 365 1/2 days for the earth to orbit around the sun", "correctAnswer":"Revolutioin"}, 
        {"term":"An extra day making once every 4 years have 365 days", "correctAnswer":"Leap year"}, 
        {"term":"two times a year the sun is directly over the Tropic of Cancer (summer) and capricorn (winter). ", "correctAnswer":"Solstice"},
        {"term":"two times a year (spring and fall ) when day and night are equal length through out the world.", "correctAnswer":"Equinox"},
        {"term":"is the rise in earth's temperture caused by increasing amounts", "correctAnswer":"Global warming"},
        {"term":"use renewable energy(solor wing)", "correctAnswer":"Prevent Global warming"}        
    ];   
    
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var worldGeoChp3 = [
        {"term":"the study of population", "correctAnswer":"Demography"}, 
        {"term":"an be caculated by the total population divided by the regions land area", "correctAnswer":"Population density"}, 
        {"term":"object that makes such food, architecture, art, etc. ", "correctAnswer":"Material Culture"}, 
        {"term":"ideas such as religion, language, spiritual beliefs, government systems, etc.", "correctAnswer":"Non-material culture"},
        {"term":"worship of one God", "correctAnswer":"Monotheism"},
        {"term":"worship of multiple gods", "correctAnswer":"Polytheism"},
        {"term":"Is the tendency for cultures to become more alike as they share technology and organizational structure", "correctAnswer":"Cultureal Covergence"},
        {"term":"When a cultural element is transmitted from one group to another", "correctAnswer":"Diffusion"}, 
        {"term":"4 charateristics that define a country", "correctAnswer":"clearly defined territory, population, sovereignty, government"}, 
        {"term":"a nation's freedom from outside control ", "correctAnswer":"Sovereignty"}, 
        {"term":"one central goverenment that runs a nation", "correctAnswer":"unitary system"},
        {"term":"Some power are given to the nation government and some are restricted to the local government", "correctAnswer":"Federation"}
    ];     
    
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var worldGeoChp4 = [
        {"term":"materials in the natural enviroment that people value and use to satisfy their needs", "correctAnswer":"Natural Resouces"}, 
        {"term":"Can be replaced once thery have been used", "correctAnswer":"Renewable Resource"}, 
        {"term":"mineral resources formed from the remains of ancient plants and animals", "correctAnswer":"Fossil Fuels"}, 
        {"term":"Water power, solar energy, gothermal energy, wind power", "correctAnswer":"types of energy"}       
    ];       
return {      
    
            //return requested test
            getData: function(test){
                switch(test){
                    case "scienceChp5":
                        return scienceChp5;
                    case "worldGeoChp1":
                        return worldGeoChp1;
                    case "worldGeoChp2":
                        return worldGeoChp2;
                    case "worldGeoChp3":
                        return worldGeoChp3;  
                    case "worldGeoChp4":
                        return worldGeoChp4;                         
                }
                
            }
    
        }//end of the return
});