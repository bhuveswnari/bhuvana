document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteButton = document.getElementById('new-quote');
    const twitterShare = document.getElementById('twitter-share');
    const facebookShare = document.getElementById('facebook-share');

    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            const quote = data.content;
            const author = data.author;
            
            quoteText.textContent = `"${quote}"`;
            quoteAuthor.textContent = `— ${author}`;

            // Update social media links
            const quoteUrl = encodeURIComponent(`${quote} — ${author}`);
            twitterShare.href = `https://twitter.com/intent/tweet?text=${quoteUrl}`;
            facebookShare.href = `https://www.facebook.com/sharer/sharer.php?u=${quoteUrl}`;
        } catch (error) {
            quoteText.textContent = "Failed to fetch a quote.";
            quoteAuthor.textContent = "";
        }
    }

    newQuoteButton.addEventListener('click', fetchQuote);

    // Fetch an initial quote when the page loads
    fetchQuote();
});