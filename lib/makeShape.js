const {Shape, Square, Circle, Triangle} = require('./shapes');
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

module.exports = {makeShape};