const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
// const {Square, Circle, Triangle} = require('./lib/shapes');
const {generateSVG, makeShape} = require('./lib/makeSvg');


inquirer
    .prompt([
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
])

.then((data) =>{
    const svgPath = './examples/logo.svg';
    const newLogo = makeShape(data);

    fs.writeFile(svgPath, generateSVG(newLogo), (err) => 
    err ? console.error(err) : console.log('Generated logo.svg.'));
})

// .catch(err) => {
//     console.error(err);}


