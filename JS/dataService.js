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
	
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var scienceChp11 = [
        {"term":"an object change in position relative to a reference point", "correctAnswer":"Motion"}, 
        {"term":"a system for specifics the precise location of object in space and time", "correctAnswer":"Frame of reference"},
		{"term":"the change in position of an object", "correctAnswer":"Displacement"},
        {"term":"the distance traveled divided by the time interval during which the motion occurred", "correctAnswer":"speed"}, 
        {"term":"the speed of an object in a particular direction", "correctAnswer":"velocity"},
		{"term":"the rate at which relocity change over time; an object accelerates if its speed, direction, or both change", "correctAnswer":"acceleration"},
        {"term":"an action exerted on a body in order to change the body's stae of rest or motion; force has magnitude and direction", "correctAnswer":"Force"}, 
        {"term":"a force that oppose motion between two surfaces that are in contact", "correctAnswer":"Friction"},
		{"term":"the force that resists the initiation of sliding motion between two surfaces taht are in contact and at rest", "correctAnswer":"Static friction"},
		{"term":"the force that oppose the movement of two surface that are in contact and are moving over each other", "correctAnswer":"Kinetic friction"}		
    ];	
	
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var worldGeo24 = [
        {"term":"Gold and Ivory", "correctAnswer":"What did european trade guns for?"}, 
        {"term":"800", "correctAnswer":"South of the Sahara___languages are spoken?"},
		{"term":"Herders move their flocks to differnt pastrares throughout the year", "correctAnswer":"Nomadic herding?"},
        {"term":"Dissolving and washing away of nutrients", "correctAnswer":"Leaching"}		
    ];
	
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var worldGeo25 = [
        {"term":"Egypt", "correctAnswer":"Gift of the Nile?"}, 
        {"term":"Nile", "correctAnswer":"World's longest river?"},
		{"term":"Nile fork into two branches, between 2 branches", "correctAnswer":"Nile Delta"},
        {"term":"Create sand storms that blow hot air,dust,and grint into the Nile Valley", "correctAnswer":"Khamsin?"}		
    ];
	
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var worldGeoUnit4 = [
        {"term":"Gold and Ivory", "correctAnswer":"What did european trade guns for?"}, 
        {"term":"800", "correctAnswer":"South of the Sahara___languages are spoken?"},
		{"term":"Herders move their flocks to differnt pastrares throughout the year", "correctAnswer":"Nomadic herding?"},
        {"term":"Dissolving and washing away of nutrients", "correctAnswer":"Leaching"},	
        {"term":"Egypt", "correctAnswer":"Gift of the Nile?"}, 
        {"term":"Nile", "correctAnswer":"World's longest river?"},
		{"term":"Nile fork into two branches, between 2 branches", "correctAnswer":"Nile Delta"},
        {"term":"Create sand storms that blow hot air,dust,and grint into the Nile Valley", "correctAnswer":"Khamsin?"}		
    ];		

    
return {      
    
            //return requested test
            getData: function(test){
                //if(test = MSChp6)
                  //  return MSChp6;
                switch(test){
                    case "worldGeo24":
                        return worldGeo24;
                    case "worldGeo25":
                        return worldGeo25;
                    case "worldGeoUnit4":
                        return worldGeoUnit4;						
                    case "scienceChp11":
                        return scienceChp11;
                        
                }
                
            }
    
        }//end of the return
});