const Shape=require("./Shapes")


class Circle extends Shape{
    constructor(){
        super()
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}
/*
triangle

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> <polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>


square

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>

*/

module.exports=Circle