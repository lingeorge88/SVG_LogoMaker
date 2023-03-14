const isCSSHexCode = require('is-css3-color');
class Shape {
    constructor(text, textColor, logoShape, logoColor){
        this.logoShape = logoShape;
        this.validateColorCode(textColor);
        this.textColor = textColor;
        this.validateTextLength(text);
        this.text = text;
        this.validateColorCode(logoColor);
        this.logoColor = logoColor;
    
}

checkInput(input){
    if(!input) throw new Error('Input cannot be empty');
}

validateTextLength(input){
    this.checkInput(input);
    if(input.length > 3){
        throw new Error('Logo text cannot be more than 3 characters');
    }
}

validateColorCode(input){
    this.checkInput(input);
    input = input.toLowerCase();
    if(!isCSSHexCode(input)) {
        throw new Error('Please enter a valid CSS hexadecimal code or color keyword');
    }
}
render() {
    throw new Error('Child shapes must implement a render() method')
}
}

class Square extends Shape {
    constructor(text, textColor, logoShape, logoColor){
        super(text, textColor, logoShape, logoColor);
    }
    render(){
        return `<rect width="250" height="250" fill="${this.logoColor}"/>`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, logoShape, logoColor){
        super(text, textColor, logoShape, logoColor);
    }
    render() {
            return `<circle cx="50" cy="50" r="50" fill="${this.logoColor}"/>`;
          }
    }


class Triangle extends Shape {
    constructor(text, textColor, logoShape, logoColor){
        super(text, textColor, logoShape, logoColor);
    }
    render() {
        return `<polygon points="0 100, 25 ,0 80, 115" fill="${this.logoColor}"/>`;
    }
}

module.exports = {Shape, Square, Circle, Triangle}