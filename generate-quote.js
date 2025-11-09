const fs = require("fs");

const quotes = [
  "Code is like humor. When you have to explain it, it's bad. –  Mohamed Ait Tajante",
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "Programs must be written for people to read, and only incidentally for machines to execute. – Mohamed Ait Tajante",
  "Simplicity is the soul of efficiency. – Mohamed Ait Tajante",
  "First, solve the problem. Then, write the code. – Mohamed Ait Tajante",
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const svg = `
<svg width="800" height="120" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0D1117"/>
  <text x="50%" y="50%" fill="#00FF88" font-family="Consolas, monospace"
        font-size="18" text-anchor="middle" dominant-baseline="middle">
    ${randomQuote}
  </text>
</svg>
`;

fs.writeFileSync("quote.svg", svg, "utf8");

//console.log("✅ Quote generated successfully:", randomQuote);
