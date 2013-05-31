//alert("JavaScript works!");

/*	Jenney Grover
	SDI 1305
	Project 4
	May 30, 2013
	Library of Functions
*/

var myLibrary = function(){
	
	//Strings (1) Does a string follow a 123-456-7890 pattern like a phone number? 
	var checkPhoneNumber = function (myPhoneNumber){   
		var end 	= myPhoneNumber.indexOf("-"),  
			end1 	= myPhoneNumber.lastIndexOf("-"), 
			end2 	= myPhoneNumber.length,
			start 	= 0,
			start1	= myPhoneNumber.indexOf("-") + 1,
			start2 	= myPhoneNumber.lastIndexOf("-") + 1,
			setOne = myPhoneNumber.substring(start, end),
			setTwo = myPhoneNumber.substring(start1, end1),
			setThree = myPhoneNumber.substring(start2, end2) // MAKE UP: Project 2 variable names descriptive
		; 
		if (setOne.length == 3){
			if (setTwo.length == 3){
				if (setThree.length == 4) {
				return true;   
				}
			}
		} else {
				return false;  
		}; 
	}; //end Strings (1)
	
	//Strings (2) Does a string follow an aaa@bbb.ccc pattern like an email address?
	var checkEmail = function (addy){
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
		}; 
	};//end Strings (2)
	
	//Strings (3) Is the string a URL? (Does it start with http: or https:?
	var isThisUrl = function (string){
		var webBeginOne = string.substr(0, 7); 
		var webBeginTwo = string.substr(0, 8); 
		if (webBeginOne === "http://") { // MAKE UP: project 1 string conditionals. 
			return true; 
		} else if (webBeginTwo === "https://" ){
			return true; 
		} else {
			return false; 
		}//MAKE UP: Project 2 Boolean Logic
	};

	//Strings (4) Title-case a string (split into words, then uppercase the first letter of each word. 
	var titleCase = function(quote){
		var quoteWithTitleCase = [];  
		var quoteString = quote.split(" "); 
		
		for (var i = 0; i < quoteString.length; i++) {
			var wordList = quoteString[i].charAt(0);
			var wordTitleCase = wordList.toUpperCase(); //MAKE UP: Project 2 array method
			var elementQuote = quoteString[i].replace(wordList, wordTitleCase);
			quoteWithTitleCase.push(elementQuote);
		};
	
		return quoteWithTitleCase.join(" "); //MAKE UP: project 3 procedure. 
	};
	
	//Strings (5) Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a, b, c" + "," + "/" -> "a/b/c"
	//works BUT...how to loops this? 
	//hmmm -- okay now I put in a loop, but it stops after the first one. 
	//It doesn't keep looping. Thank you for the email suggestion of placing the return differently. 
	//However that didn't work either. 
	//you can see the other tries in the other .js file
	var findReplace = function(string, symbOne, symbTwo) {
		var newString = string.replace(symbOne, symbTwo)
		var newNewString = newString.replace(symbOne, symbTwo)
		return newNewString; 
	};
	
	//Numbers (1) Format a number to use a specific number of decimal places, as for one: 2.1 -> 2.10
	var changeDecimal = function (amount, decimal) {
		var amount = amount.toFixed(decimal); 
		return amount; 
	};
	
	//Numbers (2)fuzzy-match a number: is the number above or below a number within a certain percent? 
	var numberMatch = function (numb1, numb2, numb3) {
		if (numb1 < numb2) {
			var differance = numb2 - numb1; 
			var percentage = numb1 / numb2; 
			if (percentage <= numb3) {
				var results = true; 
			} else {
				var results = false;  
			}
		} return results;
	};
	
	//Numbers (3)find the number of hours or days difference between two dates
	//years - past
	var getYear = function (datePast, todaysDate) {
		var elapsedTime = todaysDate - datePast;
		var millisecondsPerYear = 31536000000; 
		var thisYear = elapsedTime/millisecondsPerYear; 
		var years = thisYear.toFixed(2); 
		return years;
	}; 
	//days - future
	var getDays = function (futureDate, currentDate) {
		var elapsedTime = futureDate - currentDate;
		var millisecondsPerDay = 86400000; 
		var daysToNewJob = elapsedTime/millisecondsPerDay; 
		var futureDays = Math.ceil(daysToNewJob); 
		return futureDays;
	}; //MAKE UP: Project 3 coding/encapsulation, coding/logic

	//Numbers (4) given a string version of a number such as "42", return the value as ann actual Number, such as 42. 
	var evalString = function(stringFour) {
		if (isNaN(stringFour) === false) {
			var number = eval(stringFour); 
		} else {
			var number = "This is not a number. Please try again."; 
		}
		return number;  
	};
	
	//Arrays (1) find the smallest value in an array that is greater than a given number
	var nextNumber = function nextNumber(sortedItems, value) {
		var values = []
		for (var i=0; i < sortedItems.length; i++)
			if (sortedItems[i] > value) {
				values.push(sortedItems[i])
				values.sort (function (a, b) {
				return (a-b);
				});
		} return values[0];
	};

	
	//Arrays (2)find the total value of just the numbers in an array, even if some of the items are not numbers. 
	var totalArray = function myTotalDogs(myDogs){
		var total = 0
		for(var i = 0; i < myDogs.length; i++){
 			if(typeof myDogs[i] != "string") {//I did get help with my syntax for the typeof. It didn't work for me yesterday. 
  			total += myDogs[i];
 			}
 		} return total;
	}; 
	
	//arrays (3) given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2}, {a:3}, {a:1}] -> [{a:1}, {a:2}, {a:3}] 
	//this sorts items in an array 
	var itemsOnTable = function (items, sortKey) {
		var sortItems = items
		sortItems.sort(function(a, b){
			return a[sortKey]-b[sortKey];
		});
		return sortItems
	};

	//this sorts an array of objects
	var sortArray = function (inputItems, sortKey) {
		var itemsSort = inputItems
	
		itemsSort.sort(function(a, b) {
			return a[sortKey] - b[sortKey];
		});
		return itemsSort //MAKE UP: Project 3 return object and argument object
	};


	//return of the functions to be used outside of the library. 
	return {
		"checkPhoneNumber": checkPhoneNumber,
		"checkEmail": 		checkEmail,
		"isThisUrl": 		isThisUrl, 
		"titleCase": 		titleCase, 
		"findReplace":		findReplace,
		"changeDecimal":	changeDecimal,
		"numberMatch":		numberMatch,
		"getYear":			getYear,
		"getDays":			getDays, 
		"evalString":		evalString,
		"nextNumber":		nextNumber,
		"totalArray":		totalArray,
		"itemsOnTable":		itemsOnTable,
		"sortArray":		sortArray
	}
}; // end library

