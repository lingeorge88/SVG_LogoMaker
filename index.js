const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const shapes = requrie('./lib/shapes');

const userQuestions =[
    {
        type:"input",
        name:"text",
        message: "Please enter up to 3 characters for your logo text",
    },
    {
        type:"input",
        name:"textColor",
        message: "Please enter a color keyword or hexadecimal number for your text's color",
    },
    {
        type: 'list',
        name: 'logoShape',
        message: `Please choose logo shape`,
        choices: ['triangle', 'circle', 'square'],
      },
    {
        type:"input",
        name:"logoColor",
        message: "Please enter a color keyword or hexadecimal number for your logo's color",
    },
] 

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(userQuestions).then((responses) => {
        console.log("Generated logo.svg");
        writeToFile("./examples/logo.svg", shapes({ ...responses }));
      });
}
init();