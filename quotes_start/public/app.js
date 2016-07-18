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
    li.innerText = "\n" + "'" + quoteList[i].quote + "'" + " - " + quoteList[i].author;
    ul.appendChild( li )
  }

  var btn = document.getElementById('add-button');
  btn.onclick = handleClick;
}

function handleClick(){
  var quote = document.getElementById( 'quote-text-input' )
  var quoteValue = quote.value;
  console.log(quoteValue)

  var author = document.getElementById( 'author-text-input' )
  var authorValue = author.value;
  console.log(authorValue)

  userInput = {quote: quoteValue, author: authorValue}
  console.log(userInput)

  addToArray( userInput );
  quote.value = '';
  // console.log(userInput)
}

function addToArray(userInput){
quoteList.push(userInput)
console.log(quoteList[3])
}






// function appendquote(userInput){
//   var li = document.createElement( 'li' );
//   li.innerText = userInput;

//   var ul = document.getElementById( 'film-list' );
//   ul.appendChild( li )
// }