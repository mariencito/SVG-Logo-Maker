const inquirer = require('inquirer');
const fs = require("fs");
const Circle = require('./lib/circle');
const Triangle = require("./lib/triangle")
const Square = require("./lib/square")

// packages required
//  questions
inquirer
  .prompt([
    {
        type: 'input',
        message: "What color would you like the shape to be?",
        name: 'shapeColor',
      },
      {
        type: 'list',
        message: "What shape would you like",
        name: 'shape',
        choices: ['Circle','Triangle','Square']
      },
      {
        type: 'input',
        message: "What would you like the letters to be?(Up to 3 characters)",
        name: 'text',
      },
      {
        type: 'input',
        message: "What color would you like the text to be?",
        name: 'textColor',
      }])
      .then(response=>{



        if(response.shape==="Circle"){
            const circle = new Circle()
            circle.setColor(response.textColor) // color of text is determined by answer
            circle.setText(response.text) // text is determined by user answer
            circle.setShapeColor(response.shapeColor) // color of shape is determined by user answer
            fs.writeFile("./examples/logo.svg",circle.render(),(err)=>{
                console.log("Generated logo.svg")
            })
        } else if(response.shape==="Square"){
            const square = new Square()
            square.setColor(response.textColor)
            square.setText(response.text)
            square.setShapeColor(response.shapeColor)
            fs.writeFile("./examples/logo.svg",square.render(),(err)=>{
                console.log("Generated logo.svg")
            })
        } else if(response.shape==="Triangle"){
            const triangle = new Triangle()
            triangle.setColor(response.textColor)
            triangle.setText(response.text)
            triangle.setShapeColor(response.shapeColor)
            fs.writeFile("./examples/logo.svg",triangle.render(),(err)=>{
                console.log("Generated logo.svg")
            })
        }

      })