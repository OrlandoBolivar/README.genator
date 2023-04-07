var inquirer = require('inquirer');
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
        Type: '',
        name: '',
        message: '',
        default: 'type your answer'
    },
    {
        Type: '',
        name: '',
        message: '',
        default: 'type your answer'
    },
    {
        Type: '',
        name: '',
        message: '',
        default: 'type your answer'
    },
    {
        Type: '',
        name: '',
        message: '',
        default: 'type your answer'
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });