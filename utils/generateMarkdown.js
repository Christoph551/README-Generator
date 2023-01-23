// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let license = '';
  switch (data.license) {
    case 'Apache_2.0-blue.svg':
        license=`[![License](https://img.shields.io/badge/License/${data.license})](https://opensource.org/licenses/Apache-2.0)`
        break;
    case 'GPLv3-blue.svg':
      license=`[![License: GPL v3](https://img.shields.io/badge/License/${data.license}](https://www.gnu.org/licenses/gpl-3.0)`
      break;
      case 'MIT-yellow.svg':
        license=`[![License: MIT](https://img.shields.io/badge/License/${data.license})](https://opensource.org/licenses/MIT)`
        default:
          break;
  }
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}
## Description\n${data.description}\n
## Table of contents\n
- [Installation](#Insallation)\n
- [Usage](#Usage)\n
- [Contribution](#Contributing)\n
- [Test](#Test)\n
- [Questions](#Questions)\n
## Installation\n${data.userInstall}\n
## Deployment\n${data.userURL}\n
## Usage\n${data.userInstructions}\n
## Contributing\n${data.collaborators}\n
## Test\n${data.test}\n
## Questions\n
GitHub Username: [${data.userName}](https://github.com/${data.userName})\n
Email Address: [${data.userEmail}](${data.userEmail})`;
}


module.exports = generateMarkdown;
