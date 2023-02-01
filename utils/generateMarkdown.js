// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let license = '';
  switch (data.license) {
    case 'Apache_2.0':
        license=`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break;
    case 'GPLv3':
      license=`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
      case 'MIT':
        license=`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        break;
        default:
  }
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}
## Description\n${data.description}
## Table of contents
- [Installation](#Insallation)
- [Deployment](#Deployment)
- [Usage](#Usage)
- [Contribution](#Contributing)
- [Test](#Test)
- [Questions](#Questions)
## Installation\n${data.userInstall}
## Deployment\n${data.userURL}
## Usage\n${data.userInstructions}
## Contributing\n${data.collaborators}
## Test\n${data.test}
## Questions\n
Have questions? Please feel free to reach out to me at:\n
GitHub Username: [${data.userName}](https://github.com/${data.userName})\n
Email: [Email](mailto:${data.userEmail})`;
}


module.exports = generateMarkdown;
