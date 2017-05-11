var refreshPrint = setInterval(function() {printQuote();}, // Set the initial interval to call the printQuote function without clicking loadquote button
	15000); // set the interval to 10 seconds
document.getElementById('loadQuote').addEventListener("click", printQuote, false); // add event listener to respond to "Show another quote" button clicks // when user clicks anywhere on the button, the "printQuote" function is called 
var quotes = [ // declare the quotes array at the global level
//Create the array of object literals that contain the key : value pairs for quote, source, citation and year
	{ //quotes[0] // The index of the object literal in the array
		quote : "The artist is nothing without the gift, but the gift is nothing without work.", //quote string
		source : "Emile Zola", //list the source or author in string form
		tags : "Philosophy", // type of quote
		quoteNo : 1, // quote number in the array
	},
	{ //quotes[1]
		quote : "Don't stay in bed, unless you can make money in bed.",
		source : "George Burns",
		tags : "Humor",
		quoteNo : 2,
	},
	{ //quotes[2]
		quote : "Try to learn something about everything and everything about something.",
		source : "Thomas Henry Huxley",
		tags : "Inspiration",
		quoteNo : 3,
	},
	{ //quotes[3]
		quote : "Some cause happiness wherever they go; others, whenever they go.",
		source : "Oscar Wilde",
		tags : "Humor",
		quoteNo : 4,
	},
	{ //quotes[4]
		quote : "I have not failed. I've just found 10,000 ways that won't work.",
		source : "Thomas Alva Edison",
		tags : "Inspiration",
		quoteNo : 5,
	},
	{ //quotes[5]
		quote : "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
		source : "Sherlock Holmes",
		citation : "Sir Arthur Conan Doyle",
		tags : "Philosophy",
		quoteNo : 6,
	},
	{ //quotes[6]
		quote : "Those who deny freedom to others, deserve it not for themselves.",
		source : "Abraham Lincoln",
		citation : "The Collected Works of Abraham Lincoln",
		year : 1859,
		tags : "Inspiration",
		quoteNo : 7,
	},
	{ //quotes[7]
		quote: "Intelligence plus character - that is the goal of true education.", 
		source: "Martin Luther King Jr.", 
		citation: "The Purpose of Education", 
		year: 1947,
		tags : "Inspiration",
		quoteNo : 8,
	},
	
	{ //quotes[8]
		quote: "No matter how much you've done, or how successful you've been, there's always more to do, always more to learn, and always more to achieve.", 
		source: "Barack Obama",
		citation: "ASU Commencement Address",
		year : 2009,
		tags : "Inspiration",
		quoteNo : 9,
	},
	
	{ //quotes[9]
		quote: "Real artists ship.", 
		source: "Steve Jobs", 
		citation: "Apple",
		tags : "Inspiration",
		quoteNo : 10,
	},
];
function countQuoteLines() { // Create a function to check how tall a quote is. If it's too tall then reduce font size.
	var quoteHeight = document.getElementById('quote-box').firstChild.offsetHeight; // set the quote height to the height of quote paragraph, the first child of the quote-box div
	// check if the quote height is greater than a relative amount to 100% screen size to avoid ovelap with button
	if (quoteHeight >= 210) {document.getElementById('quote-box').firstChild.style.fontSize = "3rem"}
	if (quoteHeight >= 260) {document.getElementById('quote-box').firstChild.style.fontSize = "2.8rem"}
}
function getRandomQuote(){ // declare the getRandomQuote function
	var i = Math.floor( Math.random() * quotes.length ); //declare an index counting variable that calls a random number between 0 and quotes array length
	return quotes[i]; // return the quote object literal  at random index i of quotes
}
function randomBackgroundColor(){ //declare function to set random background color to rgb values between 0 "black" and 255 "white"
	var r = Math.floor(Math.random() * 255); // set the red value to a random number
	var g = Math.floor(Math.random() * 255); // set the green value to a random number
	var b = Math.floor(Math.random() * 255); // set the blue value to a random number
	document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; //change the background color of the body to a random rgb value
	if ( (r > 150 && g > 150) || (r > 150 && b > 150) || (b > 150 && g > 150) ) { document.body.style.color = "black"} else { document.body.style.color = "white"} // change the color of the text depending how light or dark the background color
}
var selectedQuotes = false; // declare a variable to start the process of pushing objects to a new array to check for repetitions		
function printQuote(){ // declare the printQuote function
	var quoteText; //declare a variable that will hold the final innerHTML result
	clearInterval(refreshPrint); //Reset the clock on printQuote interval so there is a refresh 10 seconds after button click
	var fullQuote = getRandomQuote(); // Set the returned object of the getRandomQuote function to a variable
	if (!selectedQuotes) { //If selected quotes is false, this will run the first time printQuote() is called
    	selectedQuotes = []; //declare selectedQuotes as an array
    	//console.log("selected quote.length was empty"); //a log to test quotes in console
	} else { // if selectedQuotes has at least one object
		var count = 0; // set a counter to iterate through index of selectedQuotes
        	
        	// create a loop to test if the newly returned quote already exists in the selectedQuotes array
        	do {
        		//if all unique quotes have been pushed to new array, reset the array and start over 
				if (selectedQuotes.length == quotes.length) {
					selectedQuotes = []; // reset array
					//console.log("selectedQuotes was reset to 0."); // log to check quotes in console
					break; // break the loop
				} else if (fullQuote == selectedQuotes[count]) { // if not all quotes have been used, check the new quote against array 
					fullQuote = getRandomQuote(); // if quote already has been used, return a new quote
					count = 0; // reset the counter and run the loop again
				} else {count++;} // if matching quote has not been found, continue to test the loop
			} while (count < selectedQuotes.length) // run the loop until all quotes in new array have been tested
		//console.log("we passed the loop!");	// log useful for debugging
	} 
	selectedQuotes.push(fullQuote);// push the newly tested quote to the selectedQuotes array
	quoteText = '<p class="quote">' + fullQuote.quote + '</p><p class="source">' + fullQuote.source + (fullQuote.citation ? '<span class="citation">' +  fullQuote.citation + "</span>" : '') + (fullQuote.year ? '<span class="year">' +  fullQuote.year + '</span>': '') + (fullQuote.tags ? '<span class="citation"> Tags:' + fullQuote.tags + "</span>" : '') + '</p>'; //create the html string that will replace the innerHTML, concatenate using dot nation on the quote object			
    /* some logs useful for debugging
	console.log("quote number is " + fullQuote.quoteNo);
	console.log(selectedQuotes);
	console.log("selected quotes length is now " + selectedQuotes.length);  // log the length of the selectedQuotes array
	*/
	console.log("quote is " + '"' + fullQuote.quote + '"'); // log the quote to the console
	randomBackgroundColor(); //call the randomBackgroundColor function to change background color
	document.getElementById('quote-box').innerHTML = quoteText; //change the innerHTML of the quote-box element to the randomly selected object literal
	countQuoteLines(); // test the height of the quote and modify font-size accordingly
	//console.log(document.getElementById("quote-box").style.fontSize); // useful for debugging quote height
	return refreshPrint = setInterval(function(){ printQuote(); }, 15000);// reset the refresh printQuote interval to change after 15 seconds
}
