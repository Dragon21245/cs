/*const userInput = process.argv[2];
if (!userInput) {
    console.log("Please provide a string as the first command line argument.");
} else {
    console.log("String to turn into ASCII art:", userInput);
} */

const figlet = require('figlet');
const userInput = process.argv[2];
if (!userInput) {
    console.log("Please provide a string as the command line argument.");
} else {
    figlet.text(userInput, function(err, data) {
        if (err) {
            console.log('Error:', err);
        } else {
            console.log(data);
        }
    });
}
