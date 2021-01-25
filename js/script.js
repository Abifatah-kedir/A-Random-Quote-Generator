/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote :"The surest sign that intelligent life exists elsewhere in the universe is that it has never tried to contact us.",
    source: "Bill Watterson",
    citation: "keepinspiring",
    year: 2010
  },
  {
    quote :"I destroy my enemies when I make them my friends.",
    source: "Abraham Lincoln",
    citation: "life hack",
    year:2020
  },
  {
    quote :"The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    citation: "your positiveoasis",
    year:2019
  },
  {
    quote :"You cannot save people, you can just love them .",
    source: "Anaïs Nin",
    citation: "lifehack",
    year:2009
  },

  {
    quote :"Try not to become a person of success, but rather try to become a person of values.",
    source: "Albert Einstein",
    citation: "yourpositiveoasis ",
    year:2000
  },
  {
    quote :"Before you judge a man, walk a mile in his shoes. After that who cares?… He’s a mile away and you’ve got his shoes!.",
    source: "Billy Connolly",
    citation: "keepinspiring",
    year:2010
  }
];

const randomColor = ["#1c5b6d", "#8fa884", "#a4d82", "#325740", "#082423", "#31437c"];


/***
 * `getRandomQuote` function
***/

const getRandomQuote = ()=>{
  return Math.floor(Math.random() * quotes.length);
}

const quoteLoader = document.getElementById('load-quote');
const theContainer= document.querySelector(".container");

const printQuote = (array)=> {

  theContainer.style.backgroundColor = `${randomColor[getRandomQuote()]}`;

  let randomqQuote = document.getElementById("quote-box");
  randomqQuote.innerHTML  = `<p class="quote">${quotes[array].quote}</p>
                              <p class="source"> ${quotes[array].source} 
                                <span class="citation">${quotes[array].citation}</span>
                                <span class="year">${quotes[array].year} </span>
                              </p>`
                
}

printQuote(getRandomQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote(getRandomQuote()), false);
quoteLoader.addEventListener("click", ()=> {
  setInterval("printQuote(getRandomQuote())", 3000);
});







