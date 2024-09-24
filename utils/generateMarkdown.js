// ????TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export function renderLicenseBadge(license) {

    if (!license) {
      return '';
    }
    let badge = '';
  
    if (license === 'MIT License') {
      badge = 'MIT License';
    } else if (license === 'Apache License 2.0') {
      badge = 'Apache 2.0 License';
    } else if (license === 'GNU General Public License v3.0') {
      badge = 'GPL v3 License';
    } else if (license === 'BSD 3-Clause License') {
      badge = 'BSD 3-Clause License';
    } else {
      badge = ''; 
    }
    
  } 
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (!license) {
      return '';
    }
    const licenseLinks = {
      'MIT License': '[MIT License](https://opensource.org/licenses/MIT)',
      'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
      'GNU General Public License v3.0': '[GPL v3](https://opensource.org/licenses/GPL-3.0)',
      'BSD 3-Clause License': '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
      'BSD 3-Clause License': '[CC0](https://creativecommons.org/publicdomain/zero/1.0/)',
    };
  
    return licenseLinks[license] || '';

  }





  //TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === 'MIT License') {
      return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'Apache License 2.0') {
      return '![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (license === 'GNU General Public License v3.0') {
      return '![GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)';
    } else if (license === 'BSD 3-Clause License') {
      return '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)';
    } else {
      return ''; 
    }

  }

  // ??TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = renderLicenseBadge(data.license);
  
    return `
    
  # ${data.title}
  
  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${licenseBadge}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  
  If you have any questions, feel free to reach out to me at [${data.gituser} and ${data.email}].`
  };
  
  
  
  
  
  export default generateMarkdown;
