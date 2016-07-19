window.onload = main;

quoteList = [
{quote: "With my sunglasses on, I'm Jack Nicholson. Without them, I'm fat and 60." , author: "Jack Nicolson"},
{quote: "My acting range has always been something between the two extremes of 'raises left eyebrow' and 'raises right eyebrow", author: "Roger Moore"},
{quote: "What happens after you die? - Lot's of things happen after you die... they just don't involve you", author: "Louis CK"}
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
  li.innerText = "\n" + userInput.quote + " - " + userInput.author;

  var ul = document.getElementById( 'quote-list' );
  ul.appendChild( li );
}

function deleteQuote() {
  var list = document.getElementById("quote-list");
  list.removeChild(list.childNodes[0]); 
}

// function addToArray(userInput){
// quoteList.push(userInput)
// console.log(quoteList[3])
// }




