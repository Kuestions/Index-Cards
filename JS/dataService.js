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
    
    var scienceChp7 = [

        {"term":"a substance or molecule that participates in a chemical reaction", "correctAnswer":"Reactant"}, 

        {"term":"a substance that forms in a chemical reaction", "correctAnswer":"Product"}, 

        {"term":"the energy released when a chemical compound reacts to produce new compounds", "correctAnswer":"Chemical energy"}, 

        {"term":"a chemical reaction in which energy is released to the surrounding as heat", "correctAnswer":"Exothermic reaction"},

        {"term":"a chemical reaction that require energy input or energy is absorb from surrounding as heat", "correctAnswer":"Endothermic reaction"},

        {"term":"a representation of a chemical reaction that uses symbols to show the relationship between the reactions and the products ", "correctAnswer":"Chemical equation"},

        {"term":"the relative number of moles of the substances require to produce a given amount of product in a compound reaction. ", "correctAnswer":"Mole ratio"},

        {"term":"reaction in which two or more substances combine to form a complex product  )", "correctAnswer":"Synthesis reaction"},

        {"term":"a reaction in which a single compound breaks down to form two or more simple substances", "correctAnswer":"Decomposition reaction"},

        {"term":"the oxidation reaction of an organic compound in which heat is release", "correctAnswer":"Combustion reaction"},

        {"term":"reaction in which one element or radical takes the place of another element or radical in a compound", "correctAnswer":"Single displacement"},

        {"term":"reaction in which a gas, a solid precipitate, or a molecule compound forms from the exchange of atoms or ions between two compounds. (Should be a chemical reaction where two compounds exchange ions to form two new product compounds", "correctAnswer":"Double displacement"}, 

        {"term":"an atom that has one unpaired electron", "correctAnswer":"Free Radical"}, 

        {"term":"any chemical change in which one species is oxidized and another species is reduced. Also call redox reaction", "correctAnswer":"Oxidation reduction reaction"},

        {"term":"a substance that changes the rate of a chemical reaction without being consumed or changed significantly. ", "correctAnswer":"Catalyst"},
		
       {"term":"a molecule, neither protein or RNA, that acts as a catalyst in biochemical reactions", "correctAnswer":"Enzyme"}, 
	   
       {"term":"the reactant in reactions catalyst by enzymes", "correctAnswer":"Substrate"}, 	   

        {"term":"a state of balance in which the rate of a forward reaction equates the rate of the reverse reaction and the concentration of products and reactants remain unchanged.", "correctAnswer":"Chemical equilibrium"} 		

    ];
    
    var worldGeoUnit3 = [

        {"term":"A storm with winds at least 39 mph", "correctAnswer":"Tropical Storm"}, 

        {"term":"A storm with winds at least 74 mph", "correctAnswer":"Hurricane"}, 

        {"term":"People of both Native American and European descent", "correctAnswer":"Mestizo"}, 

        {"term":"People of African and European descent", "correctAnswer":"Mulatto"},

        {"term":"2 Main Mountain Ranges in Mexicao", "correctAnswer":"Sierra Madre Occidental and Sierra Marie Oriental"},

        {"term":"Baja California", "correctAnswer":"Oriental"},

        {"term":"Mexico City", "correctAnswer":"Capital (most populous city of Mexico)"},

        {"term":"Plaza de las Tres Culturas (The Three Cultures)", "correctAnswer":"A square in Mexico City that recognize the phase of Mexico history"},

        {"term":"Tenochtitlan", "correctAnswer":"Was the center of the empire"},

        {"term":"4 social classes of New Span", "correctAnswer":"Peninsulares, Criollos, Mestizos, Native Americans"},

        {"term":"Hacienda", "correctAnswer":"spanish owned estate of land, run as farms or cattle ranch"},

        {"term":"Subsistence Farming", "correctAnswer":"grow only to meet family needs"}, 

        {"term":"Latifundios", "correctAnswer":"a commercial farm own by private individuals"}, 

        {"term":"2 Most Important Economic Activities", "correctAnswer":"Petroleum extraction and tourism"},

        {"term":"Smokeless Industry", "correctAnswer":"Tourism"},
		
        {"term":"Where Central America is located", "correctAnswer":"Between N. America and S. America"}, 
	   
        {"term":"Isthmus", "correctAnswer":"Narrow strip of land, water on both sides, connecting two large bodies of land"}, 	   

        {"term":"3 Major Landform Regions of Central America", "correctAnswer":"The Mountainous Core, Caribbean coastal lands, Pacific coastal plains"}, 

        {"term":"Combined land of Central America is ______ the size of Mexico.", "correctAnswer":"7/4"}, 
	   
        {"term":"The poorest 20% receive _____ of all income while the wealthiest 20% receives _____.", "correctAnswer":"3%, 61%"}, 	   

        {"term":"Caribbean Islands 3 Island Groups", "correctAnswer":"The Greater Antilles, the Lesser Antilles, Bahamas"}, 
        
        {"term":"Tiempo Muerto (The Dead Season)", "correctAnswer":"Sugar plantations are major employers but busy season is only 4 months out of the year other months"}, 
	   
        {"term":"Brazil is the ______ largest in land in the world.", "correctAnswer":"5th"}, 
        
        {"term":"Sertao", "correctAnswer":"Brazil's interior plateau"}, 
	   
        {"term":"“Coffeepot”", "correctAnswer":"Southeast region/Brazil"}, 	   

        {"term":"Carnival", "correctAnswer":"Rio de Janeiro. Famous festival"}, 
        
        {"term":"Brasilia", "correctAnswer":"Capital Brasilia is in the highlands"}, 
	   
        {"term":"Amazon River Region", "correctAnswer":"Largest and least explored region"}, 	   

        {"term":"Gasohol", "correctAnswer":"a mix of gasoline and ethanol in response to the cost of important oil"}, 
                
        {"term":"3 Regions of South America", "correctAnswer":"Northern Tropics, Andean Countries, Southern Grassland Countries"}, 
	   
        {"term":"Languages of Guyana, Suriname, and French Guiana", "correctAnswer":"Guyana (English), Suriname (Dutch), French Guiana (French)"}, 	   

        {"term":"Colombia", "correctAnswer":"Marijuana and cocaine are exported illegally"},  
                
        {"term":"Ecuador’s name", "correctAnswer":"End of the land"}, 
	   
        {"term":"Chile", "correctAnswer":"NO ANSWER GIVEN"}, 	   

        {"term":"Estuary", "correctAnswer":"??? and river mouth formed where flooded river valley meets the sea"},
        
        {"term":"Itaipu Dam", "correctAnswer":"one of the world's largest hydroelectric projects"}, 
	   
        {"term":"Uruguay", "correctAnswer":"river of the painted bird"}, 	   

        {"term":"Argentiana", "correctAnswer":"Pampase"},
        
        {"term":"Patagonia", "correctAnswer":"Region of Chile and Argentina, south of the pampas. Dry, cold, and sometimes foggy. Suited for raising sheep."}   
      

    ];    
	
