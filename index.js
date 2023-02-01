// TODO: Include packages needed for this application
const inquirer = require ('inquirer');

const fs = require ('fs');

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
            'GPLv3',
            'Apache_2.0',
            'None'
        ],
        message: 'Please select which of the following licenses you would like to use.',
        name: 'license'
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
    {   //npm run test
        type: 'input',
        message: 'Enter the test script',
        name: 'test'
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
function writeToFile(fileName, data) {
        const contents = generateMarkdown(data);
        
fs.writeFileSync(fileName, contents)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {writeToFile('README.md', answers)}) 
        .catch(error => {
            if(error){
                throw error
            }
        })
}

// Function call to initialize app
init();
