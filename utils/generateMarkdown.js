// TODO: Creates a bade based on the license chosen or returns an empty string
function renderLicenseBadge(license) {
  let badgeName = license.split(" ")[0];
  if (license === "None") {
    return "";
  } else {
    return `
![license badge](https://img.shields.io/badge/license-${badgeName}-brightgreen)
    `;
  }
}

// Creates a link depending on which license was chosen
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `[MIT](https://www.mit.edu/~amini/LICENSE.md)`;
    case "Apache License 2.0":
      return `[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)`;
    case "GNU GPLv3":
      return `[GNU GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)`;
    case "Mozilla Public License 2.0":
      return `[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`;
  }
}

// Creates the license section if a license was chosen or returns an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `
## License

This project is covered under the following license:
    
${renderLicenseLink(license)}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents

${generateTOC(data)}

## Installation

${data.installation}

## Usage

${data.usage}
${renderLicenseSection(data.license)}
## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

If you wish to view more of my work, feel free to visit my GitHub account. Additionally, if you have any questions, you can contact me at the email address below. Thanks!

[GitHub](https://github.com/${data.github})

${data.email}
`;
}

// Used to make it dynamic for optional sections
const generateTOC = (data) => {};

module.exports = generateMarkdown;
