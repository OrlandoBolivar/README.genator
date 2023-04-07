const inquirer = require('inquirer');
const fs = require('fs');

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
        name: 'Installation-Instructions',
        message: 'What are the installation instructions',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'usage-information',
        message: 'What is the usage information?',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'contribution-guidelines',
        message: 'What were your contribution guidelines?',
        default: 'type your answer'
    },
    {
        Type: 'input',
        name: 'test-instructions',
        message: 'Insert test instructions',
        default: 'type your answer'
    },
  ])
  .then((data) => {
    const filename = `README.md`
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
