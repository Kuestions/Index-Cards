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

        {"term":"Energy stored in the arrangement of particles of matter", "correctAnswer":"Chemical Energy"},

        {"term":"A path that electricity follows", "correctAnswer":"Circuit"},

        {"term":"Materials that allow electric charge to flow through them easily", "correctAnswer":"Conductors"},

        {"term":"A steady movement of charges through certain materials", "correctAnswer":"Electric Current"},

        {"term":"A temporary magnet caused by an electrical current", "correctAnswer":"Electromagnet"},

        {"term":"A material that does not carry current electricity well", "correctAnswer":"Insulator"},

        {"term":"A device that produces an electric current", "correctAnswer":"Generator"},

        {"term":"Energy of motion", "correctAnswer":"Kinetic energy"},

        {"term":"An object that attracts iron, steal, and a few other (but not all) metals", "correctAnswer":"Magnet"},

        {"term":"The parts of a magnet at which its force is strongest", "correctAnswer":"Magnetic poles"},

        {"term":"Energy that moves a machine", "correctAnswer":"Mechanical energy"},

        {"term":"A circuit that has more than one path for an electric current to follow", "correctAnswer":"Parallel Circuit"},     

        {"term":"Energy that an object has because of its position or its condition", "correctAnswer":"Potential Energy"},

        {"term":"A circuit that has only one path for an electric current to follow", "correctAnswer":"Series Circuit"}

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