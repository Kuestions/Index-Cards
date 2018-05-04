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
        {"term":"What did european trade guns for?", "correctAnswer":"Gold and Ivory"}, 
        {"term":"South of the Sahara___languages are spoken?", "correctAnswer":"800"},
		{"term":"Herders move their flocks to differnt pastrares throughout the year", "correctAnswer":"Nomadic herding?"},
        {"term":"Dissolving and washing away of nutrients", "correctAnswer":"Leaching"}		
    ];	
	
    var worldGeo25 = [

        {"term":"Gift of the Nile?", "correctAnswer":"Egypt"}, 

        {"term":"World's longest river?", "correctAnswer":"Nile"},

		{"term":"Nile fork into two branches, between 2 branches", "correctAnswer":"Nile Delta"},

        {"term":"a special wind that creates sandstorms that blow hot air, dust, and grit into the Nike Valley", "correctAnswer":"Khamsin?"},		

        {"term":"process of preparing bodies after death", "correctAnswer":"mummification"}, 

        {"term":"______% of Egyptians are Muslim", "correctAnswer":"90"},

		{"term":"A canal in Egypt that links the Mediterranean and red seas", "correctAnswer":"Suez Canal"},

        {"term":"3 Maghreb nations", "correctAnswer":"Tunisia, Algeria, and Morocco"}, 

        {"term":"What does Maghreb mean?", "correctAnswer":"Land Farthest West"},

		{"term":"Members of an ethnic group who are native to North Africa", "correctAnswer":"Berbers"},

        {"term":"group of merchants and animals that travel together for safety", "correctAnswer":"Caravan"}, 

        {"term":"lived in southern and central Sahara/speaks own language/ MEANS 'FREE MEN'", "correctAnswer":"Tuareg"},

		{"term":"Oil makes up ______% of Libya’s exports", "correctAnswer":"99"},
		
		{"term":"Tunisia spends ______% of money on education", "correctAnswer":"15"}    
	];	    


