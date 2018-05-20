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
	
   var scienceUnit1 = [

        {"term":"Negative acceleration is occurring", "correctAnswer":"Deceleration"}, 

        {"term":"The speed of motion when speed is changing", "correctAnswer":"Average Speed"},

		{"term":"The speed of an object at a specific moment in time", "correctAnswer":"Instananeous Speed"},

        {"term":"A change in position relative to a reference point", "correctAnswer":"Motion"}, 

        {"term":"The velocity is increasing", "correctAnswer":"Positive Acceleration"},

		{"term":"Measure from the starting point to the end point", "correctAnswer":"Displacement"},

        {"term":"How fast an object is moving, distance per time it takes an object to travel", "correctAnswer":"Speed"}, 

        {"term":"The system used to specify an object exact location in space and time", "correctAnswer":"Frame of Reference"},

		{"term":"A measure of the entire path taken from stat to finish", "correctAnswer":"Distance"},		
		
        {"term":"A direction of an object and the distance per time it takes an object to travel", "correctAnswer":"Velocity Matching"}

    ]; 
	
   var scienceUnit2 = [

        {"term":"CH4+2O2 ^ CO2+sH2O", "correctAnswer":"Combustion"}, 

        {"term":"2NH3 ^  N2+3H2", "correctAnswer":"Decomposition"},

		{"term":"2NaCl+H2SO4 ^ Na2SO4+2HCl", "correctAnswer":"Double Displacement"},

        {"term":"FE+S ^ FeS", "correctAnswer":"Synthesis"}, 

        {"term":"2Li+2H2O ^ LiOH+H2", "correctAnswer":"Single Displacement"}
    ];
	
   var scienceUnit3 = [

        {"term":"The product of a combustion reaction usually are?", "correctAnswer":"Carbin dioxide and water"}, 

        {"term":"Which of these is not a sign of chemical reaction?", "correctAnswer":"The material dissolves"},

		{"term":"The substance that is formed in a chemical reaction is called the?", "correctAnswer":" Product"},

        {"term":"Which of the following occurs in an endothermic reaction but not in an exothermic reaction?", "correctAnswer":"Energy is absorbed"}, 

        {"term":"In the chemical formula 3AL2S3, how many atoms are present?", "correctAnswer":"15"},

		{"term":"Which of the following equations is not balanced?", "correctAnswer":"NaCl + H2SO4 = Na2SO4+ HCl"},

        {"term":"What happens in a chemical reaction?", "correctAnswer":"Atoms are rearranged"}, 

        {"term":"When one complex reactant breaks down into multiple simple products?", "correctAnswer":"decomposition"},

		{"term":"When two substance undergoes a chemical change and one element replaces another in a compound?", "correctAnswer":"Single Replacement"},		

        {"term":"Which of the following is not an example of a chemical change?", "correctAnswer":"Melting ice "}, 

        {"term":"In the picture, which type of reaction does the cartoon of two couples going to a dance and switching partners symbolize?", "correctAnswer":"Double Replacement"},

		{"term":"The general formula for a synthesis reaction is?", "correctAnswer":"A + B =AB"},

        {"term":"What is the SI unit for work?", "correctAnswer":"Joules"}, 

        {"term":"A train approaching a crossing change speed from 25 m/s to 10 m/s in 240 s. How can the train's acceleration be described?", "correctAnswer":"The train will come to rest in 6min"},

		{"term":"An object that is accelerating may be.", "correctAnswer":"SLowing down, changing direction, and gaining speed."},

        {"term":"Speed is the ratio of the distance an object moves to", "correctAnswer":"The motion of the object"}, 
		
		 {"term":"A kilometer is a unit of measurement that measures.", "correctAnswer":"Distance"}	
    ];
	

    var scienceUnit4 = [

        {"term":"If the turtle sits on the fence, unmoved, with what force does the fence push back on the turtle? ", "correctAnswer":"The same force as the weight of the turtle"}, 

        {"term":"Which of the four fundament forces is the strongest?", "correctAnswer":"Strong Nuclear"},

		{"term":"A vector is a line with an arrow that begins with a dot and represents.", "correctAnswer":"Force"},

        {"term":"The length of a vector represents.", "correctAnswer":"The amount of force"}, 

        {"term":"Which one of Newton's laws does a rocket blasting off represent?", "correctAnswer":"Newton's 3rd law"},

		{"term":"Newton's 1st law is also known as", "correctAnswer":"The law of inertia"},

        {"term":"Resistance a (swimming toy) torpedo encounters as it glides through the water is.", "correctAnswer":"Fluid Friction"}, 

        {"term":"The friction acting on a large box at rest on the floor is an example of?", "correctAnswer":"Static Friction"},

		{"term":"If forces are balanced will motion change?", "correctAnswer":"No way"},		
		
       {"term":"The tendency of an object to resist change in motion.", "correctAnswer":"Gravity"}, 

        {"term":"A girl goes bowling and tries to find the ball that is perfect for her. She first rolls a 15 kg ball which does not go as far as she hoped. Next, she rolls a 10 kg ball that acceleration quickly makes it to the end of the lane and knocks down most of the pins. What is this an explanation of?", "correctAnswer":"Newton's 2nd law"},

		{"term":"A force that acts over a long distance but is very weak.", "correctAnswer":"Gravitational Force"},

        {"term":"The numerical value, 9.8 m/s2, is the constant value for.", "correctAnswer":"Gravity"}, 

        {"term":"Which of the following is an example of velocity?", "correctAnswer":"A rocket traveling 700 km/hr straight up"},

		{"term":"Which of the following energies are also known as heart energy?", "correctAnswer":"Thermal"},

        {"term":"The two types of mechanical energy are?", "correctAnswer":"Potential/Kinetic"}, 

        {"term":"The energy of motion is", "correctAnswer":"The energy of motion is"},

		{"term":"What type of stored energy would you find in a slice of pizza?", "correctAnswer":"Chemical"},		
		
       {"term":"A pole vault is straight as the athlete runs with it, then bends backward and slings the athlete forward. what main types of energy is this an example of?", "correctAnswer":"Elastic Potential/ Kinetic"}, 

        {"term":"What is the SI unit for power?", "correctAnswer":"Watts"},

		{"term":"AN acid to people that makes work done to be more effective is known as.", "correctAnswer":"A machine"},

        {"term":"63)A simple machine that makes work easier by multiplying 2 forces downward towards one location using two inclined planes back to back. ", "correctAnswer":"Wedge"}, 

        {"term":"The lever family includes.", "correctAnswer":"Wheel an Axle and Pulley"},

		{"term":"A force that opposes two surfaces in contact?", "correctAnswer":"Friction"},

        {"term":"What caused motion?", "correctAnswer":"Unbalanced Forces"}, 

        {"term":"Which is not in the inclined plane family?", "correctAnswer":"Wheel an Axle"},

		{"term":"The ability to do work is", "correctAnswer":"Energy"}		

    ];
	
