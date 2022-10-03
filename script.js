
var api = "https://api.quotable.io/random?tags=famous-quotes|happiness|civil-rights";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.getElementById("btn");


fetch(api)
    .then((res) => res.json())
    .then((data) => {
    quote.innerHTML = `"${data.content}"`;
    author.innerHTML = `- ${data.author}`;
    });
    
    
btn.addEventListener("click", getQuote);

    
function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `" ${data.content} "`;
      author.innerHTML = `- ${data.author}`;
    });
}
