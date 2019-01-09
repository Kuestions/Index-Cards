/*A service that provides an array of vocabulary terms and definitions to the controller */
myApp.factory('Data',  function () {
    
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var basicModel = [
        {"term":"", "correctAnswer":""}, 
        {"term":"", "correctAnswer":""},
		{"term":"", "correctAnswer":""},
        {"term":"", "correctAnswer":""}, 
        {"term":"", "correctAnswer":""},
		{"term":"", "correctAnswer":""},
        {"term":"", "correctAnswer":""}, 
        {"term":"", "correctAnswer":""},
		{"term":"", "correctAnswer":""},		
    ];
	
   var science1 = [

        {"term":"The use of 1 or more of your senses to notice and describe events in an orderly manner", "correctAnswer":"Observation"},

        {"term":"A logical interpretation or explanation based what is already known", "correctAnswer":"Inference"},

        {"term":"An predicted outcome that can be tested by further observation and experimentation", "correctAnswer":"Hypothesis"},

        {"term":"All variables other than the independent variable should be kept unchanged and a control group should be used", "correctAnswer":"Controlled Experiment"},

        {"term":"The variable deliberately changed or manipulated", "correctAnswer":"Independent Variable"},

        {"term":"The variable that is measured", "correctAnswer":"Dependent Variable"},

        {"term":"All variables that remain consistent or constant so they do not affect the results", "correctAnswer":"Control Variables"},

        {"term":"This group is exposed to all the conditions as the experimental group except they do not receive the independent variable. They serve as a comparison", "correctAnswer":"Control Group"},

        {"term":"A harmless pill prescribed more for the psychological benefit to the patient. It does not contain actual medication", "correctAnswer":"Placebo"},

        {"term":"The combination of chemical reactions as it carries out its life processes", "correctAnswer":"Metabolism"},

        {"term":"The fairly constant set of internal conditions that must be maintained for survival. Ex. A person's temperature", "correctAnswer":"Homeostasis"},

        {"term":"Monomers", "correctAnswer":"Small chemical units that make up larger macromolecules. They are the building blocks (single blocks)"},     

        {"term":"Polymers", "correctAnswer":"Molecules composed of more then one monomer. Think of them as the brick wall"},

        {"term":"Carbohydrates", "correctAnswer":"Macromolecule made of C, H, O that is used for short term energy and structural support in cell walls"},

        {"term":"Lipids", "correctAnswer":"Macromolecules made of C, H, O, but very O that is used for long term energy storage and to makeup the majority of the cell membrane"},

        {"term":"Proteins", "correctAnswer":"Macromolecule made of C, H, O,N, needed by body for growth and repair"},                       

        {"term":"Nucleic Acids", "correctAnswer":"Macromolecule made of C, H, O, P, N that is used for the storage and passing of genetic information"},

        {"term":"Chemical Reaction", "correctAnswer":"The process that changes one set of chemicals into another set of chemicals with their own unique prooperties"},

        {"term":"Reactants", "correctAnswer":"Elements or compounds that enter into the chemical reaction. They are at the beginning of the chemical reaction."},

        {"term":"Products", "correctAnswer":"Energy input that is needed for a reaction to begin"},           

        {"term":"Activation Energy", "correctAnswer":"A substance that speeds up a chemical reaction"},

        {"term":"Catalyst", "correctAnswer":"Protein catalyst that speed up the rate of specific biological reactions by lowering the amount of activation energy needed to get it going"},

        {"term":"Enzyme", "correctAnswer":"The reactant of an enzyme reaction. It is what the enzyme works in order to produce products"}

    ];
	
return {      
    
            //return requested test
            getData: function(test){
                //if(test = MSChp6)
                  //  return MSChp6;
                switch(test){

                    case "science1":

                        return science1;
                }
                
            }
    
        }//end of the return
});