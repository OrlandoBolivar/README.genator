const inquirer = require('inquirer');
const fs = require('fs');
const { dqpb } = require('cli-spinners');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { default: Choice } = require('inquirer/lib/objects/choice');
const licenseOptions = ["MIT", "NU GPLv3", "GNU GPLv3", "GNU LGPLv3"]

const generateREADME = ({ProjectTitle, Motivation, Build, ProblemSolves, InstallationInstructions, UsageInformation, CreditsRepo, CreditsEmail, ContributionGuidelines, License, TestInstructions}) =>

  `
# ${ProjectTitle}


## Description
  - ${Motivation}.
  - ${Build}
  - ${ProblemSolves}.

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#feautures)
  - [License](#license)  
  - [Test](#test)
  
## Installation
${InstallationInstructions}

## Usage
${UsageInformation}


## Credits

${CreditsRepo}
${CreditsEmail}
  
## License
${License}

## Badges
![LICENSE](https://img.shields.io/badge/${ProjectTitle}-blue)
![LICENSE](https://img.shields.io/badge/${License}-red)

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
      name: 'ProjectTitle',
      message: 'What is the name of your project?',
      default: 'type your answer'
  },
    {
      Type: 'input',
      name: 'Motivation',
      message: 'What was your motivation for this project?',
      default: 'type your answer'
  },
    {
      Type: 'input',
      name: 'Build',
      message: 'Why did you build this project?',
      default: 'type your answer'
  },
    {
      Type: 'input',
      name: 'ProblemSolves',
      message: 'What problem does this project solve?',
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
      message: 'add the location of the image or clip showing the usage of this project?',
      default: 'start typing ./'
  },
    {
      Type: 'input',
      name: 'CreditsRepo',
      message: 'add your link for your repository?',
      default: 'paste here'
  },
    {
      Type: 'input',
      name: 'CreditsEmail',
      message: 'add your professional email address?',
      default: 'paste here'
  },
    {
      Type: 'input',
      name: 'License',
      message: 'Select your License?',
      default: 'MIT, NU GPLv, GNU GPLv3, GNU LGPLv3'
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


