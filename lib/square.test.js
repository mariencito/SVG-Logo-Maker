const Square = require('./square');

describe('Square Class', () => {
  test('Square render method produces correct SVG string', () => {
    const square = new Square();
    
    // Set properties
    square.setColor('blue');
    square.setText('MC');
    square.setShapeColor('green');

    // Call render method
    const svgString = square.render();

    // Assertions
    expect(svgString).toContain('<rect x="50" y="50" width="200" height="200" fill="green" />');
    expect(svgString).toContain('<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">MC</text>');
  });
});