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
        {"term":"Native whites who supported the Republican party", "correctAnswer":"Scalawags"},        
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
    
    var science9wks = [

        {"term":"What is a scientific hypothesis and how should a good one be written", "correctAnswer":"Must be stated in a way that is testable. A statement is considered “testable” if evidence can be collected that either does or does not support it"},
		{"term":"If the hypothesis is unsupported, is this a bad thing? Explain", "correctAnswer":"No, because it’s based on your opinion"},
		{"term":"Which variable in an experiment does the scientist manipulate?", "correctAnswer":"Independent variable"},
		{"term":"Which variable in an experiment is measured?", "correctAnswer":"Dependent variable"},
		{"term":"Which is the independent or dependent variables in the following observation? What effect does temperature have on Fungus growth in plants?", "correctAnswer":"ID= temp, DV= fungus growth"},
		{"term":"Put these steps of the scientific method in the correct order: Experiment, Retest, Observation, Conclusion, Hypothesis, Data", "correctAnswer":"Observe, Hypothesis, Experiment, Data, Conclusion, Retest"},
		{"term":"Write the scientific notation for the following numbers: 0.00053, 8720000?", "correctAnswer":"5.3 x 10(-4), 8.72 x 10(6)"},
		{"term":"What is precision?", "correctAnswer":"The quality, condition, or facts of begin exact and accurate"},
		{"term":"What is accuracy?", "correctAnswer":"A description of how close a measurement is to the true value of the quantity measured"},
		{"term":"Skip", "correctAnswer":"Skip"},
		{"term":"Convert 2,550 grams to kilograms", "correctAnswer":"2.550kg"},
		{"term":"Which SI prefix means 1/100 or .01?", "correctAnswer":"Centi"},
		{"term":"What unit of measurement is mass measured in?", "correctAnswer":"Grams"},
		{"term":"The best type of graph is best for showing data over time?", "correctAnswer":"Bar graph"},
		{"term":"The line created by the liquid in a graduated cylinder is known as the?", "correctAnswer":"Meniscus"},
		{"term":"Skip", "correctAnswer":"Skip"},
		{"term":"Define Matter", "correctAnswer":"Anything that has mass and volume"},
		{"term":"What is the building blocks of matter?", "correctAnswer":"Atoms"},
		{"term":"How can matter be classified?", "correctAnswer":"By physical and chemical properties"},
		{"term":"Why are carbon and copper classified as elements?", "correctAnswer":"Made from a single type of atom"},
		{"term":"How are elements related to compounds?", "correctAnswer":"Compounds: 2 or more elements together"},
		{"term":"What is the difference between a pure substance and a mixture?", "correctAnswer":"Pure substances: elements or compound, Mixture: heterogeneous or homogenous"},
		{"term":"Which of these results in a mixture? Baking cake, burning wood, making Jell-O, or digesting food?", "correctAnswer":"Making Jell-O"},
		{"term":"Why are color, volume, and density classified as physical properties?", "correctAnswer":"Because they are properties that can be observed without changing"},
		{"term":"Why are flammability and reactivity classified as chemical properties?", "correctAnswer":"Irreversible- new substance a format"},
		{"term":"Why is getting a hair-cut an example of a physical change?", "correctAnswer":"Because it’s still hair, just change the physical look of it"},
		{"term":"A release of energy is a sign of what type of change? Chemical or physical", "correctAnswer":"Chemical"},
		{"term":"List the signs of a chemical reaction that were given in your notes or from the book?", "correctAnswer":"Burn, rust, decompose, explode"},
		{"term":"Which of these is an example of chemical change? Salt dissolving, dying hair, wine fermenting, or making Kool-Aid?", "correctAnswer":"Wine fermenting"},
		{"term":"Is fizzing a sign of a physical or chemical change?", "correctAnswer":"Chemical"},
		{"term":"What is the difference between a homogeneous and heterogeneous mixture?", "correctAnswer":"Homo: same all the way, Heter: mixed substance all throughout"},
		{"term":"What is the difference between a solid, a liquid, and a gas?", "correctAnswer":"States of matter"},
		{"term":"Which state of mater cannot hold its shape without a container?", "correctAnswer":"Liquid"},
		{"term":"Why do we use models to represent atom?", "correctAnswer":"Because atoms are so small"},
		{"term":"What does the Law of Conservation of Matter state?", "correctAnswer":"Matter can neither be created or destroyed"},
		{"term":"What are the two regions of the atom? What charge odes each hold?", "correctAnswer":"Nucleus (+) electron cloud (-)"},
		{"term":"Overall, what is the charge of an atom?", "correctAnswer":"Neutral"},
		{"term":"Which region of the atom accounts for the mass? Which accounts for Volume?", "correctAnswer":"Mass-nucleus, V-electron cloud"},
		{"term":"How does the size of electrons compare to the size of the protons and neutrons?", "correctAnswer":"Smaller"},
		{"term":"Which subatomic particle identifies the element?", "correctAnswer":"Protons"},
		{"term":"Which subatomic particle determines the charge of the element?", "correctAnswer":"Electrons"},
		{"term":"Which subatomic particles are inside the nucleus?", "correctAnswer":"Protons and neutrons"},
		{"term":"What cause the differences in the masses of each of the following?Ne-20, Ne-21, Ne-22", "correctAnswer":"Electrons"},
		{"term":"Using the following example, determine the number of protons plus neutrons?  71Ga31 or Top: 71, bottom: 31, Element: Ga   ", "correctAnswer":"31"},
		{"term":"How many atoms would be in this compound? 3AI253  ", "correctAnswer":"9"},
		{"term":"Define the “aufbau” principle", "correctAnswer":"Arrangement of electrons in an atom"},
		{"term":"Define the Pauli Exclusion Principle", "correctAnswer":"In an atom or molecule, no"},
		{"term":"Define the Hund’s Rule", "correctAnswer":"Each orbital must have one  electron before another may have a second electron"},
		{"term":"Electrons have a  _____ Charge", "correctAnswer":"Negative"},
		{"term":"A proton have a  _____ Charge", "correctAnswer":"Positive"},
		{"term":"Neutrons have a _______ charge", "correctAnswer":"No charge"},
		{"term":"Why do isotopes of the same element have different atomic masses?", "correctAnswer":"Different number of electrons"},
		{"term":"How do you find the number of neutrons in an atom?", "correctAnswer":"Mass # atomic #"},
		{"term":"Who discovered the nucleus of the atom?", "correctAnswer":"Rutherford"},
		{"term":"Who discovered the electrons of the atom and came up with the Plum Pudding Model?", "correctAnswer":"JJ Thomson"},
		{"term":"What are the four types of orbitals?", "correctAnswer":"S, P, D, F"},
		{"term":"How many electrons can one orbital hold", "correctAnswer":"S2"},
		{"term":"How many electrons, total, can the s orbital hold? P orbitals? D orbitals? F orbitals", "correctAnswer":"S – 2, P =6, D=10, F= 14"},
		{"term":"What is the shape of the s orbital? P orbitals? D orbitals?", "correctAnswer":"S= Sphere, p = dumbbell, d = flower"},
		{"term":"How are the energy levels of an atom filled?", "correctAnswer":"Lowest first opposite filling before going to next orbital"},
		{"term":"What does ground state mean?", "correctAnswer":"Lowest energy level"},
		{"term":"How does the energy of an electron change as the electron moves farther away from the nucleus?", "correctAnswer":"High energy"},
		{"term":"What does a photon give off?", "correctAnswer":"Light"},
		{"term":"How did Mendeleev arrange the elements in his periodic table?", "correctAnswer":"Increasing atomic number and their chemical and physical properties"},
		{"term":"How are elements arranged in the modern PT?", "correctAnswer":"Energy levels and  amities"},
		{"term":"Why do elements within a group of the PT have similar chemical properties?", "correctAnswer":"Because they are a part of the same family"},
		{"term":"What do the periods of the Periodic Table also represent?", "correctAnswer":"Energy levels"},
		{"term":"What happens to an atom that gains or loses electrons?", "correctAnswer":"Gain: negative ion, Loses: positive ions"},
		{"term":"How are positively charged ions formed?", "correctAnswer":"Loses and electrons"},
		{"term":"What are the 3 main classes of elements", "correctAnswer":"Metals, non-metals, metalloids"},
		{"term":"Which class of elements are mostly gases at room temperature or brittle if solid?", "correctAnswer":"Non-metals"},
		{"term":"Which class of elements are poor conductors?", "correctAnswer":"Non-metals"},
		{"term":"Which class of elements are good conductors?", "correctAnswer":"Metals"},
		{"term":"What is another name for a group?", "correctAnswer":"Family"},
		{"term":"Which metals are in group 1?", "correctAnswer":"alkali metals (check if correct)"},
		{"term":"Which metals are in group 2?", "correctAnswer":"alkaline Earth metals"},
		{"term":"What nonmetals are in group 17?", "correctAnswer":"Iodine, Bromine, calcine, fluorine"},
		{"term":"What nonmetals are in group 2?", "correctAnswer":"All in group 2"},
		{"term":"What is a valence electron", "correctAnswer":"Electron in the STP orbital and the outer most energy shell"},
		{"term":"How many valance electrons do most atoms need to become stable?", "correctAnswer":"0"},
		{"term":"How many electrons does oxygen gain to become stable?", "correctAnswer":"2"},
		{"term":"What is the group name for teh elements who are already stable and do not react with other elements>", "correctAnswer":"Noba gases"},
		{"term":"What are the 8 metalloid/semi-conductors?", "correctAnswer":"Beron, silicon, arsenic, pelluniam, asative, antimay, germanium, aluminum"}
    ];    
    
return {      
    
            //return requested test
            getData: function(test){
                //if(test = MSChp6)
                  //  return MSChp6;
                switch(test){
                    case "MSChp6":
                        return MSChp6;
                    case "MSChp5":
                        return MSChp5;
                    case "MSChp2":
                        return MSChp2;
                    case "MSChp1":
                        return MSChp1;
                    case "scienceChp4":
                        return scienceChp4;
                    case "scienceChp2":
                        return scienceChp2;
                    case "scienceChp1":
                        return scienceChp1; 
                    case "science9wks":
                        return science9wks;
                }
                
            }
    
        }//end of the return
});