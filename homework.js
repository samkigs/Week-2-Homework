// console.log("inafika")

// dateControl.value = "2017-06-01";

function validate (){

   console.log("inafika function")
   var dateControl = document.querySelector('input[type="date"]').value;

   //get gender input 

    var gender = "female"

    var dateEntered = new Date(dateControl);  
    console.log(dateControl); // prints "2017-06-01"

    calculateDayOfTheWeek (dateEntered)

 }

    function calculateDayOfTheWeek(dateEntered){

    var year = dateEntered.getFullYear()
    var month = dateEntered.getMonth()
    var day = dateEntered.getDate()
    
    console.log(typeof year + " year " + typeof month + " month " + typeof day + " day ")
    
    var yearString = year.toString()
    
    var CC = parseInt(yearString.slice(0,2))
    var YY = parseInt(yearString.slice(2,4))
    var MM = month
    var DD = day
    
    var dayOfTheWeek = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) )  + ((26*(MM+1)/10)) + DD ) % 7
    
    console.log(dayOfTheWeek);


 }

 function getAkan(){
    var maleNames = ("wed", "thur", "fri", "sat", "sun", "mon", "tue")
    var femaleNames = ("jumatatu", "jumanne", "jumatano", "alhamisi", "ijumaa", "jumamosi", "jumapili")
    
    if (gender === "male"){
        var akanName = maleNames[dayOfTheWeek]
        console.log(akanName)
        alert(akanName)
    
    }
    else if(gender === "female"){
        var femaleAkan = femaleNames [dayOfTheWeek]
    
        console.log(femaleAkan)
        alert(femaleAkan)
    }
    else{
        console.log("too bad choose a gender")
    }

 }