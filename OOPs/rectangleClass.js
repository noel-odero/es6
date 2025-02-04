// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
	constructor(width, height) {
		 this.width = width;
		 this.height = height
	}

	rectangleArea() {
		console.log(this.width * this.height)
	}

	rectanglePerimeter() {
		console.log(2 * (this.width + this.height))
	}
}

const rectangle1 = new Rectangle(4, 5)


rectangle1.rectangleArea();
rectangle1.rectanglePerimeter();