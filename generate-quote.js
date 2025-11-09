const fs = require("fs");

// List of my favorite quotes
const quotes = [
  "Code is like humor. When you have to explain it, it's bad. – Mohamed Ait Tajante",
  "Talk is cheap. Show me the code. – Mohamed Ait Tajante",
  "Programs must be written for people to read, and only incidentally for machines to execute. – Mohamed Ait Tajante",
  "Simplicity is the soul of efficiency. – Mohamed Ait Tajante",
  "First, solve the problem. Then, write the code. – Mohamed Ait Tajante",
];

// Pick a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Create SVG content
const svg = `
<svg width="800" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#111111"/>
  <text x="50%" y="50%" font-size="20" fill="#00FF88"
        text-anchor="middle" dominant-baseline="middle"
        font-family="Courier New, monospace">
    ${randomQuote}
  </text>
</svg>`;

// Save to file
fs.writeFileSync("quote.svg", svg);
