
const btn = document.getElementById("btn");

document.querySelector('button').addEventListener('click', function() {
  btn.parentNode.removeChild(btn);
  html2canvas(document.querySelector('.specific'), {
    onrendered: function(canvas) {
      // document.body.appendChild(canvas);
      return Canvas2Image.saveAsPNG(canvas);
    }
  });

  location.reload();

});


var api = "https://api.quotable.io/random?tags=famous-quotes|happiness|love";
const quote = document.getElementById("quote");
const author = document.getElementById("author");


fetch(api)
    .then((res) => res.json())
    .then((data) => {
    quote.innerHTML = `"${data.content}"`;
    author.innerHTML = `✍️ - ${data.author}`;
    });
    
    
btn.addEventListener("click", getQuote);

    
function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `" ${data.content} "`;
      author.innerHTML = `✍️ - ${data.author}`;
    });
}
