// event listener to respond to "Show another quote" button clicks

// when user clicks anywhere on the button, the "printQuote" function is called

//quote 1 "The artist is nothing without the gift, but the gift is nothing without work."- Emile Zola (1840-1902)
//quote 2 "Don't stay in bed, unless you can make money in bed."- George Burns (1896-1996)
//quote 3 "Try to learn something about everything and everything about something."- Thomas Henry Huxley (1825-1895)
//quote 4 "Some cause happiness wherever they go; others, whenever they go."- Oscar Wilde (1854-1900)
//quote 5 "I have not failed. I've just found 10,000 ways that won't work."- Thomas Alva Edison (1847-1931)
//quote 6 "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth."- Sherlock Holmes (by Sir Arthur Conan Doyle, 1859-1930)

var quotes = [
//quotes[0]
{
quote : "The artist is nothing without the gift, but the gift is nothing without work.", //quote string
source : "Emile Zola", //list the source or author in string form
citation : null,
year : null,
},
//quotes[1]
{
quote : "Don't stay in bed, unless you can make money in bed.", //quote string
source : "George Burns", //list the source or author in string form
citation : null,
year : null,
},
//quotes[2]
{
quote : "Try to learn something about everything and everything about something.", //quote string
source : "Thomas Henry Huxley", //list the source or author in string form
citation : null,
year : null,
},
//quotes[3]
{
quote : "Some cause happiness wherever they go; others, whenever they go.", //quote string
source : "Oscar Wilde", //list the source or author in string form
citation : null,
year : null,
},
//quotes[4]
{
quote : "I have not failed. I've just found 10,000 ways that won't work.", //quote string
source : "Thomas Alva Edison", //list the source or author in string form
citation : null,
year : null,
},
//quotes[5]
{
quote : "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.", //quote string
source : "Sherlock Holmes", //list the source or author in string form
citation : null,
year : null,
},
//quotes[6]
//{
//quote : "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.", //quote string
//source : "Sherlock Holmes", //list the source or author in string form
//citation : "", //citation string
//year : int, // cite the year of the saying in numerical form
//},

];

document.getElementById('loadQuote').addEventListener("click", printQuote, false);



function getRandomQuote(){
	//iterate through the quotes array and return each of the key value pairs in the objects
	var i = Math.floor( Math.random() * quotes.length );
	//return a randomly selected quote object
	//alert(quotes[i].quote);
	//console.log(quotes.length);
	//console.log(quotes[i]);
	return quotes[i];	
}

function printQuote(){

var fullQuote = getRandomQuote();

var quoteText = '<p class="quote">' + fullQuote.quote + '</p><p class="source">' + fullQuote.source + '<span class="citation">' + fullQuote.citation + '</span><span class="year">' + fullQuote.year + '</span></p> ';
console.log(quoteText);
document.getElementById('quote-box').innerHTML = quoteText;
//iterate through a new array of colors to alter the screen everytime it changes
}