var worldGeoChp14 = [
 
        {"term":"The rebirth of art, literature, science, and technology", "correctAnswer":"Renaissance"}, 
 
        {"term":"Gradual replacement of many hands tools by machines", "correctAnswer":"Industrial Revolution"}, 
 
        {"term":"Mountain range that separates Italy from Europe", "correctAnswer":"The Alps"}, 
 
        {"term":"3 % of the world’s landmass", "correctAnswer":"Europe"}
 
    ]; 
 
    var worldGeoChp15 = [
 
        {"term":"UK refers to the political union between the countries.", "correctAnswer":"United Kingdom"}, 
 
        {"term":"the official collective name of England, Scotland, and Walls.", "correctAnswer":"Great Britain "}, 
 
        {"term":"geographical term relating to the UK, Republic of Ireland, and 5000 surrounding island.", "correctAnswer":"British Isles"}, 
 
        {"term":"Highland, Midland, and Lowland", "correctAnswer":"3 Landscapes of England"},
               
        {"term":"In 2016 UK left the European Union, voted to leave by 51% of population", "correctAnswer":"Brexit"}, 
 
        {"term":"House of Common and House of Lords", "correctAnswer":"Two Houses of Government"}, 
 
        {"term":"Where the UK parliament meet. Built in 1016. Oldest part still used as Westminster hall built in 1097", "correctAnswer":"Palace of Westminster"},         
 
        {"term":"1/3", "correctAnswer":"Scotland occupies about _____of land in UK "},
               
        {"term":"10%", "correctAnswer":"Scotland occupies less than ___% of people live there"}, 
 
        {"term":"Northern Ireland and Republic of Ireland", "correctAnswer":"2 parts of Ireland"}, 
 
        {"term":"Hit in 1840s a=and destroyed Potato years after years", "correctAnswer":"Potato Famine"}                             
 
    ]; 
 
    var worldGeoChp16 = [
 
        {"term":"Famous for the international film festival", "correctAnswer":"Cannes"}, 
 
        {"term":"One of the world's largest museums and a historic monument in Paris, France. Holds the original Mona Lisa", "correctAnswer":"The Louvre "}, 
 
        {"term":"Germany, Austria-Hungry, and Italy", "correctAnswer":"3 Countries in the Triple Alliance"}, 
 
        {"term":"Barrier set up in 1961 by communist East Germany to keep citizens from escaping to democratic West Germany", "correctAnswer":"East and West Germany"},
               
        {"term":"Belgium, Netherlands, and Luxembourg", "correctAnswer":"3 Benelux Countries"}, 
 
        {"term":"1/3", "correctAnswer":"Almost ___ of the Netherlands is below sea level"}, 
 
        {"term":"Chocolate and Cheese", "correctAnswer":"2 processed products Switzerland is known for"},           
 
        {"term":"Switzerland and Austria", "correctAnswer":"World leaders in the development of new medicines "}
                               
    ]; 
 
    var worldGeoChp17= [
 
        {"term":"Separating the Mediterranean Sea and Atlantic Ocean", "correctAnswer":"Iberian Peninsula (Spain and Portugal)"}, 
 
        {"term":"1/6", "correctAnswer":"Portugal covers ___ of the land"}, 
 
        {"term":"The central plateau of Spain. River flow across it. In a rain shadow", "correctAnswer":"Mesta"}, 
 
        {"term":"method that leaves land unplanted every few years to gather moisture", "correctAnswer":"Dry farming"},
               
        {"term":"Northern, Central, and Southern Italy", "correctAnswer":"3 Regions of Italy"}, 
 
        {"term":"Closes to Europe and resembles central Europe more", "correctAnswer":"European Italy"}, 
 
        {"term":"Head of the Roman Catholic Church. Smallest Country in the world. Where people live lsess then 1 sq mile.", "correctAnswer":"Vatican City"}, 
 
        {"term":"Youngest City. So overpopulated. Its faster to walk then drive", "correctAnswer":"Athens"}             
 
    ]; 
 
    var worldGeoChp18= [
 
        {"term":"Russia", "correctAnswer":"World’s largest nation. Best defence is the geography and climate"}, 
 
        {"term":"In Russia, mark border between Europe and Asia", "correctAnswer":"Ural Mountains"}, 
 
        {"term":"South of the tundra are thinly scattered coniferous forest ", "correctAnswer":"Taiga"}, 
 
        {"term":"expansive temperate grassland provides fertile soil for agriculture ", "correctAnswer":"Steppe"},
               
        {"term":"containing many ethnic group", "correctAnswer":"Multi-ethnic"}, 
 
        {"term":"Composed of people who shared such thing as culture, language, and religion", "correctAnswer":"Culture (Could be wrong)"}, 
 
        {"term":"government controls the means of production and distribution of goods and services", "correctAnswer":"Communism Economy"}, 
 
        {"term":"Producers and consumers control business with some government regulation", "correctAnswer":"Capitalism Economy"}           
 
    ]; 
 
    var worldGeoChp19= [
 
        {"term":"covered by Northern European Plain and WWII: Once home to 3 million Jews ", "correctAnswer":"Poland and WWII"}, 
 
        {"term":"Process of selling government owned industries and business to private owners who can run them more efficiently ", "correctAnswer":"Privatization"}, 
 
        {"term":"Government owned where they shared profits from their produce", "correctAnswer":"Collective farming"}, 
 
        {"term":"Nickname the “breadbasket” of Europe ", "correctAnswer":"Danube River"},
               
        {"term":"containing many ethnic group", "correctAnswer":"Multi-ethnic"}, 
 
        {"term":"Coca-Cola Company (Could be wrong)", "correctAnswer":"Romania"}, 
 
        {"term":"Known as the “garden” of Eastern Europe", "correctAnswer":"Bulgaria"}
    ]; 
 
    var worldGeoChp20= [
 
        {"term":"Russian power was challenged when French emperor Napoleon led an invasion on Russia ", "correctAnswer":"Russia and Napoleon"}, 
 
        {"term":"1917, te Russia Revolution established a government based on the ideas of Karl Marx ", "correctAnswer":"Russian Revolution and Karl Marx"}, 
 
        {"term":"received wages", "correctAnswer":"State Farmers"}, 
 
        {"term":"Shared any surpluses that remained after products were sold and cost were paid", "correctAnswer":"Collective Farmers"},
               
        {"term":"- allowed citizens and news media to say....... they wished without fear of government persecution", "correctAnswer":"Glasnost"}
 
    ]; 
	
