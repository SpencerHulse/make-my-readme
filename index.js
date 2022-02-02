// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeToFile = require("./utils/generate-readme.js");

// Questions asked to create the readme
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project. (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please enter installation instructions for your project. (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter usage information for your project. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter usage information!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Please enter contribution guidelines for your project. (Required)",
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log("Please enter contribution guidelines!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Please enter test instructions for your project. (Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Please enter test instructions!");
        return false;
      }
    },
  },
];

const promptReadme = () => {
  return inquirer.prompt(questions);
};

// TODO: Create a function to initialize app
function init() {
  promptReadme(questions)
    .then((answers) => {
      return generateMarkdown(answers);
    })
    .then((readmeMarkdown) => {
      return writeToFile(readmeMarkdown);
    })
    .then((writeFileResponse) => {
      console.log(writeFileResponse);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
