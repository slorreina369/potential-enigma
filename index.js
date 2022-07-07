// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

const promptQuestions =() =>{
    return inquirer.prompt([

        {
            type:'input',
            name:'title',
            message: 'What is this project called?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe your code'
            // will yell at them later for not answering this
        },
        {
            type:'input',
            name:'installation',
            message:'How do you install your project ?'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions and examples for use.'
        },
        {
            type:'checkbox',
            name:'license',
            message:'Provide a license for your code, if applicable.',
            choices:['Apache License 2.0','GNU General Public License v3.0','MIT License','Mozilla Public License 2.0']
        }, 
        {
            type:'input',
            name: 'contributing',
            message:"Who worked on this code? Don't be a dick."
        },
        {
            type: 'input',
            name:'tests',
            message:"Write tests for your application"
        },
        {
            type:'input',
            name:'email',
            message:'What is your email for further questions?'
        },
        {
            type:'input',
            name:'github',
            message:'Enter your GitHub Username',
            validate: githubInput => {
                if(githubInput){
                    return true
                } else {
                    console.log('Please enter your username');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, generateMarkdown(data), err =>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:'README created!'
            });
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt({
        type:'input',
        name:'fileName',
        message:'What is the name of file?'
    })
    .then(({fileName}) =>{
        return promptQuestions()
        .then(questions => {
            return [fileName, questions]
        });
    })
    .then(([fileName, questions]) => {
        return writeToFile(fileName, questions)
    })
}

// Function call to initialize app
init();
