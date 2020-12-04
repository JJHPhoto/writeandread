//My constants
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What does your project do?",
    name: "description",
  },
  {
    type: "input",
    message: "How do you want to install this?",
    name: "installation",
  },
  {
    type: "input",
    message: "How will you use this?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license will you use?",
    name: "license",
    choices: ["Apache", "MIT", "CC"],
  },
  {
    type: "input",
    message: "Who contributed to this?",
    name: "contributing",
  },
  {
    type: "input",
    message: "How will you test this?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your Github user name??",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

const askUser = () => inquirer.prompt(questions);

// function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Saved!");
  });
};

askUser()
  .then((data) => writeToFile("TESTREADME.md", generateMarkdown(data)))
  .then(() => console.log("Successfully created your README.md file"))
  .catch((err) => console.error(err));
