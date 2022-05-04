// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(response) {
  if(response.license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
     Apache 2.0 License`
  } 
  else if(response.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    The MIT License`
  }
  else if(response.license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    GNU GPL v3`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(response) {
// if(response.license === ''){
//   return ``
// }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Badge and License
  ${renderLicenseBadge(response.license)}.

  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contributing)
  - [Test](#test)
  - [License](#license)
  - [Contact](#github)

  ## Description
${response.description}.

## Installation
${response.installation}.

## Usage
${response.usage}.

## Contributing
${response.contribution}.

## Tests
${response.test}.

## Questions
For any additional questions, you can reach me at the following options:
${response.github}.
${response.email}.
`;
}

module.exports = generateMarkdown;
