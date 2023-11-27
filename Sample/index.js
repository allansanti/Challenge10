const Circle=require("./lib/Circle")
const inquirer=require("inquirer")
const fs=require("fs")
const Square=require("./lib/Square")

inquirer
.prompt([{
    type:"input",
    message:"Enter SVG text:",
    name:"text"
},{
    type:"list",
    message:"Enter Text Color:",
    name:"textColor",
    choices:["blue","green","red"]
},{
    type:"list",
    message:"Enter Shape:",
    name:"shape",
    choices:["circle","square","triangle"]
},
{
    type:"list",
    message:"Enter Shape color:",
    name:"shapeColor",
    choices:["blue","green","red"]
}

])
.then(response=>{

    if(response.shape==="circle"){
        const circle = new Circle()
        circle.setColor(response.textColor)
        circle.setText(response.text)
        circle.setShapeColor(response.shapeColor)
        fs.writeFile("./examples/logo.svg", circle.render(),(err)=>{
            console.log("Generated logo.svg")
        })

    }else if(response.shape==="square"){
        const square = new Square()
        square.setColor(response.textColor)
        square.setText(response.text)
        square.setShapeColor(response.shapeColor)
        fs.writeFile("./examples/logo.svg", square.render(),(err)=>{
            console.log("Generated logo.svg")
        })
    }
})