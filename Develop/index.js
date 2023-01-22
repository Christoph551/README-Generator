// TODO: Include packages needed for this application
const inquirer = require ('inquirer');

const generateMarkdown = require ('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    { // Title Question
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please enter a description of your project.',
        name: 'description'
    },
    {
        type: 'list',
        choices: [
            'MIT',
            'GNU GPLv3',
            'Apache License 2.0',
            'None'
        ],
        message: 'Please select which of the following licenses you would like to use.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions.',
        name: 'userInstall'
    },
    {
        type: 'input',
        message: 'Please enter the URL of your deployed application',
        name: 'userURL'
    },
    {
        type: 'input',
        message: 'Please enter user instructions.',
        name: 'userInstructions'
    },
    {
        type: 'input',
        message: 'Please enter the collaborators on this project.',
        name: 'collaborators'
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'userEmail'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
