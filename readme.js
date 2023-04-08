const inquirer = require('inquirer');

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        Type: 'input',
        name: 'Description',
        message: 'What is the description of your project?',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'InstallationInstructions',
        message: 'What are the installation instructions',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'UsageInformation',
        message: 'What is the usage information?',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'ContributionGuidelines',
        message: 'What were your contribution guidelines?',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'TestInstructions',
        message: 'Insert test instructions',
        default: 'type your answer'
    },
  ])
  