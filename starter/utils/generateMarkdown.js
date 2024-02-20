// generateMarkdown.js

function generateLicenseBadge(license) {
  // Example: Generate badge URL for MIT license
  return `https://img.shields.io/badge/license-${encodeURIComponent(license)}-brightgreen`;
}

function generateMarkdown(data) {
  const licenseBadge = generateLicenseBadge(data.license);
  
  return `
# ${data.title}

[![License](${licenseBadge})](${data.license})

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license. For more information, please see the [license](#${data.license}) section.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about this project, please contact [${data.username}](https://github.com/${data.username}) at ${data.email}.
`;
}

module.exports = generateMarkdown;
