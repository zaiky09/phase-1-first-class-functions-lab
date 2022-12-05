//SOLUTION

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers (){
    return drivers.slice(0,2)
}
const drivers2 = ['Antonia', 'Nuru', 'Amari', 'Mo']
function returnLastTwoDrivers (){
    return drivers2.slice(-2)
}
 const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

 const createFareMultiplier = function multiplier(num1 =2){
   return function (num2=5){
    return num1 * num2
    
   }

    
  }
  function fareDoubler(num01) {
    return num01 *2
    
  }
 function fareTripler (num02){
    return num02 * 3

 }

 const selectDifferentDrivers = function (drivers, fn) {
    return fn(drivers);
  };
