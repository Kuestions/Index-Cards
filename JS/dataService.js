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

        {"term":"a state of balance in which the rate of a forward reaction equates the rate of the reverse reaction and the concentration of products and reactants remain unchanged.", "correctAnswer":"Chemical equilibrium"}, 		

    ];       
return {      
    
            //return requested test
            getData: function(test){
                switch(test){
                    case "scienceChp5":
                        return scienceChp5;
                    case "scienceChp7":
                        return scienceChp7;                       
                }
                
            }
    
        }//end of the return
});