var worldGeo26 = [

        {"term":"extends across Africa and separates the Sahara to the north from the tropical grasslands in the south", "correctAnswer":"Sahel"}, 

        {"term":"The Practice of farming a site until the soil is exhausted, then moving on to a new site", "correctAnswer":"Shifting agriculture"},

		{"term":"process by which fertile land becomes too dry or damaged to support life", "correctAnswer":"Desertification"},

        {"term":"Coastal countries 2 advantages", "correctAnswer":"wetter climate, access to sea"}, 

        {"term":"2 main exports of coastal countries", "correctAnswer":"peanuts, cocoa beans"},

		{"term":"Africa needs $___a year to pay off interest on debt", "correctAnswer":"$9 billion"},

        {"term":"this effort begins with ordinary citizens", "correctAnswer":"Grass-roots"}, 

        {"term":"a group of people in South Ghana-believe that if children respect and honor them after death, they will live in in the spirit world", "correctAnswer":"Asante"},

		{"term":"religious practice of honoring the spirits of the dead", "correctAnswer":"Ancestor worship"},		

        {"term":"The belief that bodies of water, animals, trees, and other natural objects have spirits", "correctAnswer":"Animism"}, 

        {"term":"Nigeria had to borrow money from this place during their economic disaster", "correctAnswer":"World Bank"},

		{"term":"guidelines created by the World Bank to improve the economy of a country", "correctAnswer":"Structural Adjustment Program"},

        {"term":"largest river in central Africa", "correctAnswer":"Congo River"}, 

        {"term":"international popular music- afrikaan, rock, and pop rhythms", "correctAnswer":"Afro pop"},

		{"term":"most western central African countries belong to an African financial community/has value as international markets because it can be exchanged for the French Franc", "correctAnswer":"CFA"},

        {"term":"has the most cobalt then any other country in the world. Has 1/3 of the worlds industrial diamonds", "correctAnswer":"Democratic Republic of the Congo"}
    ];


    var worldGeo27 = [

        {"term":"The largest lake in Africa", "correctAnswer":"Lake Victoria"}, 

        {"term":"in the 1950s, kikuyu went to war with the British settlers", "correctAnswer":"Mau Mau Rebellion"},

		{"term":"pulling together, grass-roots, to help selves and each other", "correctAnswer":"Harambee"},

        {"term":"One of the oldest countries in Africa", "correctAnswer":"Ethiopia"}, 

        {"term":"Africa's newest country", "correctAnswer":"Eritrea"},

		{"term":"largest nation in an area in Africa", "correctAnswer":"The Sudan"},

        {"term":"when government with one ethnic group rules over another; Rwanda and Burundi", "correctAnswer":"Ethnocracies"}, 

        {"term":"4 reasons for South America’s economy growth", "correctAnswer":"coal reserves, money to invest, connections with Britain and Europe, forced labor with low wages on blacks"},

		{"term":"14% of countries land, blacks are forced to live there", "correctAnswer":"Homelands"},		

        {"term":"first black president", "correctAnswer":"Nelson Mandela"}, 

        {"term":"What is South Africa’s nickname", "correctAnswer":"Rainbow nation"},

		{"term":"How many official languages are spoken in South Africa", "correctAnswer":"11"}
    ];
	
    //test array containing vocabulary words as terms and definitions as correctAnswer
    var worldGeoUnit4 = [
        {"term":"What did european trade guns for?", "correctAnswer":"Gold and Ivory"}, 
        {"term":"South of the Sahara___languages are spoken?", "correctAnswer":"800"},
		{"term":"Herders move their flocks to differnt pastrares throughout the year", "correctAnswer":"Nomadic herding?"},
        {"term":"Dissolving and washing away of nutrients", "correctAnswer":"Leaching"},

        {"term":"Gift of the Nile?", "correctAnswer":"Egypt"}, 

        {"term":"World's longest river?", "correctAnswer":"Nile"},

		{"term":"Nile fork into two branches, between 2 branches", "correctAnswer":"Nile Delta"},

        {"term":"a special wind that creates sandstorms that blow hot air, dust, and grit into the Nike Valley", "correctAnswer":"Khamsin?"},		

        {"term":"process of preparing bodies after death", "correctAnswer":"mummification"}, 

        {"term":"______% of Egyptians are Muslim", "correctAnswer":"90"},

		{"term":"A canal in Egypt that links the Mediterranean and red seas", "correctAnswer":"Suez Canal"},

        {"term":"3 Maghreb nations", "correctAnswer":"Tunisia, Algeria, and Morocco"}, 

        {"term":"What does Maghreb mean?", "correctAnswer":"Land Farthest West"},

		{"term":"Members of an ethnic group who are native to North Africa", "correctAnswer":"Berbers"},

        {"term":"group of merchants and animals that travel together for safety", "correctAnswer":"Caravan"}, 

        {"term":"lived in southern and central Sahara/speaks own language/ MEANS 'FREE MEN'", "correctAnswer":"Tuareg"},

		{"term":"Oil makes up ______% of Libya’s exports", "correctAnswer":"99"},
		
		{"term":"Tunisia spends ______% of money on education", "correctAnswer":"15"},

        {"term":"extends across Africa and separates the Sahara to the north from the tropical grasslands in the south", "correctAnswer":"Sahel"}, 

        {"term":"The Practice of farming a site until the soil is exhausted, then moving on to a new site", "correctAnswer":"Shifting agriculture"},

		{"term":"process by which fertile land becomes too dry or damaged to support life", "correctAnswer":"Desertification"},

        {"term":"Coastal countries 2 advantages", "correctAnswer":"wetter climate, access to sea"}, 

        {"term":"2 main exports of coastal countries", "correctAnswer":"peanuts, cocoa beans"},

		{"term":"Africa needs $___a year to pay off interest on debt", "correctAnswer":"$9 billion"},

        {"term":"this effort begins with ordinary citizens", "correctAnswer":"Grass-roots"}, 

        {"term":"a group of people in South Ghana-believe that if children respect and honor them after death, they will live in in the spirit world", "correctAnswer":"Asante"},

		{"term":"religious practice of honoring the spirits of the dead", "correctAnswer":"Ancestor worship"},		

        {"term":"The belief that bodies of water, animals, trees, and other natural objects have spirits", "correctAnswer":"Animism"}, 

        {"term":"Nigeria had to borrow money from this place during their economic disaster", "correctAnswer":"World Bank"},

		{"term":"guidelines created by the World Bank to improve the economy of a country", "correctAnswer":"Structural Adjustment Program"},

        {"term":"largest river in central Africa", "correctAnswer":"Congo River"}, 

        {"term":"international popular music- afrikaan, rock, and pop rhythms", "correctAnswer":"Afro pop"},

		{"term":"most western central African countries belong to an African financial community/has value as international markets because it can be exchanged for the French Franc", "correctAnswer":"CFA"},

        {"term":"has the most cobalt then any other country in the world. Has 1/3 of the worlds industrial diamonds", "correctAnswer":"Democratic Republic of the Congo"},

        {"term":"The largest lake in Africa", "correctAnswer":"Lake Victoria"}, 

        {"term":"in the 1950s, kikuyu went to war with the British settlers", "correctAnswer":"Mau Mau Rebellion"},

		{"term":"pulling together, grass-roots, to help selves and each other", "correctAnswer":"Harambee"},

        {"term":"One of the oldest countries in Africa", "correctAnswer":"Ethiopia"}, 

        {"term":"Africa's newest country", "correctAnswer":"Eritrea"},

		{"term":"largest nation in an area in Africa", "correctAnswer":"The Sudan"},

        {"term":"when government with one ethnic group rules over another; Rwanda and Burundi", "correctAnswer":"Ethnocracies"}, 

        {"term":"4 reasons for South America’s economy growth", "correctAnswer":"coal reserves, money to invest, connections with Britain and Europe, forced labor with low wages on blacks"},

		{"term":"14% of countries land, blacks are forced to live there", "correctAnswer":"Homelands"},		

        {"term":"first black president", "correctAnswer":"Nelson Mandela"}, 

        {"term":"What is South Africa’s nickname", "correctAnswer":"Rainbow nation"},

		{"term":"How many official languages are spoken in South Africa", "correctAnswer":"11"}
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

					case "worldGeo26":

                        return worldGeo26;

                    case "worldGeo27":

                        return worldGeo27;						

                    case "worldGeoUnit4":

                        return worldGeoUnit4;						

                    case "scienceChp11":

                        return scienceChp11;                        

                }
                
            }
    
        }//end of the return
});