const generateQuoteBtn = document.querySelector('.quote-new');
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');
const copyBtn = document.querySelector('.quote-copy');
const shareBtn = document.querySelector('.quote-share');

document.addEventListener("DOMContentLoaded", ()=> {
    getQuote();
});

generateQuoteBtn.addEventListener('click', ()=> {
    getQuote();
})

copyBtn.addEventListener('click', ()=> {
    navigator.clipboard.writeText(quoteText.innerHTML);
})

shareBtn.addEventListener('click', ()=> {
    let tweetUrl = `https://twitter.com/intent/tweet?text="${quoteText.innerText}" - ${quoteAuthor.innerText}`;
    window.open(tweetUrl);
})

async function getQuote() {
    try {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        quoteText.innerText = data.content;
        quoteAuthor.innerText = data.author;
    }
    catch(error) {
        alert('Failed to get new quote!')
    }
}

