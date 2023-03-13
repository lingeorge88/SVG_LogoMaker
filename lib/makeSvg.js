
const generateSVG = (shapes) =>{
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapes.render()}
      <text
        x="50%"
        y="${shapes.logoShape != 'triangle' ? '50%' : '40%'}"
        text-anchor="middle"
        fill="${shapes.textColor}"
        font-size="2.3rem" letter-spacing="2" dy=".3em"
        font-family="monospace">${shapes.text}
      </text>
    </svg>
    `;
};



module.exports = {generateSVG};