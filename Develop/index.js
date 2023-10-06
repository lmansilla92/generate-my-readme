// Imports inquirer and fs to this file to have the ability to ask questions to the user and to create a file with the file system
const inquirer = require('inquirer');
const fs = require('fs');
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

// Inquirer asks questions to the user and stores the answers to be available to access later
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'List the installation instructions for your project.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter the usage information.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Enter the contribution guidelines.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Enter any test instructions you may have.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter e-mail you would like to be reached out if someone has additional questions about this application.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project.',
      choices: [
        `${licenseOptions[0].name}`,
        `${licenseOptions[1].name}`,
        `${licenseOptions[2].name}`,
        `${licenseOptions[3].name}`,
      ]
    }
  ])



  // Stores the user answers from the prompt questions
  .then((answers) => {
  
    // Creates const for markDownPageContent and assigns the value of the generateMarkDown function with a parameter of the stored answers
    const markDownPageContent = generateMarkDown(answers);
    // Uses fs.writeFile to write an index.html file with the content from markdownPageContent, and catches an error if there is one
    fs.writeFile('README.md', markDownPageContent, (err) =>
    // Uses ternary operator to check if there's an error, if not then 'Successfully created index.js' is logged.
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  })

// Generates markdown content that will be written to README.md by using template literal notation and accessing the data from the inquirer prompt objects
const generateMarkDown = ({ title, description, installation, usage, contribution, test, github, linkedin, email, license}) =>
  `# ${title}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Test](#test)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  ${installation}

  ## Usage

  ${usage}
  
  ## Contribute

  ${contribution}
  
  To view the repository of this application and contribute to this application click the following link:  [${title} Repo]()
  
  If you need help on how to clone a GitHub repository into your local repository, visit the following GitHub link: [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) 

  ## Test

  ${test}

  ## Questions

  If you have any additional questions about this application, you can reach me via e-mail.
  - [EMAIL](mailto:${email})
  - [GITHUB](https://github.com/${github})
  - [LINKEDIN](${linkedin})
  
  ## License
  
  Link to [${license}]()`;

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/