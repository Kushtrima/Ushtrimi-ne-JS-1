// The array of quotes
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Failure is the condiment that gives success its flavor. – Truman Capote",
    "It is never too late to be what you might have been. – George Eliot",
    "You must be the change you wish to see in the world.” – Mahatma Gandhi",
    // ... add as many quotes as you like
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayRandomQuote() {
    const quote = getRandomQuote();
    const quoteElement = document.getElementById('quoteDisplay');
    quoteElement.textContent = quote;
}

// Display an initial quote on page load
window.onload = displayRandomQuote;




// Kushtrm M. Arifi 2023