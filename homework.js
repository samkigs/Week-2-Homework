let year = document.getElementbyId("year").value

console.log(year)
let date = document.getElementbyId("year")

console.log(date)

function getDate(){
   let date = document.getElementById("year").value

   let newDate = new Date(date);
   
   let year = newDate.getFullYear()
   let month = newDate.getMonth()
   
   


   console.log(newDate.getFullYear())
   let cc = year.slice(0,2)
   console.log(cc)
}
// get date input
// get gender input
// separate and apply the formular return digit number between -0-6
// convert our akan names into array
// male ['Kwasi', 'Kwabena', 'Kwaku']
// female ['Kwasi', 'Kwabena', 'Kwaku']
/* if male */
//use male array
// male[0] = "Kwasi"
// female
//use female array
// female[0] = "Kwasi"
//console.log("inafika")

// dateControl.value = '2017-06-01';

function validate() {

    console.log("inafika function")
    //var dateControl = document.querySelector('input[type="date"]').value;

    //get gender input



    // var input = dateControl.value
    // var dateEntered = new Date(dateControl);
   // console.log(dateControl); //prints "2017-01"


   // console.log(dateControl.valueAsNumber); // prin

    //console.log(dateEntered); // prin

   // var year = dateEntered.getFullYear()
  //  var month = dateEntered.getMonth()
  //  var day = dateEntered.getDate()

   // console.log(typeof year) + ' year ' + typeof month + 'month' + typeof day

   // var yearString = year.toString()

    // var CC = parseInt(yearString.slice(0, 2)
   // var YY = parseInt(yearString.slice(2, 4)
    // var MM = month
  //  var DD = day

 //   var dayOfTheWeek = parseInt((CC / 4) - 2*CC-1) + ((5+YY/4))

    //console.log(typeof CC)
    //console.log(Math.round(dayOfTheWeek))
   // var d = parseInt((CC/4) - 2*CC - 1) + ((5*YY/4) / 4 + ))
   // console.log(dayOfTheWeek);

   var MaleNames = ["wed", "thur", "fri", "sat", "sun", "mon", "tue"]
   var femaleNames = ["wed", "thur", "fri", "sat", "sun", "mon", "tue"]

   if (gender === "male"){
      var akanName = MaleNames[dayOfTheWeek]
      console.log(akanName)
   }
   else if (gender === "female"){
      var femaleAkan = femaleNames[dayOfTheWeek]
      console.log(femaleAkan)

   }
   else{
      console.log("too bad to choose a gender")
   }
   // console.log(name[dayOfTheWeek]);
   // alert (name[dayOfTheWeek]);
}