var worldGeoUnit45 = [
 
        {"term":"The rebirth of art, literature, science, and technology", "correctAnswer":"Renaissance"}, 
 
        {"term":"Gradual replacement of many hands tools by machines", "correctAnswer":"Industrial Revolution"}, 
 
        {"term":"Mountain range that separates Italy from Europe", "correctAnswer":"The Alps"}, 
 
        {"term":"3 % of the world’s landmass", "correctAnswer":"Europe"},
	
        {"term":"UK refers to the political union between the countries.", "correctAnswer":"United Kingdom"}, 
 
        {"term":"the official collective name of England, Scotland, and Walls.", "correctAnswer":"Great Britain "}, 
 
        {"term":"geographical term relating to England, Ireland, and 5000 surrounding island.", "correctAnswer":"British Isles"}, 
 
        {"term":"Highland, Midland, and Lowland", "correctAnswer":"3 Landscapes of England"},
               
        {"term":"In 2016 UK left the European Union, voted to leave by 51% of population", "correctAnswer":"Brexit"}, 
 
        {"term":"House of Common and House of Lords", "correctAnswer":"Two Houses of Government"}, 
 
        {"term":"Where the UK parliament meet. Built in 1016. Oldest part still used as Westminster hall built in 1097", "correctAnswer":"Palace of Westminster"},         
 
        {"term":"1/3", "correctAnswer":"Scotland occupies about _____of land in UK "},
               
        {"term":"10%", "correctAnswer":"Scotland occupies less than ___% of people live there"}, 
 
        {"term":"Northern Ireland and Republic of Ireland", "correctAnswer":"2 parts of Ireland"}, 
 
        {"term":"Hit in 1840s and destroyed Potato years after years. most people relied on potatoes as a major source of nutrition", "correctAnswer":"Potato Famine"},   
 
        {"term":"Famous for international film festival", "correctAnswer":"Cannes"}, 
 
        {"term":"One of the world's largest museums and a historic monument in Paris, France. Holds the original Mona Lisa", "correctAnswer":"The Louvre "}, 
 
        {"term":"Germany, Austria-Hungry, and Italy", "correctAnswer":"3 Countries in the Triple Alliance"}, 
 
        {"term":"Barrier set up in 1961 by communist East Germany to keep citizens from escaping to democratic West Germany", "correctAnswer":"East and West Germany"},
               
        {"term":"Belgium, Netherlands, and Luxembourg", "correctAnswer":"3 Benelux Countries"}, 
 
        {"term":"1/3", "correctAnswer":"Almost ___ of the Netherlands is below sea level"}, 
 
        {"term":"Chocolate and Cheese", "correctAnswer":"2 processed products Switzerland is known for"},           
 
        {"term":"Switzerland and Austria", "correctAnswer":"World leaders in the development of new medicines "},
	
        {"term":"Separating the Mediterranean Sea and Atlantic Ocean", "correctAnswer":"Iberian Peninsula (Spain and Portugal)"}, 
 
        {"term":"1/6", "correctAnswer":"Portugal covers ___ of the land"}, 
 
        {"term":"The central plateau of Spain. River flow across it. In a rain shadow", "correctAnswer":"Mesta"}, 
 
        {"term":"method that leaves land unplanted every few years to gather moisture", "correctAnswer":"Dry farming"},
               
        {"term":"Northern, Central, and Southern Italy", "correctAnswer":"3 Regions of Italy"}, 
 
        {"term":"Closes to Europe and resembles central Europe more", "correctAnswer":"European Italy"}, 
 
        {"term":"Head of the Roman Catholic Church. Smallest Country in the world. Where people live lsess then 1 sq mile.", "correctAnswer":"Vatican City"}, 
 
        {"term":"Youngest City. So overpopulated. Its faster to walk then drive", "correctAnswer":"Athens"},  
 
        {"term":"Russia", "correctAnswer":"World’s largest nation"}, 
 
        {"term":"In Russia, mark border between Europe and Asia", "correctAnswer":"Ural Mountains"}, 
 
        {"term":"South of the tundra are thinly scattered coniferous forest ", "correctAnswer":"Taiga"}, 
 
        {"term":"expansive temperate grassland provides fertile soil for agriculture ", "correctAnswer":"Steppe"},
               
        {"term":"containing many ethnic group", "correctAnswer":"Multi-ethnic"}, 
 
        {"term":"Composed of people who shared such thing as culture, language, and religion", "correctAnswer":"Culture (Could be wrong)"}, 
 
        {"term":"government controls the means of production and distribution of goods and services", "correctAnswer":"Communism Economy"}, 
 
        {"term":"Producers and consumers control business with some government regulation", "correctAnswer":"Capitalism Economy"},
	
        {"term":"covered by Northern European Plain and WWII: Once home to 3 million Jews ", "correctAnswer":"Poland and WWII"}, 
 
        {"term":"Process of selling government owned industries and business to private owners who can run them more efficiently ", "correctAnswer":"Privatization"}, 
 
        {"term":"Government owned where they shared profits from their produce", "correctAnswer":"Collective farming"}, 
 
        {"term":"Nickname the “breadbasket” of Europe ", "correctAnswer":"Danube River"},
               
        {"term":"containing many ethnic group", "correctAnswer":"Multi-ethnic"}, 
 
        {"term":"Coca cola industry expanded their business", "correctAnswer":"Romania"}, 
 
        {"term":"Known as the “garden” of Eastern Europe", "correctAnswer":"Bulgaria"},
	
        {"term":"Russian power was challenged when French emperor Napoleon led an invasion on Russia ", "correctAnswer":"Russia and Napoleon"}, 
 
        {"term":"1917, te Russia Revolution established a government based on the ideas of Karl Marx ", "correctAnswer":"Russian Revolution and Karl Marx"}, 
 
        {"term":"received wages", "correctAnswer":"State Farmers"}, 
 
        {"term":"Shared any surpluses that remained after products were sold and cost were paid", "correctAnswer":"Collective Farmers"},
               
        {"term":"- allowed citizens and news media to say....... they wished without fear of government persecution", "correctAnswer":"Glasnost"}
 
    ]; 	
	
return {      
    
            //return requested test worldGeoChp14
            getData: function(test){
                switch(test){
                    case "scienceChp5":
                        return scienceChp5;
                    case "scienceChp7":
                        return scienceChp7; 
                    case "worldGeoUnit3":
                        return worldGeoUnit3; 
                    case "worldGeoChp14":
                        return worldGeoChp14;
                    case "worldGeoChp15":
                        return worldGeoChp15;
                    case "worldGeoChp16":
                        return worldGeoChp16;
                    case "worldGeoChp17":
                        return worldGeoChp17;
                    case "worldGeoChp18":
                        return worldGeoChp18;
                    case "worldGeoChp19":
                        return worldGeoChp19;
                    case "worldGeoChp20":
                        return worldGeoChp20;
                    case "worldGeoUnit45":
                        return worldGeoUnit45;						
                }
                
            }
    
        }//end of the return
});