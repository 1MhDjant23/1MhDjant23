const fs = require("fs");

const quotes = [
  "It's harder to read code than to write it. –  Mohamed Ait Tajante",
  "Bad programmers worry about the code. Good programmers worry about the relationships between all the data in the system. –  Mohamed Ait Tajante",
  "Make it work, make it right, make it fast. –  Mohamed Ait Tajante",
  "Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it. –  Mohamed Ait Tajante",
  "The function of good software is to make the complex appear to be simple.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. –  Mohamed Ait Tajante",
  "Code never lies, comments sometimes do. –  Mohamed Ait Tajante",
  "Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime. –  Mohamed Ait Tajante",
  "Code is like humor. When you have to explain it, it's bad. –  Mohamed Ait Tajante",
  "Talk is cheap. Show me the code. –  Mohamed Ait Tajante",
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
