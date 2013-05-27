//alert("JavaScript works!");

//Jenney Grover
//SDI 1305
//Project 4
//May 30, 2013

//strings (5)

//(1) Does a string follow a 123-456-7890 pattern like a phone number? 
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

//(2) Does a string follow an aaa@bbb.ccc pattern like an email address? 
//(3) Is the string a URL? (Does it start with http: or https:?
//(4) Title-case a string (split into words, then uppercase the first letter of each word. 
//(5) Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a, b, c" + "," + "/" -> "a/b/c"

//Numbers (4)

//(1) Format a number to use a specific number of decimal places, as for one: 2.1 -> 2.10
//works
var costOfShoes = 15.98761;
console.log(costOfShoes.toFixed(2) + " This is answer to Numbers Question 1. Try #1"); 
function dollarAmount(amount, decimal) {
	console.log(amount.toFixed(decimal)); 
	return "This is answer to Numbers Question 1. Try #2"; 
};
console.log(dollarAmount(165.123563, 2)); 
//QUESTION: Why do I always get an "undefined" after my function runs? Is it because I didn't return something? I added the return string and "undefined" disappeared. 

//(2)fuzzy-match a number: is the number above or below a number within a certain percent? 
//works
var fuzzyMatchTrio = [2, 4, 50]; 
function numberMatch(numb1, numb2, numb3) {
	if (numb1 < numb2) {
		var differance = numb2 - numb1; 
		var percentage = numb1 / numb2; 
		if (percentage <= numb3) {
			console.log(true); 
		} else {
			console.log(false); 
			}
		} return "This is answer to Numbers Question 2.";
};
console.log(numberMatch(2, 4, .50));
console.log(numberMatch(20, 25, .50));   


//(3)find the number of hours or days difference between two dates
var myBirthday = new Date(1977, 03, 17); //April 17, 1977
var todaysDate = new Date(2013, 04, 26); //May 26, 2013
function getAge(elapsedTime) {
	var elapsedTime = todaysDate - myBirthday;
	var millisecondsPerYear = 31536000000; 
	var myAge = elapsedTime/millisecondsPerYear; 
	console.log("I am " + myAge.toFixed(2) + " years old!"); 
	return "This is the answer for Numbers Question 3 using a function. Try #1."
}; 
console.log(getAge()); 

var myNewJob = new Date (2013, 05, 17); //June 17, 2013
var todaysDate = new Date (2013, 04, 27); //May 27, 2013  
function getDays(elapsedTime) {
	var elapsedTime = myNewJob - todaysDate;
	var millisecondsPerDay = 86400000; 
	var daysToNewJob = elapsedTime/millisecondsPerDay; 
	console.log("I have " + daysToNewJob.toFixed(2) + " days until my new job starts!"); 
	return "This is the answer for Numbers Question 3 using a function. Try #2."
}; 
console.log(getDays());

//(4)given a string version of a number such as "42", return the value as ann actual Number, such as 42. 
//works
var stringOne = "15 + 15"; 
var stringTwo = "156243"; 
console.log(eval(stringOne) + " This is the answer to Numbers Question 4. Try #1"); 
console.log(eval(stringTwo.valueOf()) + " This is the answer to Numbers Question 4. Try #2"); 
function evalString (stringThree) {
	console.log(eval(stringThree)); 
	return "This is the answer to Numbers Question 4 using a function"; 
};
function evalString2 (stringFour) {
	if (isNaN(stringFour) == false) {
		console.log(eval(stringFour)); 
	} else {
		console.log(isNaN(stringFour) + "ly this is not number."); 
	}
	return "This is the answer to Numbers Question 4 using a function & a conditional"; 
};
console.log(evalString("(25 + 5)/3")); 
console.log(evalString2(54 + 45)); 
console.log(evalString2("We are alive!")); 

//arrays (3)

//(1)find the smallest value in an array that is greater than a given number
//function findNextValue (myNumbers, goalNumb) {}:

//(2)find the total value of just the numbers in an array, even if some of the items are not numbers.
//works EXCEPT it counts the string "15" as number 15.  
function myTotalDogs(myDogs){
	var myDogs = [12, "15", 13, "Lab", 18];
	var total = 0
	for(var i = 0; i < myDogs.length; i++){
 		var thisAddition = parseInt(myDogs[i]);
 		if(!isNaN(thisAddition)){
  			total += thisAddition;
 		}
 	}
 	console.log(total); //it should only be 43
 	return "This is the answer to Arrays Question 2 using a function";
}; 
console.log(myTotalDogs()); 

//(3)given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2}, {a:3}, {a:1}] -> [{a:1}, {a:2}, {a:3}] 
var items = ["réservé", "premier", "cliché", "communiqué", "café" ,"adieu"];
items.sort(function (a, b) {
    return a.localeCompare(b);
});
// items is [ 'adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé' ]
console.log(items); 
