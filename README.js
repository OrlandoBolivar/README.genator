const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        Type: 'input',
        name: 'Description',
        message: 'what is the description of your project?',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'Description',
        message: 'what is the description of your project?',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'Description',
        message: 'what is the description of your project?',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'Description',
        message: 'what is the description of your project?',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'Description',
        message: 'what is the description of your project?',
        default: 'type your answer'
    },
  ])
  .then((data) => {
    const filename = `README.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
