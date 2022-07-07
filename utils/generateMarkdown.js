// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// sections Installation, Usage, License, Contributing, Tests, and Questions
const licenseInfo = {
  'Apache License 2.0': {
    badge:'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)1',
    description:'Licensed under Apache'
  },
  'GNU General Public License v3.0':{
    badge:'[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    description:'Licensed under GPL v.3'
  },
  'MIT License':{
    badge:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    description:'Liscensed under MIT'
  },
  'Mozilla Public License 2.0':{
    badge:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    description:'Liscensed under MPL 2.0'
  }
};

function renderLicenseBadge(license) {
  if(!license){
    return '';
  }
  return licenseInfo [license].badge
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

function renderLicenseSection(license) {
  if(!license){
    return ''
  }
  return licenseInfo [license].description;
}

function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}

  ## Table of Contents

    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Tests](#Tests)
    * [Questions](#Questions)

  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
 ${renderLicenseSection(data.license)}
  
  ## Contributing 
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions

  If you have additional questions, please reach me at ${data.email} or ${data.github}.
`;
}

module.exports = generateMarkdown;
