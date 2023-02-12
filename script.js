const generateQuoteBtn = document.querySelector('.quote-new');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const copyBtn = document.querySelector('.quote-copy');
const shareBtn = document.querySelector('.quote-share');

// generate new quote on page load
document.addEventListener("DOMContentLoaded", ()=> {
    getQuote();
});

// New Quote Button calls getQuote function
generateQuoteBtn.addEventListener('click', ()=> {
    getQuote();
})

// copy Quote Text into clipboard
copyBtn.addEventListener('click', ()=> {
    navigator.clipboard.writeText(quoteText.innerHTML);
})

// share quote text and quote author on Twitter
shareBtn.addEventListener('click', ()=> {
    let tweetUrl = `https://twitter.com/intent/tweet?text="${quoteText.innerText}" - ${quoteAuthor.innerText}`;
    window.open(tweetUrl);
})

// getting quote data function
async function getQuote() {
    try {
        const res = await fetch('https://api.quotable.io/random'); // https://github.com/lukePeavey/quotable API
        const data = await res.json();
        quoteText.innerText = data.content; // get quote content into .quote-text paragraph
        quoteAuthor.innerText = data.author; // get quote author into .quote-author span
    }
    catch(error) {
        alert('Failed to get new quote!')
    }
}

