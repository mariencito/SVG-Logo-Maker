class Shape{
    constructor(){
        this.text=""
        this.textColor=""
        this.shapeColor=""
    }
    setColor(textColor){
        this.textColor=textColor
    }
    setText(text){
        this.text=text
    }
    setShapeColor(shapeColor){
        this.shapeColor=shapeColor
    }

    render(){
        return new Error("child must create its own render function")
    }
}
module.exports = Shape



// this is so that we could use super in the other shapes js files
// such as triangle.js ...