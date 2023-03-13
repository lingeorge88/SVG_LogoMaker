
const generateSVG = (shapes) =>{
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapes.render()}
      <text
        x="${shapes.logoShape != 'triangle' ? '50%' : '33%'}"
        y="${shapes.logoShape != 'triangle' ? '50%' : '60%'}"
        text-anchor="middle"
        fill="${shapes.textColor}"
        font-size="1.3rem" letter-spacing="2" dy=".3em"
        font-family="monospace">${shapes.text}
      </text>
    </svg>
    `;
};

const {Shape, Square, Circle, Triangle} = require('./shapes');
const makeShape = (data) => {
    const { logoShape } = data;
    switch(logoShape) {
        case 'circle':
        const makeCircle = new Circle(data);
        return makeCircle;
        break;

        case 'square':
        const makeSquare = new Square(data);
        return makeSquare;
        break;

        case 'triangle':
        const makeTriangle = new Triangle(data);
        return makeTriangle;
        break;

        default:
            return 'Please choose a shape';
    }
};

module.exports = {generateSVG, makeShape};