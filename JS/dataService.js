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

        {"term":"2 Main Mountain Ranges in Mexicao", "correctAnswer":"Sierra Madre Occidental and Sierra Marie"},

        {"term":"Baja California", "correctAnswer":"Oriental"},

        {"term":"Mexico City", "correctAnswer":"Capital (most populous city of Mexico)"},

        {"term":"Plaza de las Tres Culturas (The Three Cultures)", "correctAnswer":"A square in Mexico City that recognize the phase of Mexico history"},

        {"term":"Tenochtitlan", "correctAnswer":"Was the center of the empire"},

        {"term":"4 social classes of New Span", "correctAnswer":"Peninsulares, Criollos, Mestizos, Native Americans"},

        {"term":"Hacienda", "correctAnswer":"Haciendas and NA were given to conquistadors as rewards by the Spanish KIng"},

        {"term":"Subsistence Farming", "correctAnswer":"gave only enough to meet family needs"}, 

        {"term":"Latifundios", "correctAnswer":"a commercial farm own by private individuals"}, 

        {"term":"2 Most Important Economic Activities", "correctAnswer":"Petroleum extraction and ?????"},

        {"term":"Smokeless Industry", "correctAnswer":"Tourism is a cleaner alternative"},
		
        {"term":"Where Central America is located", "correctAnswer":"Between N. America and S. America"}, 
	   
        {"term":"Isthmus", "correctAnswer":"Narrow strip of land, water on both sides, connecting two large bodies of land"}, 	   

        {"term":"3 Major Landform Regions of Central America", "correctAnswer":"The Mountainous Core, Caribbean coastal lands, Pacific coastal plains"}, 

        {"term":"Combined land of Central America is ______ the size of Mexico.", "correctAnswer":"7/4"}, 
	   
        {"term":"The poorest 20% receive _____ of all income while the wealthiest 20% receives _____.", "correctAnswer":"3%, 61%"}, 	   

        {"term":"Caribbean Islands 3 Island Groups", "correctAnswer":"The Greater Antilles, the Lesser Antilles, Bahamas"}, 
        
        {"term":"Tiempo Muerto (The Dead Season)", "correctAnswer":"Sugar plantations are major employers but busy season is only 4 months out of the year other months"}, 
	   
        {"term":"Brazil is the ______ largest in land in the world.", "correctAnswer":"5th"}, 
        
        {"term":"Sertao", "correctAnswer":"Brazil's interior plateau"}, 
	   
        {"term":"“Coffeepot”", "correctAnswer":"Brazil referred to aas the world 'coffeepot'. Produce 1/4 of the world supply in the southeast region"}, 	   

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

        {"term":"Argentiana", "correctAnswer":"NO ANSWER GIVEN"},
        
        {"term":"Patagonia", "correctAnswer":"Region of Chile and Argentina, south of the pampas. Dry, cold, and sometimes foggy. Suited for raising sheep."}   
      

    ];    
return {      
    
            //return requested test 
            getData: function(test){
                switch(test){
                    case "scienceChp5":
                        return scienceChp5;
                    case "scienceChp7":
                        return scienceChp7; 
                    case "worldGeoUnit3":
                        return worldGeoUnit3;                        
                }
                
            }
    
        }//end of the return
});