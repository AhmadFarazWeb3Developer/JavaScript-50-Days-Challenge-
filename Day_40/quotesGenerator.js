const quote = document.getElementById("quote");
const author = document.getElementById("author");

const quoteButton = document.getElementById("quoteBtn");
const tweetBtn = document.getElementById("tweetBtn");

const api_url = "https://api.quotable.io/random";
const getQuote = async (url) => {
  const response = await fetch(url);
  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};

quoteButton.addEventListener("click", () => {
  getQuote(api_url);
});

const tweet = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
};
tweetBtn.addEventListener("click", () => {
  tweet();
});
