const readline = require("readline")
const greetings = ["Hej", "Hallå", "Välkommen"];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.on('line', (line) => {
    const randomIndex = Math.floor(Math.random() * greetings.length)
    const randomGreeting = greetings[randomIndex]
    const greetingMessage = `${randomGreeting} ${line}!`;
    const messageLength = greetingMessage.length
    const border = "═".repeat(messageLength + 2)


    console.log(`╔${border}╗`)
    

  console.log(`║ ${randomGreeting} ${line}! ║`);
  console.log(`╚${border}╝`)
});

console.log ("Vad heter du?")
