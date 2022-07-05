// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input

const promptQuestions =() =>{
    return inquirer.prompt([
        {
            type:'input',
            name:'motivation',
            message:'What is your motivation?'
        },
        {
            type:'input',
            name:'reason',
            message:'Why did you build this project?'
        },
        {
            type:'input',
            name:'problem',
            message:'What problem does this solve?'
        },
        {
            type:'input',
            name:'learn',
            message:'What did you learn?'
        }, 
        {
            type:'input',
            name: 'special',
            message:'What makes your project special?'
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt({
        type:'input',
        name:'fileName',
        message:'What is the name of file?'
    })
    .then(fileName =>{
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
