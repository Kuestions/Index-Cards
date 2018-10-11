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

        {"term":"Scientific study of heredity", "correctAnswer":"Genetics"}, 

        {"term":"Specific characteristic of an individual", "correctAnswer":"Trait"},

		{"term":"Offspring of crosses between parents with different traits", "correctAnswer":"Hybrid"},

        {"term":"Sequence of DNA that codes for a protein and that determines a trait; factors that are passed from parent to offspring", "correctAnswer":"Genes"}, 

        {"term":"One of different forms of a gene", "correctAnswer":"Alleles"},

		{"term":"Having two identical alleles for a particular gene", "correctAnswer":"Homozygous"},

        {"term":"Having two different alleles for a particular", "correctAnswer":"Heterozygous"}, 

        {"term":"Physical characteristics of an organism", "correctAnswer":"Phenotype"},

		{"term":"Genetic makeup of an organism", "correctAnswer":"Genotype"},		
		
        {"term":"Diagram that can be used to predict the genotype and phenotype combination of a genetic across.", "correctAnswer":"Punnett Square"}

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