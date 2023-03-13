const {Square, Circle, Triangle} = require('./shapes');

const generateSVG = (shape) =>{
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
      <text
        x="50%"
        y="${shape.logoShape != 'triangle' ? '50%' : '40%'}"
        text-anchor="middle"
        fill="${shape.textColor}"
        font-size="2.3rem" letter-spacing="2" dy=".3em"
        font-family="monospace">${shape.text}
      </text>
    </svg>
    `;
};

const makeShape = (data) => {
    const { logoShape } = data;
    switch(logoShape) {
        case 'cicle':
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