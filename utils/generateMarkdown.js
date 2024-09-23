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


  }





  //TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {


  }

  // ??TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {}
  const licenseBadge = renderLicenseBadge(data.license);
  
    return `
    
  # ${data.title}

