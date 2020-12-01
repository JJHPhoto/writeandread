//My constants
const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [];

//inquirer copied from activity
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "What does your project do?",
      name: "function",
    },
    {
      type: "input",
      message: "What license will you use?",
      name: "license",
    },
  ])
  .then((data) => {
    const filename = `# ${data.title} 
    1. Functionality 

    ${data.function} 

    2. License Agreement 

    ${data.license}`;

    //Using this dummy name to test.
    fs.writeFile("Test1.md", filename, (err) => {
      err ? console.log(err) : console.log("Success");
    });
  });

// function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, function (err) {
//     if (err) throw err;
//     console.log("Saved!");
//   });
// }

// function to initialize program
function init() {}

// function call to initialize program
init();

//Not using
//========

//Readline that worked but wrong cause its not inquirer.

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

//readline close function
// rl.on("close", function () {
//   console.log("\nKTHXBAI");
//   process.exitCode = 0;
// });

// const fileName = "TESTREADME.md";
// rl.question("What is your project title? ", function (title) {
//   rl.question("What does your project do? ", function (description) {
//     rl.question("What license will you use? ", function (license) {
//       rl.question("How do I install this? ", function (installation) {
//         rl.question("Who can use this? ", function (usage) {
//           rl.question("Who contributed to this? ", function (contribute) {
//             rl.question("How do I test this? ", function (test) {
//               rl.question(
//                 "What is your Github username? ",
//                 function (github) {
//                   rl.question(
//                     "What is your email address? ",
//                     function (email) {
//                       const mdTitle = "# " + title + "\n";
//                       const mdDescription = "## " + description + "\n";
//                       const mdTableOfContents =
//                         "## " + "Table of Contents" + "\n";
//                       const mdLicence = "## " + license + "\n";
//                       const mdInstall = "## " + installation + "\n";
//                       const mdUsage = "## " + usage + "\n";
//                       const mdContribute = "## " + contribute + "\n";
//                       const mdTest = "## " + test + "\n";
//                       const mdQuestions =
//                         "## " +
//                         "Github: " +
//                         github +
//                         "\n" +
//                         "## " +
//                         "email: " +
//                         email +
//                         "\n";
//                       const mdInput =
//                         mdTitle +
//                         mdDescription +
//                         mdTableOfContents +
//                         mdLicence +
//                         mdInstall +
//                         mdUsage +
//                         mdContribute +
//                         mdTest +
//                         mdQuestions;
//                       writeToFile(fileName, mdInput);
//                       rl.close();
//                     }
//                   );
//                 }
//               );
//             });
//           });
//         });
//       });
//     });
//   });
// });
