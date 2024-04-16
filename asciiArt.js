const userInput = process.argv[2];
if (!userInput) {
    console.log("Please provide a string as the first command line argument.");
} else {
    console.log("String to turn into ASCII art:", userInput);
}
