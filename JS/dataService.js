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
	
    var worldGeoUnit34 = [
        {"term":"___ is both a country and a continent.", "correctAnswer":"Australia"}, 
        {"term":"Australia is the ___ largest country in terms of area.", "correctAnswer":"6th"},
		{"term":"These are the original inhabitants of Australia; crossed a landbridge from Southeast Asia 50,000 years ago.", "correctAnswer":"Aborigines"},
        {"term":"This is a city in Australia; one if the worlds most remote cities.", "correctAnswer":"Perth"}, 
        {"term":"3 most important cities of the urban rim", "correctAnswer":"Sydney, Melbourne, Canberra"},
		{"term":"This is Australia's capital.", "correctAnswer":"Canberra"},
        {"term":"This died back in 2016 due to climate change.", "correctAnswer":"Great Barrier Reef"}, 
        {"term":"This is the harsh wilderness of Australia.", "correctAnswer":"Outback"},
		{"term":"2 economic activities Australia is a world leader in", "correctAnswer":"Wool Production and cattle"},	
		{"term":"2 islands of New Zealand", "correctAnswer":"North Island and South Island"},
        {"term":"The orginal inhabitants of New Zealand.", "correctAnswer":"Maori"},
		{"term":"ew Zealand procuces 1/4 of the worlds ___", "correctAnswer":"Kiwi fruit"},	
        {"term":"Antarctica is ______ of the world’s land", "correctAnswer":"1/10"}, 
        {"term":"12 countries signed this in 1961, provided peaceful use of the continent and sharing of scientific research.", "correctAnswer":"Antarctic Treaty"},		
    ];	
	
    var worldGeoUnit32 = [
        {"term":"Japan consists of___ main islands", "correctAnswer":"4"}, 
        {"term":"2 religions of Japan", "correctAnswer":"Shinto and Buddhism"},
		{"term":"December 7th, 1941, the Japanese attacked this place, causing the US to join WWII.", "correctAnswer":"Attack on Pearl Harbor"},
        {"term":"2 Japanese cities bombed by the US", "correctAnswer":"2 Japanese cities bombed by the US"}, 
        {"term":"Korean War", "correctAnswer":"Soviet Union"},
		{"term":"Major exports of S. Korea", "correctAnswer":"textiles, clothing, automobiles, and electronic goods"}	
    ];	
	
    var worldGeoUnit8 = [
        {"term":"This is the pilgrimage to mecca that 2 million people go on every year.", "correctAnswer":"Hajj"}, 
        {"term":"This is a black box with a black stone inside said to be sent from God.", "correctAnswer":"Kaaba"},
		{"term":"This is Israel's driest region; covers half of the country.", "correctAnswer":"Negev Desert"},
        {"term":"This is the peak where Noah's Ark is said to have settled.", "correctAnswer":"Mt. Ararat"}, 
        {"term":"This was the leaser of Al-Quida; attacked on 9/11", "correctAnswer":"Osama bin Laden"},
		{"term":"This was the dictator of Iraq.", "correctAnswer":"Saddam Hussein"},
        {"term":"This man believed that love and peace wiukd prevail over violence.", "correctAnswer":"Gandhi"}	
    ];	
	
    var worldGeoUnit31 = [
        {"term":"This is China's political party that came to power after the revolt on 9/11.", "correctAnswer":"Nationalist Party"}, 
        {"term":"is was the first communist leader if China; formed great lead foward and great cultural revolution.", "correctAnswer":"Mao Zedong"},
		{"term":"This was when collective farmers were put into communes.", "correctAnswer":"Great Leap Forward"},
        {"term":"This smashed the old orders and established a new socialist society.", "correctAnswer":"Great Cultural Revolution"}, 
        {"term":"These were radical young men and women; enforced policies of the Great Cultural Revolution.", "correctAnswer":"Red Guards"},
		{"term":"Old habits, old ideology, old thought, old customs", "correctAnswer":"Four Olds"},
        {"term":"This man became the leader after Mao Zedong; came up with the 4 modernizations.", "correctAnswer":"Deng Xioping"}, 
        {"term":"improve agriculture, industry, science/technology, and defense ", "correctAnswer":"Four Modernizations"},
		{"term":"This was how the government rented farmland to families, and in return, farmers gave produce to goverment.", "correctAnswer":"Contract Responsibility System"},
		{"term":"This dominates the Southwest region of China(14000 ft).", "correctAnswer":"Plateau of Tibet"},
        {"term":"Most populous nation in the world", "correctAnswer":"China"}, 
        {"term":"This policy was set up to reward familes with money and better jobs for keeping down the population.", "correctAnswer":"1 child policy"},
		{"term":"3 religions of China", "correctAnswer":"Buddhism, Daoism, and Confucianism"}		
    ];	
	
    var worldGeoUnit1 = [
        {"term":"Sound Navigation And Ranging", "correctAnswer":"SONAR"}, 
        {"term":"What is the study of population?", "correctAnswer":"Demography"},
		{"term":"This is the Imaginary line that runs east to west and splits earth into Northern and Southern hemispheres.", "correctAnswer":"Equator"},
        {"term":"This is the Imaginary line that runs north to south and splits earth into West and East hemispheres; Passes through Greenwich (0 degrees).", "correctAnswer":"Prime Meridian"}, 
        {"term":"This is the spinning of earth on its axis (24 hours).", "correctAnswer":"Rotation"},
		{"term":"This is the movement of earth around the sun(365 days).", "correctAnswer":"Revolution"},
        {"term":"5 Themes of Geography", "correctAnswer":"Location, place, movement, human/environment interaction, and region"}
    ];
	
    var worldGeoUnit2 = [
        {"term":"This is Canada's banking and financial center.", "correctAnswer":"Toronto"}, 
        {"term":"English and French", "correctAnswer":"Official language of Canada"},
		{"term":"The United States in the ___ largest country in terms of area.", "correctAnswer":"4th"},
        {"term":"The Unites States population is around __.", "correctAnswer":"323 million"}, 
        {"term":"This is where congress meets in the United States.", "correctAnswer":"Capitol Building"},
		{"term":"These are the natives if Canada who live in the northern territories.", "correctAnswer":"Inuits"},
        {"term":"The is the elimintation of teriffs(taxes) between Canada and the US", "correctAnswer":"Free Trade Agreement"}, 
        {"term":"This is the elimination of terrifs(taxes) between Canada, the US, and Mexico.", "correctAnswer":"North American Free Trade Agreement"},
		{"term":"This is the total value of goods produced and services provided by a country during one year.", "correctAnswer":"Gross National Product"},		
    ];	
	
    var worldGeoUnit3 = [
        {"term":"This is the capital of Aztec empire", "correctAnswer":"Tenochtitlan"}, 
        {"term":"This is the Wealthiest Latin American country", "correctAnswer":"Argentina"},
		{"term":"Brazil is the ______ largest country in area in the world.", "correctAnswer":"5th"},
        {"term":"This is the dry cold region of Argentiba and Chile that is south of the Pampas (there is a clothing brand named after this).", "correctAnswer":"Patagonia"}, 
        {"term":"This is a narrow strip of land with water on both sides. It connects 2 larger bodies of land.", "correctAnswer":"Isthmus"},
		{"term":"This is a person of European/Spanish and Native American descent.", "correctAnswer":"Mestizos"},
        {"term":"This is a person of European/Spanish and African descent.", "correctAnswer":"Mullatoes"}
    ];	
	
    var worldGeoUnit5 = [
        {"term":"Europe is ______% of the world’s landmass.", "correctAnswer":"3%"}, 
        {"term":"This allows citizens and news media to say what they want without fear of government persecution.", "correctAnswer":"Glasnost"},
		{"term":"This was the French emperor who invaded Russia", "correctAnswer":"Napoleon"},
        {"term":"This man believed that in order to achieve social equality, land and business should be owned by people in common.", "correctAnswer":"Karl Marx"}, 
        {"term":"This is the smallest country in the world.", "correctAnswer":"Vatican City"},
		{"term":"2 Houses of Parliament in England", "correctAnswer":"House of Commons, House of Lords"},
        {"term":"___ is the world’s largest country by area", "correctAnswer":"Russia"}		
    ];	
	
     var worldGeoUnit7 = [
        {"term":"There are _____ official languages spoken in South Africa.", "correctAnswer":"11"}, 
        {"term":"This links the Mediteranean Sea and the Red Sea.", "correctAnswer":"Suez Canal"},
		{"term":"This is the longest river in the world.", "correctAnswer":"Nile River"},
        {"term":"This was the first black president in South Africa", "correctAnswer":"Nelson Mandela"}, 
        {"term":"This is the land between the 2 branches of the Nile River.", "correctAnswer":"Nile Delta"},
		{"term":"This is the Egyptian process of preserving bodies.", "correctAnswer":"Mummification"}		
    ];
    
return {      
    
            //return requested test
            getData: function(test){
                //if(test = MSChp6)
                  //  return MSChp6;
                switch(test){

                    case "worldGeoUnit1":

                        return worldGeoUnit1;

                    case "worldGeoUnit2":

                        return worldGeoUnit2;	

					case "worldGeoUnit3":

                        return worldGeoUnit3;				
						
                    case "worldGeoUnit5":

                        return worldGeoUnit5;
						
                    case "worldGeoUnit7":

                        return worldGeoUnit7;

                    case "worldGeoUnit8":

                        return worldGeoUnit8;	

					case "worldGeoUnit31":

                        return worldGeoUnit31;				
						
                    case "worldGeoUnit32":

                        return worldGeoUnit32;						

                    case "worldGeoUnit34":

                        return worldGeoUnit34;	
                       

                }
                
            }
    
        }//end of the return
});