const Square = require('./square');

describe('Square Class', () => {
  test('does the square work', () => {
    const square = new Square();
    
    
    square.setColor('blue');
    square.setText('MC');
    square.setShapeColor('green');

    const svgString = square.render();

    
    expect(svgString).toContain('<rect x="50" y="50" width="200" height="200" fill="green" />');
    expect(svgString).toContain('<text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">MC</text>');
  });
});