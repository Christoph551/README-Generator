// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let license = '';
  switch (data.license) {
    case 'Apache_2.0-blue.svg':
        license=`[![License](https://img.shields.io/badge/License/${data.license})](https://opensource.org/licenses/Apache-2.0)`
        break;
    case 'GPLv3-blue.svg':
      license=`[![License: GPL v3](https://img.shields.io/badge/License/${data.license})](https://www.gnu.org/licenses/gpl-3.0)`
      break;
      case 'MIT-yellow.svg':
        license=`[![License: MIT](https://img.shields.io/badge/License/${data.license})](https://opensource.org/licenses/MIT)`
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
GitHub Username: [${data.userName}](https://github.com/${data.userName})
Email: [Email](mailto:${data.userEmail})`;
}


module.exports = generateMarkdown;
