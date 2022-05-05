
const inquirer = require('inquirer')
const fs = require('fs');
const promptUser = () => {
    return inquirer.prompt([
        
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the project you are generating a README for:',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Describe how to install your project:',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how the project works, and what it does:',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What license was used to create your project?',
            choices: ['Apache License', 'Boost License', 'BSD License', 'Other']
        },
        {
            type: 'confirm',
            name: 'confrirmContributer',
            message: 'Would you like to add a list of contributors?',
            default: true
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please provide name/names of contributors:',
            when: ({confirmContributor}) =>  confirmContributor       
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter an Email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github url??',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },



        
    ])

    .then ((answer) => {
        const writeFile = fileContent => {
            return new Promise((resolve, reject) => {
              fs.writeFile('./dist/README.md', fileContent, err => {
                if (err) {
                  reject(err);
                  return;
                }
          
                resolve({
                  ok: true,
                  message: 'File created!'
                });
              });
            });
        };

        imagelink = ""

        if (answer.license == "Apache License") {
            imagelink = "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)"
        }
        else if (answer.license == "Boost License") {
            imagelink = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)" 
        }
        else if (answer.license == "BDN license") {
            imagelink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)"  
        }

        output = "## " + answer.title + "\n" + "## Description \n" + answer.description + 
        "\n" + "## Installation \n" + answer.installationInstructions + "\n" + "## How The Project Works \n"+ answer.usage + "\n" + "## License \n"+ answer.license + imagelink +
        "\n" + answer.confirmContributor + "\n" + "## Questions? \n" + answer.email + "\n" + answer.github
        
        
        writeFile(output)
       
        console.log(output)
    })
}

promptUser()