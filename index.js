const inquirer = require('inquirer');
const fs = require('fs');
const { dqpb } = require('cli-spinners');

const generateREADME = ({Description, InstallationInstructions, UsageInformation, 
  ContributionGuidelines, TestInstructions }) =>
  `# <Your-Project-Title>

  ## Description
  ${Description}
 
  ## Installation
  ${InstallationInstructions}
  ## Usage
  ${UsageInformation}
  ## Credits
  
  ## License
  
  ## Badges
  
  ## Features
  
  ## How to Contribute
  ${ContributionGuidelines}
  
  ## Tests
  ${TestInstructions}
  `

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
  .then((answers) => {
    const readmeMDcontent= generateREADME(answers);

    fs.writeFile('README.md', readmeMDcontent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
  });

  // .then((data) => {
  //   const filename = `README.md`
  //   fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
  //     err ? console.log(err) : console.log('Success!')
  //   );
