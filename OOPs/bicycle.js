// Create a Bicycle subclass that extends the Vehicle class. The Bicycle subclass should override Vehicle's constructor function by changing the default values for wheels from 4 to 2 and horn from 'beep beep' to 'honk honk'.

/*
 * Programming Quiz: Building Classes and Subclasses (2-3)
 */

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		return this.horn;
	}
}

class Bicycle extends Vehicle {
	constructor(color = 'blue', wheels = 2, horn = 'honk honk'){
		super(color, wheels, horn)
	}

	// honkHorn() {
	// 	super.honkHorn()
	// }

}



const myVehicle = new Vehicle();
console.log(myVehicle.honkHorn());
const myBike = new Bicycle();
console.log(myBike.honkHorn()); 

