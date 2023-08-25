const Shape=require("./shapes")

class Circle extends Shape{
    constructor(){
        super()
    }
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
        <text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
}

module.exports=Circle

