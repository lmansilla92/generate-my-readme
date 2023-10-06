// Imports inquirer and fs to this file to have the ability to ask questions to the user and to create a file with the file system
const inquirer = require('inquirer');
const fs = require('fs');

// Creates an array of questions for user input
const questions = ['What is the title of your project?', 'Enter a description of your project.', 'List the installation instructions for your project', 'Enter the usage information.', 'Enter the contribution guidelines', 'Enter test instructions.'];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
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
      name: 'github',
      message: 'Enter your GitHub Username.',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  // Stores the generateHTML content with the answers to the htmlPageContent constant
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);
    // Uses fs.writeFile to write an index.html file with the content from htmlPageContent, and catches an error if there is one
    fs.writeFile('index.html', htmlPageContent, (err) =>
    // Uses ternary operator to check if there's an error, if not then 'Successfully created index.js' is logged.
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });

// Generates HTML content that will be written to index.js by using template literals and accessing the data from the inquirer prompt objects
const generateMarkDown = ({ name, location, github, linkedin, hobby, food }) =>
  `# First Weather App

  ## Repository
  
  In this repository you will find the application code to a weather app. The purpose of this application is to provide an easy way to search a city's weather by typing in the city name. The API requests return data that display the current weather, along with a 5-day forecast. The current weather will be displayed at the top section which is larger than the section that holds the 5 day forecast. The following information will be displayed if the fetch is successful:
  
  - City Name
  - Date
  - A weather icon from the Open Weather API
  - Temperature
  - Wind
  - Humidity
  
  The biggest challenge I had during the proccess of making thie application was getting the 5 day forecoast to display exactly how I wanted it to. The second biggest challenge was working with local storage to get the search history buttons to appear and get them to call the API fetch when clicked on. It wasn't necessarily getting this to work but more so, fixing bugs that were caused because of the way I wrote the code. It took meticulous inspection of my own code and running it multiple times to find ways where I could improve and help get rid of some of the bugs that were happening.
  
  ## Table of Contents
  
  - [Contribute](#contribute)
  - [Appearance](#appearance)
  - [Changes](#changes)
  - [Features](#features)
  - [Credits](#credits)
  - [License](#license)
  
  ## Contribute
  
  To view the repository of this weather app and contribute to this application click the following link:  [First Weather App Repo](https://github.com/lmansilla92/first-weather-app)
  
  If you need help on how to clone a GitHub repository into your local repository, visit the following GitHub link: [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) 
  
  ## Appearance
  
  Deployed Screenshot:
      ![First Weather App](assets/images/first-weather-app.png)
  
  To view the deployed webpage click the following link: [Deployed Webpage](https://lmansilla92.github.io/first-weather-app/)
  
  ## Changes
  
  I would like to make the following changes to this weather app:
  
  - Add more styling to the page with bootstrap
  - Change the background image of the page to an image of the city being searched
  - Add a night mode when searches are being made after a certain hour
  
  
  ## Features
  
  Some of the features in this application include:
  
  - Use of API data
  - Local Storage
  
  ## Credits
  
  Open Weather Map API [https://openweathermap.org/]
  
  ## License
  
  Link to [The MIT License (MIT)](https://github.com/lmansilla92/coding-quiz-challenge/blob/main/LICENSE)`;

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// imports inquirer and fs to this file to have the ability to ask questions to the user and to create a file with the file system
// const inquirer = require('inquirer');
// const fs = require('fs');

// Generates HTML content that will be written to index.js by using template literals and accessing the data from the inquirer prompt objects
// const generateHTML = ({ name, location, github, linkedin, hobby, food }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <header class="p-5 mb-4 header bg-light">
//     <div class="container">
//       <h1 class="display-4">Hi! My name is ${name}</h1>
//       <p class="lead">I am from ${location}.</p>
//       <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${github}</li>
//         <li class="list-group-item">LinkedIn: <a href = "${linkedin}">${linkedin}</a></li>
//         <li class="list-group-item">My favorite hobby is ${hobby}</li>
//         <li class="list-group-item">My favorite food is ${food}</li>
//       </ul>
//     </div>
//   </header>
// </body>
// </html>`;

// Inquirer asks questions to the user and stores the answers to be available to access later
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name?',
//     },
//     {
//       type: 'input',
//       name: 'location',
//       message: 'Where are you from?',
//     },
//     {
//       type: 'input',
//       name: 'hobby',
//       message: 'What is your favorite hobby?',
//     },
//     {
//       type: 'input',
//       name: 'food',
//       message: 'What is your favorite food?',
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username',
//     },
//     {
//       type: 'input',
//       name: 'linkedin',
//       message: 'Enter your LinkedIn URL.',
//     },
//   ])
//   // Stores the generateHTML content with the answers to the htmlPageContent constant
//   .then((answers) => {
//     const htmlPageContent = generateHTML(answers);
//     // Uses fs.writeFile to write an index.html file with the content from htmlPageContent, and catches an error if there is one
//     fs.writeFile('index.html', htmlPageContent, (err) =>
//     // Uses ternary operator to check if there's an error, if not then 'Successfully created index.js' is logged.
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });