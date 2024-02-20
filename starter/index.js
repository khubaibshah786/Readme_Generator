const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide the title of your project:"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project:"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the contents of your project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the installation instructions for your project:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license for your application:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributions for your project:"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide the tests for your project:"
    },
    {
        type: "input",
        name: "questions",
        message: "Please provide the questions for your project:"
    },
    // Add more questions for other sections of the README (e.g., installation, usage, license, etc.)
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log(`${fileName} created successfully!`);
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate the README content using the provided answers
            const readmeContent = generateMarkdown(answers);

            // Write the generated README content to a file
            writeToFile("README.md", readmeContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// function call to initialize program
init();
