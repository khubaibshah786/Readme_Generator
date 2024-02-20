function generateLicenseBadge(license) {
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
- [ReadME](#readme)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## ReadME
Github profile: ${data.username}

## Questions
For questions about this project, please contact [${data.username}](https://github.com/${data.username}) at ${data.email}.
If you have additional questions, you can reach out via email at ${data.email}.

`;
}

module.exports = generateMarkdown;
