/*A service that use a counter to keep score and return that score. */
myApp.factory('Score', [ function () {
    
    var score = {"count":0};
    var answered = {"questionsAnswered":0};
     
     return {
         
         //add one to score.count when user gets correct answer
         addScore: function(){
             score.count+= 1;
         },
         
         //add one to score.count when user gets correct answer
         addQuestionsAnswered: function(){
             answered.questionsAnswered+= 1;            
         },
         
         //return the current score
         getScore: function(){                
               return (score.count/answered.questionsAnswered)*100;
         }
     }/*End of main Return*/
    
    
}]);
