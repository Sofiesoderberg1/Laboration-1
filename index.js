const readline = require("readline")
const greetings = ["Hej", "Hallå", "Välkommen"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.on('line', (line) => {
    const randomIndex = Math.floor(Math.random() * greetings.length)
    const randomGreeting = greetings[randomIndex]


  console.log(`${randomGreeting} ${line}!`);
});

console.log ("Vad heter du?")