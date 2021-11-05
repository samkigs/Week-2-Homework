// console.log("inafika")

// dateControl.value = "2017-06-01";

function validate(){
    // get user date input from html form
   var dateControl = document.querySelector('input[type="date"]').value;
    // get user gender input from html form
   var gender = "male"
    // call the calculate day of the week function to get week day
   var weekDay= calculateDayOfTheWeek(dateControl)

    // get akan name from day of week and gender
    getAkan(weekDay, gender)
}

   function calculateDayOfTheWeek(dateEntered){

    // convert the date to a date object
    var dateObject = new Date(dateControl);  
    console.log(dateControl); // prints "2017-06-01"

    // get year from date object
    var year = dateObject.getFullYear()

    // get month from date object
    var month = dateObject.getMonth()
    
    //get day from date object
    var day = dateObject.getDate()
    
    console.log(typeof year + " year " + typeof month + " month " + typeof day + " day ")
    

    // converting the year to sting
    // to slice to get century and year
    var yearString = year.toString() 
    
    //get century
    var CC = parseInt(yearString.slice(0,2))

    // get year
    var YY = parseInt(yearString.slice(2,4))

    //get month
    var MM = month

    //get day
    var DD = day
    
    // apply formular to get day of week
    var dayOfTheWeek = parseInt( ( (CC/4) -2*CC-1) + ((5*YY/4) )  + ((26*(MM+1)/10)) + DD ) % 7
    
    console.log(dayOfTheWeek);

    return dayOfTheWeek


 }



 function getAkan(weekDay, gender){

    // add the akan name to arrays
    var maleNames = ("wed", "thur", "fri", "sat", "sun", "mon", "tue")
    var femaleNames = ("jumatatu", "jumanne", "jumatano", "alhamisi", "ijumaa", "jumamosi", "jumapili")
    
    // use male akan names if gender is male
    if (gender === "male"){
        var akanName = maleNames[weekDay]
        console.log(akanName)
        alert(akanName)
    
    }
    // use female akan names array if gender is female
    else if(gender === "female"){
        var femaleAkan = femaleNames [weekDay]
    
        console.log(femaleAkan)
        alert(femaleAkan)
    }
    else{
        console.log("too bad choose a gender")
    }

 }