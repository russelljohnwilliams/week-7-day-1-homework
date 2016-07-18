window.onload = main;

quoteList = [
{quote: "Visual Basic is the way forward, I don't know why we are doing JavaScript" , author: "Jay Chetty"},
{quote: "The only CSS you need to know is background-color: tomato", author: "Rick"},
{quote: "I used the jQuery diet plugin and lost 10kg in a week", author: "Keith"}
]

function main(){
  var ul = document.getElementById( 'quote-list' );
  for(var i = 0; i < quoteList.length; i++) {
    var li = document.createElement( 'li' );
    li.innerText = "\n" + quoteList[i].quote + " - " + quoteList[i].author;
    ul.appendChild( li )
  }

  var btn = document.getElementById('add-button');
  btn.onclick = handleClick;

  var form = document.getElementById( 'quote-form' );
  form.onsubmit = function( event ){
    event.preventDefault();
    handleClick();
  }
}

function handleClick(){
  var quote = document.getElementById( 'quote-text-input' )
  var quoteValue = quote.value;

  var author = document.getElementById( 'author-text-input' )
  var authorValue = author.value;

  userInput = {quote: quoteValue, author: authorValue}
  appendQuote( userInput );
  quote.value = '';
  author.value = '';
  // addToArray(userInput)
}

function appendQuote(userInput){
  var li = document.createElement( 'li' );
  li.innerText = userInput.quote + " - " + userInput.author;
  // console.log( li );

  var ul = document.getElementById( 'quote-list' );
  ul.appendChild( li );
  
}

// function addToArray(userInput){
// quoteList.push(userInput)
// console.log(quoteList[3])
// }