// main code
var newLib = new myLibrary(); 
console.log("Is this a phone number? " + newLib.checkPhoneNumber("605-350-6398")); 
console.log("Is this a phone number? " + newLib.checkPhoneNumber("6184-444-1212"));
console.log("Is this an email? " + newLib.checkEmail("605-350-6398")); 
console.log("Is this an email? " + newLib.checkEmail("jenjo@q.ca"));
console.log("Is this a URL? " + newLib.isThisUrl("http://www.yahoo.com"));
console.log("Is this a URL? " + newLib.isThisUrl("https://www.capitalone.com"));
console.log("Is this a URL? " + newLib.isThisUrl("google.com"));
console.log("Does This Show Title Case? " + newLib.titleCase("I wish you the best!")); 
console.log("Did this replace the connectors? " + newLib.findReplace("apple,orange,banana", ",", "/"));
console.log("This should have two decimal places " + newLib.changeDecimal(165.123563, 2) + ".");
console.log("Is this a fuzzy match within 50%? " + newLib.numberMatch(2, 4, .50));
console.log("Is this a fuzzy match within 50%? " + newLib.numberMatch(20, 25, .50)); 
console.log("How many years has it been? " + newLib.getYear(new Date(1977, 03, 17), new Date(2013, 04, 30)) + " years.");
console.log("How many days until? " + newLib.getDays(new Date(2013, 05, 17), new Date(2013, 04, 30)) + " days to go.");
console.log("What number is this? " + newLib.evalString("15"));
console.log("What number is this? " + newLib.evalString("We are alive!"));
console.log("What number is next in line? " + newLib.nextNumber([15, 25, 37, 26, 104, 8, 2], 36));
console.log("What is the total of this array? " + newLib.totalArray([12, "15", 13, "Lab", 18]));
//console.log("Is this sorted? " + newLib.itemsOnTable(["paper", "pencil", "milk", "plate", "fork", "spoon", "card", "purse", "dog"], "a"));
console.log(newLib.sortArray([{a:2}, {a:3}, {a:14}, {a:1}, {a:100}, {a:15}], "a"));
 
