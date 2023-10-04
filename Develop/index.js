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
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
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
const generateHTML = ({ name, location, github, linkedin, hobby, food }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${location}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">LinkedIn: <a href = "${linkedin}">${linkedin}</a></li>
        <li class="list-group-item">My favorite hobby is ${hobby}</li>
        <li class="list-group-item">My favorite food is ${food}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

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