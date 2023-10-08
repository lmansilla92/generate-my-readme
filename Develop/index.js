// Includes packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const licenseOptions = generateMarkdown.licenseOptions;

// Creates an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Enter a description of your project.',
    'List the installation instructions for your project.',
    'Enter the usage information.',
    'Enter the contribution guidelines.',
    'Enter any test instructions you may have.',
    'Enter e-mail you would like to be reached at if someone has additional questions about this application.',
    'Enter your GitHub Username.',
    'Please choose a license for your project.',
];

// Creates a function to write README file
function writeToFile(fileName, readme) {
    fs.writeFile('README.md', readme, (err) =>
    // Uses ternary operator to check if there's an error, if not then 'Successfully created index.js' is logged.
      err ? console.log(err) : console.log('Successfully created README.md!'))
};

// Creates a function to initialize app
function init() {
    // Inquirer asks questions to the user and stores the answers to be available to access later
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: questions[0],
    },
    {
        type: 'input',
        name: 'description',
        message: questions[1],
    },
    {
        type: 'input',
        name: 'installation',
        message: questions[2],
    },
    {
        type: 'input',
        name: 'usage',
        message: questions[3],
    },
    {
        type: 'input',
        name: 'contribution',
        message: questions[4],
    },
    {
        type: 'input',
        name: 'test',
        message: questions[5],
    },
    {
        type: 'input',
        name: 'email',
        message: questions[6],
    },
    {
        type: 'input',
        name: 'github',
        message: questions[7],
    },
    {
        type: 'list',
        name: 'license',
        message: questions[8],
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
        // Declares license const with a value of the license the user chose
        const license = answers.license;
        // Calls the function that renders the license badge to the README file
        generateMarkdown.renderLicenseBadge(license);

        // Calls the method that generates the markdown
        const readme = generateMarkdown.generateMarkdown(answers);
        writeToFile('README.md', readme);
        generateMarkdown.renderLicenseSection(JSON.stringify(generateMarkdown.licenseOptions));
    });

};

// Function call to initialize app
init();

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