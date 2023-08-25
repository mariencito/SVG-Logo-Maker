const Triangle = require('./triangle');

describe('Triangle Class', () => {
  test('does the triangle work', () => {
    const triangle = new Triangle();
    
    // properties
    triangle.setColor('blue');
    triangle.setText('MC');
    triangle.setShapeColor('green');

    // render
    const svgString = triangle.render();

    // test using jest
    expect(svgString).toContain('<polygon points="150,10 50,190 250,190" fill="green" />');
    expect(svgString).toContain('<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">MC</text>');
  });
});