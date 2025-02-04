class Shape {
	// constructor(length, width){
	// 	this.length = length;
	// 	this.width = width;
	// }

	area(){
		console.log(`Overridden in subclasses`)
	}
}


class Circle extends Shape {
	constructor(radius){
		super();
		this.radius = radius;
	}
	area(){
		console.log(Math.PI * this.radius * this.radius)
	}
}

class Triangle extends Shape {
	constructor(length, height) {
		super();
		this.length = length;
		this.height = height
	}

	area(){
		return 0.5 * this.height * this.length
	}
}


const circle1 = new Circle(4);
const triangle1 = new Triangle(6, 5)

circle1.area()
console.log(triangle1.area())