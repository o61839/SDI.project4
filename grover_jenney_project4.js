//alert("JavaScript works!");

/*	Jenney Grover
	SDI 1305
	Project 4
	May 30, 2013
*/

//strings (5)

//(1) Does a string follow a 123-456-7890 pattern like a phone number? 
//works
function phonenumber(myPhoneNumber) {   
	var end 	= myPhoneNumber.indexOf("-"),  
		end1 	= myPhoneNumber.lastIndexOf("-"), 
		end2 	= myPhoneNumber.length,
		start 	= 0,
		start1	= myPhoneNumber.indexOf("-") + 1,
		start2 	= myPhoneNumber.lastIndexOf("-") + 1,
		setOne = myPhoneNumber.substring(start, end),
		setTwo = myPhoneNumber.substring(start1, end1),
		setThree = myPhoneNumber.substring(start2, end2)
	; 
	if (setOne.length == 3){
		if (setTwo.length == 3){
			if (setThree.length == 4) {
				return true;   
			}
		}
	} else {
		return false;  
	} return phonenumber; 
}; 
console.log(phonenumber("605-350-6398") + " This is the answer for Strings #1."); 
console.log(phonenumber("6184-444-1212") + " This is the other answer for Strings #1.");


//(2) Does a string follow an aaa@bbb.ccc pattern like an email address? 
//works! 
function email(addy){
	var startAddy	= 0 
		startComp	= addy.indexOf("@") + 1,
		startExten	= addy.indexOf(".") + 1,
		symbolAt 	= addy.indexOf("@"),
		symbolDot	= addy.indexOf("."),
		emailName	= addy.substring(startAddy, symbolAt), 
		emailComp	= addy.substring(startComp, symbolDot), 
		emailExten	= addy.substring(startExten, addy.length)
	;
	if (emailName.length >= 1){
		if (emailComp.length >= 1){
			if (emailExten.length >= 2) {
				if (symbolAt !== -1) {
					if (symbolDot !== -1) {
						return true;
					}
				}
			}
		}
	} else {
		return false;  
	} return email; 
}; 
console.log(email("605-350-6398") + " This is the answer for Strings #2."); 
console.log(email("jenjo@q.ca") + " This is the other answer for Strings #2."); 

//(3) Is the string a URL? (Does it start with http: or https:?
//works
function isThisURL (string){
	var webBeginOne = string.substr(0, 7); 
	var webBeginTwo = string.substr(0, 8); 
	if (webBeginOne === "http://") {
		return true; 
	} else if (webBeginTwo === "https://" ){
		return true; 
	} else {
		return false; 
	}
};
console.log(isThisURL("http://www.yahoo.com") + " This is option 1 for question 3 in Strings.");
console.log(isThisURL("https://www.capitalone.com") + " This is option 2 for question 3 in Strings.");
console.log(isThisURL("google.com") + " This is option 3 for question 3 in Strings.");

//(4) Title-case a string (split into words, then uppercase the first letter of each word. 

var titleCase = function(quote){
	var quoteWithTitleCase = [];  
	var quoteString = quote.split(" "); 
	
	for (var i = 0; i < quoteString.length; i++) {
		var wordList = quoteString[i].charAt(0);
		var wordTitleCase = wordList.toUpperCase();
		var elementQuote = quoteString[i].replace(wordList, wordTitleCase);
		quoteWithTitleCase.push(elementQuote);
	};
	
		return quoteWithTitleCase.join(" ");
};
console.log(titleCase("I wish you the best!") + " This is the answer to question 4 in Strings."); 

/*var titleCase = function(phrase) {
    
        var titleCaseWord = [];
        var titleSplit = phrase.split(" ");

        for (var i = 0; i < titleSplit.length; i++){
            var capLetter = titleSplit[i].charAt(0);
            var capitalLetter = capLetter.toUpperCase();
            var lowLetter = titleSplit[i].slice(1)
            var lowerLetters = lowLetter.toLowerCase();
            titleCaseWord.push(capitalLetter + lowerLetters);
        };

        return titleCaseWord.join(" ")
    
};
console.log(titleCase("I wish you the best!"));  
*/   
//(5) Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a, b, c" + "," + "/" -> "a/b/c"
//works BUT...how to loops this? hmmm
function findReplace(string, symbOne, symbTwo) {
	var newString = string.replace(symbOne, symbTwo)
	var newNewString = newString.replace(symbOne, symbTwo)
	return newNewString; 
};
console.log(findReplace("apple,orange,banana", ",", "/") + " This is the answer for question 5 in Strings."); 

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
//works
var myBirthday = new Date(1977, 03, 17); //April 17, 1977
var todaysDate = new Date(2013, 04, 30); //May 30, 2013
function getAge(elapsedTime) {
	var elapsedTime = todaysDate - myBirthday;
	var millisecondsPerYear = 31536000000; 
	var myAge = elapsedTime/millisecondsPerYear; 
	console.log("I am " + myAge.toFixed(2) + " years old!"); 
	return "This is the answer for Numbers Question 3 using a function. Try #1."
}; 
console.log(getAge()); 

var myNewJob = new Date (2013, 05, 17); //June 17, 2013
var todaysDate = new Date (2013, 04, 30); //May 30, 2013  
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
//works
//function findNextValue (myNumbers, goalNumb) {}:
var numberItems = [15, 25, 37, 26, 104, 8, 2]
numberItems.sort(function (a, b) {
	return (a-b); 
}); 
console.log(numberItems);
console.log("this is the first part of the answer to question 1 Arrays");
function getNextNumber(numberItems, value) {
    for (var i=0; i < numberItems.length; i++)
        if (numberItems[i] > value)
            return numberItems[i];
} 
console.log(getNextNumber(numberItems, 36)); 
//should return 37
console.log("this is the answer to question 1 Arrays"); 


//(2)find the total value of just the numbers in an array, even if some of the items are not numbers. 
//QUESTION: This works but it also adds in "15" instead of leaving it as a string. Why? 
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
//this sorts items in an array
//QUESTION: does not sort correctly. Why?  
var itemsAnimals = ["dogs", "cats", "apples", "horses", "skinks", "pigs"]; 
itemsAnimals.sort(function (a, b) {
	return (a-b); 
}); 
console.log(itemsAnimals); 
console.log("this is option 1 for question 3 of Arrays"); 

//this sorts an array of objects
//QUESTION: This works but does not sort correctly, what am I doing wrong???
var items = [{a:2}, {a:3}, {b:14}, {a:1}, {b:1}, {a:15}]; 
items.sort(function (a, b) {
	return (a-b); 
}); 
//should be {a:1}, {a:2}, {a:3}, {a:15}, {b:1}, {b:14}
console.log(items);
console.log("this is option 2 for question 3 of Arrays"); 