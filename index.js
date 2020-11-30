//My constants
const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//readline close function
rl.on("close", function () {
  console.log("\nKTHXBAI");
  process.exitCode = 0;
});

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
}

// function to initialize program
function init() {
  const fileName = "TESTREADME.md";

  rl.question("What is your project title? ", function (title) {
    rl.question("What does your project do? ", function (description) {
      const mdTitle = "# " + title + "\n";
      const mdDescription = "## " + description + "\n";
      const data = mdTitle + mdDescription;
      writeToFile(fileName, data);
      rl.close();
    });
  });
}

// function call to initialize program
init();
