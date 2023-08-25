const Triangle = require('./triangle');

describe('Triangle Class', () => {
  test('Triangle render method produces correct SVG string', () => {
    const triangle = new Triangle();
    
    // properties
    triangle.setColor('blue');
    triangle.setText('MC');
    triangle.setShapeColor('green');

    // render
    const svgString = triangle.render();

    // test
    expect(svgString).toContain('<polygon points="150,10 50,190 250,190" fill="green" />');
    expect(svgString).toContain('<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">MC</text>');
  });
});