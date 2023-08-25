const Shape=require("./shapes")

class Triangle extends Shape{
    constructor(){
        super()
    }
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,10 50,190 250,190" fill="${this.shapeColor}" />
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`;
    }
}

module.exports=Triangle