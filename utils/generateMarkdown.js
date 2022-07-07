// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// sections Installation, Usage, License, Contributing, Tests, and Questions
const licenseInfo = {
  'Apache License 2.0': {
    badge:'',
    description:''
  },
  'GNU General Public License v3.0':{
    badge:'',
    description:''
  },
  'MIT License':{
    badge:'',
    description:''
  },
  'Mozilla Public License 2.0':{
    badge:'',
    description:''
  },
  'The Unlicense':{
    badge:'',
    description:''
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
