// TODO: Include packages needed for this application
const inquirer = require ('inquirer');

const fs = require ('fs');

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
    let license = '';
    switch (data.license) {
        case 'Apache':
            license=`[![License](https://img.shields.io/badge/License/${data.userName}/${data.title})](https://opensource.org/licenses/Apache-2.0)`
            break;
        case 'GNU':
            license=`[![License: GPL v3](https://img.shields.io/badge/License/${data.userName}/${data.title}](https://www.gnu.org/licenses/gpl-3.0)`
            break;
        case 'MIT':
            license=`[![License: MIT](https://img.shields.io/badge/License/${data.userName}/${data.title})](https://opensource.org/licenses/MIT)`
        default:
            break;
    }
        const contents = `
# ${data.title}
${license}
## Description\n${data.description}\n
## Table of contents\n
- [Installation](#Insallation)\n
- [Usage](#Usage)\n
- [Contribution](#Contributing)\n
- [Test](#Test)\n
- [Questions](#Questions)\n
## Installation\n${data.userInstall}\n
## Usage\n${data.userInstructions}\n
## Contributing\n${data.collaborators}\n
## Test\n${data.test}\n
## Questions\n
GitHub Username: [${data.userName}](https://github.com/${data.userName})\n
Email Address: [${data.userEmail}](${data.userEmail})`;
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