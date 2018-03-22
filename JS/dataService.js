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
        {"term":"A large molecule that is formed by more then 5 ????", "correctAnswer":"Polymer"}
    ];  
    
return {      
    
            //return requested test
            getData: function(test){
                switch(test){
                    case "scienceChp5":
                        return scienceChp5;
                }
                
            }
    
        }//end of the return
});