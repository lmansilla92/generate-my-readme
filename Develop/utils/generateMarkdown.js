// Imports fs to use later to append the license section of the README file
const fs = require('fs');
// An array that contains the license options and corresponding badge
const licenseOptions = [
  {
    name: 'Apache License 2.0',
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  },
  {
    name: 'MIT',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  },
  {
    name: 'Boost Software License 1.0',
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  },
  {
    name: 'Mozilla Public License 2.0',
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
];
// Declares global variables for license badge and name
let licenseBadge = '';
let licenseName = '';

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Switch cases to compare the chosen license name to the licenseOptions array to assign license name and badge
  switch (license) {
    case 'Apache License 2.0':
      licenseBadge = licenseOptions[0].badge;
      licenseName = licenseOptions[0].name;
      break;
    case 'MIT':
      licenseBadge = licenseOptions[1].badge;
      licenseName = licenseOptions[1].name;
      break;
    case 'Boost Software License 1.0':
      licenseBadge = licenseOptions[2].badge;
      licenseName = licenseOptions[2].name;
      break;  
    case 'Mozilla Public License 2.0':
      licenseBadge = licenseOptions[3].badge;
      licenseName = licenseOptions[3].name;
      break;
      default:
        return '';
  }
}

// Function that renders the license section by appending the license name and badge to the file that was created
function renderLicenseSection(license) {
  if(fs.existsSync('../README.md')) {
    fs.appendFile('README.md',
    `\n  
  ## License
    \n  ${licenseName}  
    ${licenseBadge}`, (err) =>
    err ? console.log(err) : console.log("File appended!")
    );
  };
};

// Generates markdown content for README
function generateMarkdown(answers) {
  // console.log('answers logged from generateMarkdown: ', answers);

  return `# ${answers.title}

  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${answers.installation}

  ## Usage

  ${answers.usage}
  
  ## Contribute

  ${answers.contribution}
  
  To view the repository of this application and contribute to this application click the following link:  [${answers.title} Repo]()
  
  If you need help on how to clone a GitHub repository into your local repository, visit the following GitHub link: [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) 

  ## Test

  ${answers.test}

  ## Questions

  If you have any additional questions about this application, you can reach me via e-mail. Below is my e-mail and GitHub link.
  - [EMAIL](mailto:${answers.email})
  - [GITHUB](https://github.com/${answers.github})`;
}

// Exports const and methods from this file 
module.exports = {
  generateMarkdown,
  licenseOptions,
  renderLicenseBadge,
  renderLicenseSection,
  generateMarkdown,
  licenseBadge,
}