//************************************************************************
	
   var science9wk = [

        {"term":"Negative acceleration is occurring", "correctAnswer":"Deceleration"}, 

        {"term":"The speed of motion when speed is changing", "correctAnswer":"Average Speed"},

		{"term":"The speed of an object at a specific moment in time", "correctAnswer":"Instananeous Speed"},

        {"term":"A change in position relative to a reference point", "correctAnswer":"Motion"}, 

        {"term":"The velocity is increasing", "correctAnswer":"Positive Acceleration"},

		{"term":"Measure from the starting point to the end point", "correctAnswer":"Displacement"},

        {"term":"How fast an object is moving, distance per time it takes an object to travel", "correctAnswer":"Speed"}, 

        {"term":"The system used to specify an object exact location in space and time", "correctAnswer":"Frame of Reference"},

		{"term":"A measure of the entire path taken from stat to finish", "correctAnswer":"Distance"},		
		
        {"term":"A direction of an object and the distance per time it takes an object to travel", "correctAnswer":"Velocity Matching"},

        {"term":"CH4+2O2 ^ CO2+sH2O", "correctAnswer":"Combustion"}, 

        {"term":"2NH3 ^  N2+3H2", "correctAnswer":"Decomposition"},

		{"term":"2NaCl+H2SO4 ^ Na2SO4+2HCl", "correctAnswer":"Double Displacement"},

        {"term":"FE+S ^ FeS", "correctAnswer":"Synthesis"}, 

        {"term":"2Li+2H2O ^ LiOH+H2", "correctAnswer":"Single Displacement"},

        {"term":"The product of a combustion reaction usually are?", "correctAnswer":"Carbin dioxide and water"}, 

        {"term":"Which of these is not a sign of chemical reaction?", "correctAnswer":"The material dissolves"},

		{"term":"The substance that is formed in a chemical reaction is called the?", "correctAnswer":" Product"},

        {"term":"Which of the following occurs in an endothermic reaction but not in an exothermic reaction?", "correctAnswer":"Energy is absorbed"}, 

        {"term":"In the chemical formula 3AL2S3, how many atoms are present?", "correctAnswer":"15"},

		{"term":"Which of the following equations is not balanced?", "correctAnswer":"NaCl + H2SO4 = Na2SO4+ HCl"},

        {"term":"What happens in a chemical reaction?", "correctAnswer":"Atoms are rearranged"}, 

        {"term":"When one complex reactant breaks down into multiple simple products?", "correctAnswer":"decomposition"},

		{"term":"When two substance undergoes a chemical change and one element replaces another in a compound?", "correctAnswer":"Single Replacement"},		

        {"term":"Which of the following is not an example of a chemical change?", "correctAnswer":"Melting ice "}, 

        {"term":"In the picture, which type of reaction does the cartoon of two couples going to a dance and switching partners symbolize?", "correctAnswer":"Double Replacement"},

		{"term":"The general formula for a synthesis reaction is?", "correctAnswer":"A + B =AB"},

        {"term":"What is the SI unit for work?", "correctAnswer":"Joules"}, 

        {"term":"A train approaching a crossing change speed from 25 m/s to 10 m/s in 240 s. How can the train's acceleration be described?", "correctAnswer":"The train will come to rest in 6min"},

		{"term":"An object that is accelerating may be.", "correctAnswer":"SLowing down, changing direction, and gaining speed."},

        {"term":"Speed is the ratio of the distance an object moves to", "correctAnswer":"The motion of the object"}, 
		
		 {"term":"A kilometer is a unit of measurement that measures.", "correctAnswer":"Distance"},

        {"term":"If the turtle sits on the fence, unmoved, with what force does the fence push back on the turtle? ", "correctAnswer":"The same force as the weight of the turtle"}, 

        {"term":"Which of the four fundament forces is the strongest?", "correctAnswer":"Strong Nuclear"},

		{"term":"A vector is a line with an arrow that begins with a dot and represents.", "correctAnswer":"Force"},

        {"term":"The length of a vector represents.", "correctAnswer":"The amount of force"}, 

        {"term":"Which one of Newton's laws does a rocket blasting off represent?", "correctAnswer":"Newton's 3rd law"},

		{"term":"Newton's 1st law is also known as", "correctAnswer":"The law of inertia"},

        {"term":"Resistance a (swimming toy) torpedo encounters as it glides through the water is.", "correctAnswer":"Fluid Friction"}, 

        {"term":"The friction acting on a large box at rest on the floor is an example of?", "correctAnswer":"Static Friction"},

		{"term":"If forces are balanced will motion change?", "correctAnswer":"No way"},		
		
       {"term":"The tendency of an object to resist change in motion.", "correctAnswer":"Gravity"}, 

        {"term":"A girl goes bowling and tries to find the ball that is perfect for her. She first rolls a 15 kg ball which does not go as far as she hoped. Next, she rolls a 10 kg ball that acceleration quickly makes it to the end of the lane and knocks down most of the pins. What is this an explanation of?", "correctAnswer":"Newton's 2nd law"},

		{"term":"A force that acts over a long distance but is very weak.", "correctAnswer":"Gravitational Force"},

        {"term":"The numerical value, 9.8 m/s2, is the constant value for.", "correctAnswer":"Gravity"}, 

        {"term":"Which of the following is an example of velocity?", "correctAnswer":"A rocket traveling 700 km/hr straight up"},

		{"term":"Which of the following energies are also known as heart energy?", "correctAnswer":"Thermal"},

        {"term":"The two types of mechanical energy are?", "correctAnswer":"Potential/Kinetic"}, 

        {"term":"The energy of motion is", "correctAnswer":"The energy of motion is"},

		{"term":"What type of stored energy would you find in a slice of pizza?", "correctAnswer":"Chemical"},		
		
       {"term":"A pole vault is straight as the athlete runs with it, then bends backward and slings the athlete forward. what main types of energy is this an example of?", "correctAnswer":"Elastic Potential/ Kinetic"}, 

        {"term":"What is the SI unit for power?", "correctAnswer":"Watts"},

		{"term":"AN acid to people that makes work done to be more effective is known as.", "correctAnswer":"A machine"},

        {"term":"63)A simple machine that makes work easier by multiplying 2 forces downward towards one location using two inclined planes back to back. ", "correctAnswer":"Wedge"}, 

        {"term":"The lever family includes.", "correctAnswer":"Wheel an Axle and Pulley"},

		{"term":"A force that opposes two surfaces in contact?", "correctAnswer":"Friction"},

        {"term":"What caused motion?", "correctAnswer":"Unbalanced Forces"}, 

        {"term":"Which is not in the inclined plane family?", "correctAnswer":"Wheel an Axle"},

		{"term":"The ability to do work is", "correctAnswer":"Energy"}	
    ];
	
return {      
    
            //return requested test
            getData: function(test){
                //if(test = MSChp6)
                  //  return MSChp6;
                switch(test){

                    case "scienceUnit1":

                        return scienceUnit1;

                    case "scienceUnit2":

                        return scienceUnit2;	

					case "scienceUnit3":

                        return scienceUnit3;				
						
                    case "scienceUnit4":

                        return scienceUnit4;
						
                     case "science9wk":

                        return science9wk;		                    

                }
                
            }
    
        }//end of the return
});