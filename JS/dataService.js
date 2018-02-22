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
    
        //test array containing vocabulary words as terms and definitions as correctAnswer
    var scienceChp4 = [
        {"term":"a sub-atomic particle that has a negative charge", "correctAnswer":"Electron"}, 
        {"term":"a sub-atomic particle that has a positive charge and that is located in the nucleus of an atom", "correctAnswer":"Proton"}, 
        {"term":"a sub-atomic particle that has no charge and that is located in teh nucleus of an atom", "correctAnswer":"Neutron"}, 
        {"term":"the number of protons in the nucleus of an atom", "correctAnswer":"Atomic Number"},
        {"term":"the sum of the number of protons and neutrons in the nucleus of an atom", "correctAnswer":"Mass Number"},
        {"term":"an atom that has the same number of protons (or the same atomic number) as other atoms of the same element but has a different number of neutrons (and a different atomic mass)", "correctAnswer":"Isotope"},
        {"term":"a unit of mass that describes the mass of an atom or molecule; it is exactly 1/12 the mass of a carbon atom with mass number 12(symbol)", "correctAnswer":"Unified atomic mass unit"},
        {"term":"the SI base unit used to measure the amount of a substance whose number of particles is the same as the number atoms in exactly 12g of carbon-12 ", "correctAnswer":"Mole"},
        {"term":"a region in an atom where there is a high probability of finding electrons", "correctAnswer":"Orbital"},
        {"term":"an electron that is found in the outermost shell of an atom and that determines the atom chemical properties", "correctAnswer":"Valence Electron"},
        {"term":"a unit of quantum of light", "correctAnswer":"Photon"}
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
        {"term":"Built burial mounds over tombs and sometimes shaped those mounds like birds or animals", "correctAnswer":"Mound builders"},
        {"term":"Corn", "correctAnswer":"Maize"},        
        {"term":"Groups of related families", "correctAnswer":"Clans"},
        {"term":"Marrying outside the clan", "correctAnswer":"Exogamy"},
        {"term":"A man have more than one wife", "correctAnswer":"Polygany"},
        {"term":"A formal agreement between two or more nations.", "correctAnswer":"Treaty"},
        {"term":"The United States had established the frameworks for the government of territories", "correctAnswer":"Northwest Ordinance"},
        {"term":"An allegiance to local interests.", "correctAnswer":"Sectionalism"},
        {"term":"sets up the frameworks of a government and determines its powers and limitations", "correctAnswer":"Constitution"},
        {"term":"discovered the Mississippi River but died while searching for treasure", "correctAnswer":"Hernando de Soto"},
        {"term":"First European to travel the length of the Mississpi Rivers. Came down the Mississippi River and claim the region for France along with Father Zenobias Membre", "correctAnswer":"Rene Robert Cavelier, Sieur de La Salle, and Henri de Tonto\i"},
        {"term":"Died during an unsuccessful attempt to established a settlement at the mouth of the Mississippi", "correctAnswer":"La Salle"},
        {"term":"Made several trips up and down the Mississippi river looking for La Salle.", "correctAnswer":"Tonti"},
        {"term":"French man from Canada sent to the Gulf of Mexico to establish a colony", "correctAnswer":"Pierre le Moyne"},
        {"term":"French man from Canada and establish first European settlement in Mississippi", "correctAnswer":"Sieur d'Iberule"},
        {"term":"Is the young brother of Sieur d'Iberule", "correctAnswer":"Jean-Baptiste La Moyne"},
        {"term":"He established New Orleans. Sailed up the Mississippi River and seized several chiefs as hostages until the murderes where executed", "correctAnswer":"Sieur d'Bienville"},
        {"term":"Served as territorial governer before being elected as Mississippi first governor.", "correctAnswer":"David Homes"},
        {"term":"First territorial governor of Mississippi", "correctAnswer":"Winthrop Sargent"}        
    ];
    
        var MSChp5 = [ 
        {"term":"states that did not permit slavery", "correctAnswer":"Free States"},
        {"term":"States that did permit slavery", "correctAnswer":"Slave States"}, 
        {"term":"Freedom", "correctAnswer":"Emancipation"},
        {"term":"What states made up the Confederate", "correctAnswer":"TX, LA, MS, AL, GA, FL, SC"},
        {"term":"First state to secede from the Union", "correctAnswer":"South Carolina"},        
        {"term":"When did the Civil War start between teh North and South?", "correctAnswer":"April 12, 1861"},
        {"term":"Where was the first shot of the Civil War fired?", "correctAnswer":"Fort Sumter"},
        {"term":"Who was the govenor when MS Seceded?", "correctAnswer":"Pettus"},
        {"term":"What US Constitution amendment abolished slavery", "correctAnswer":"13th Amendment"},
        {"term":"Commander of teh Arkansas", "correctAnswer":"Isaac Brown"},
        {"term":"Why was Vicksburg important during the war", "correctAnswer":"It lay at a critical position on the river"},             
        {"term":"Why was the North Confident of their victory in the war?", "correctAnswer":"Railroads, manpower, supplies, factories"},
        {"term":"Why was the South Confident of their victory in the war?", "correctAnswer":"Military experience, Good leaders, Foreign Help"},
        {"term":"Who commanded the Union Troops", "correctAnswer":"General Albert Sidney Johnson"},        
        {"term":"When and where did the war end", "correctAnswer":"1865 at Appomattox Courthouse"},            
        {"term":"Freedom", "correctAnswer":"Emancipation"},            
        {"term":"organize the freeing of slaves and removing them to Africa", "correctAnswer":"Mississippi Colonization Society"},
        {"term":"rights of the states should prevail over the rights of the federal government", "correctAnswer":"States Rights"},
        {"term":"a tax on imported goods ", "correctAnswer":"tariff"},
        {"term":"prevent the enforcement of a federal law", "correctAnswer":"nullify"},
        {"term":"Made California  free state and some western territories could determine slavery by popular sovereignty", "correctAnswer":"Compromise of 1850"},
        {"term":"A vote by those living there", "correctAnswer":"Popular Sovereignty"},
        {"term":"Form to oppose the expansion of slavery", "correctAnswer":"Republican party"},
        {"term":"withdrawal from the Union", "correctAnswer":"secession"},
        {"term":"Leader of the Republican party that opposed slavery, elected President in 1860", "correctAnswer":"Abraham Lincoln"},
        {"term":"states that secede from the Union", "correctAnswer":"Confederate States of America"},
        {"term":"President of the Confederacy", "correctAnswer":"Jefferson Davis"},
        {"term":"Union general that invaded Mississippi and captured Vicksburg", "correctAnswer":"Union General William Tecumseh Sherman"}, 
        {"term":"all slaves own by persons in the Confederate states were free", "correctAnswer":"Emancipation Proclamation"},
        {"term":"Stated that All men are created Equal", "correctAnswer":"Declaration of Independence"},
        {"term":"Slave and slavery", "correctAnswer":"What two words are not found in the constitution"}, 
        {"term":"who purchase land west of the Mississippi River from France", "correctAnswer":"Thomas Jefferson"},
        {"term":"Politician's name for slavery", "correctAnswer":"Peculiar institation"},
        {"term":"Led a raid on the federal arsonal at Harper's Ferry, VA to start a slave rebellion", "correctAnswer":"John Brown"},        
        {"term":"Maine was comitted as a free state adn Missouri as a slave state", "correctAnswer":"Missouri Compromise"}            
    ];  
    
        var MSChp6 = [ 
        {"term":"After the Civil War, MS faced", "correctAnswer":"Great Challenges"},
        {"term":"Freedmen", "correctAnswer":"former slaves"}, 
        {"term":"A new ??? between blacks and whites had to be developed", "correctAnswer":"relationship"},
        {"term":"Northerners came to the south to establish ??? for the freed slaves", "correctAnswer":"Schools"},
        {"term":"The Freedman's Bureau helped slaves with what 4 things?", "correctAnswer":"Food, Shelter, education, health care"},        
        {"term":"Percentage of black farmers who owned thier land in 1870?", "correctAnswer":"12%"},
        {"term":"Lincoln's plan to rebuild the South", "correctAnswer":"Reconstruction"},
        {"term":"Suffrage", "correctAnswer":"Voting Rights"},
        {"term":"Before the civil war, blacks were NOT allowed to?", "correctAnswer":"vote"},
        {"term":"Delegates of the Constitutional Conventionof 1865 did not want what in MS government", "correctAnswer":"Black participation"},
        {"term":"Legislators passed 4 acts known as ", "correctAnswer":"Black codes"},             
        {"term":"The Black codes was design to give the state of MS ???? over blacks", "correctAnswer":"control"},
        {"term":"Made blacks full citizens of the United States and in the states they live in", "correctAnswer":"14th Admendment"},
        {"term":"Native whites who supported teh Republican party", "correctAnswer":"Scalawags"},        
        {"term":"Northern white supporters", "correctAnswer":"carpet baggers"},            
        {"term":"Extended voting rights to any male citizen regardless of race or color", "correctAnswer":"Universal male suffrage"},            
        {"term":"To take the right to vote away from an individual or group", "correctAnswer":"disfranchise"},
        {"term":"White militant group formed to keep blacks from the polls", "correctAnswer":"Klu Klux klan"},
        {"term":"Guaranted universal male suffrage", "correctAnswer":"15th Amendment"},
        {"term":"Percentage of white children attended school in MS in 1850", "correctAnswer":"13%"},
        {"term":"First black senator to preside over a Senate session", "correctAnswer":"Blanche K. Bruce"},
        {"term":"first institution for women in the United States", "correctAnswer":"Mississippi University for Women"},
        {"term":"The downfall of the Republicans surrounding the election of 1875 began with", "correctAnswer":"Three years of violence"},
        {"term":"White Democrats consider themeselves", "correctAnswer":"Redeemers"},
        {"term":"White MS who wanted to control the state government", "correctAnswer":"Redeemers"},
        {"term":"Continous speech making to delay an action by a legislative body", "correctAnswer":"Filibuster"},
        {"term":"Dutch word for filibuster", "correctAnswer":"Pirate"},
        {"term":"Redrawing the lines in voting districts", "correctAnswer":"Reapportionment"}, 
        {"term":"The understanding clause's loophole allowed", "correctAnswer":"illiterate whites to register and vote"}         
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
    
            //returns the science chp 4 test terms and answers
            getScienceChp4: function() {
                return scienceChp4;
            }, //end of getScienceChp4     
            
            // returns the mississippi studies chp 1 test terms and answers
            getMSChp1: function() {
                return MSChp1;
            },
    
            // returns the mississippi studies chp 2 test terms and answers
            getMSChp2: function() {
                return MSChp2;
            },
    
            // returns the mississippi studies chp 5 test terms and answers
            getMSChp5: function() {
                return MSChp5;
            },
    
            // returns the mississippi studies chp 6 test terms and answers
            getMSChp6: function() {
                return MSChp6;
            }    
    
        }//end of the return
});