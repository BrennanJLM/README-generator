
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
            name: 'installation-instructions',
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
            name: 'License',
            message: 'What license was used to create your project?',
            choices: ['MIT License', 'Apache License', 'GNU General Public License', 'Boost Software License', 'Other']
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



        
    ])

    .then ((answer) => {
        const writeFile = fileContent => {
            return new Promise((resolve, reject) => {
              fs.writeFile('./README.md', fileContent, err => {
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
        writeFile(answer.title)
        console.log(answer.title)
    })
}

promptUser()