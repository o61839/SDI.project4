//alert("JavaScript works!");

//Jenney Grover
//SDI 1305
//Project 4
//May 30, 2013

//strings

//Does a string follow a 123-456-7890 pattern like a phone number? 
/*var myPhoneNumber = 605-350-6398
function phonenumber(myPhoneNumber)  
{  
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
  if(myPhoneNumber.value.match(phoneno))  
     {  
       return true;         
     }  
   else  
     {  
       alert("Not a valid Phone Number");  
       return false;  
     }  
}  
console.log(phonenumber(myPhoneNumber)); //myPhoneNumber.value.match not defined???
*/

//Does a string follow an aaa@bbb.ccc pattern like an email address? 
//Is the string a URL? (Does it start with http: or https:?
//Title-case a string (split into words, then uppercase the first letter of each word. 
//Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a, b, c" + "," + "/" -> "a/b/c"

//Numbers

//Format a number to use a specific number of decimal places, as for one: 2.1 -> 2.10
//works
var costOfShoes = 15.98761;
console.log(costOfShoes.toFixed(2)); 

//fuzzy-match a number: is the number above or below a number within a certain percent? 

//find the number of hours or days difference between two dates
/*var myBirthday = new Date(1977, 03, 17); //April 17, 1977
var todaysDate = new Date(2013, 04, 26); //May 26, 2013
var elapsedTime = todaysDate - myBirthday; 
	//var myAge = elapsedTime.getFullYear(); 
console.log(elapsedTime); */ 
/*var myNewJob = new Date (2013, 05, 17); //June 17, 2013
var todaysDate = new Date (2013, 04, 26); //May 26, 2013
var elapsedTime = myNewJob - todaysDate; 
var days = elapsedTime.getDays(); 
console.log(elapsedTime);*/

//given a string version of a number such as "42", return the value as ann actual Number, such as 42. 
//works
var stringOne = "15 + 15"; 
var stringTwo = "156243"; 
console.log(eval(stringOne)); 
console.log(eval(stringTwo.valueOf())); 


//arrays

//find the smallest value in an array that is greater than a given number
//find the total value of just the numbers in an array, even if some of the items are not numbers. 
var total = 0;
var myDogs = [12, "15px", 13, "21ab", 18];
var myTotalDogs = function(myDogs){
	for(var i = 0; i < myDogs.length; i++){
 		var thisVal = parseInt(myDogs[i]);
 		if(!isNaN(thisVal)){
  			total = thisVal;
 		}
 	}
}; 
console.log(myTotalDogs); 

//given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2}, {a:3}, {a:1}] -> [{a:1}, {a:2}, {a:3}] 
var items = ["réservé", "premier", "cliché", "communiqué", "café" ,"adieu"];
items.sort(function (a, b) {
    return a.localeCompare(b);
});
// items is [ 'adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé' ]
console.log(items); 
