class Employee {
	constructor(name, salary) {
		this.name = name
		this.salary = salary
	}

	annualSalary(){
		console.log(`${this.name} earns ${this.salary * 12} per annum`)
	}
}

class Manager extends Employee {
	constructor(name, salary, department){
		super(name, salary)
		this.department = department
	}

	annualSalary(){
		const baseSalary = super.annualSalary();
		const bonus = 0.1
		console.log(`Managers from ${this.department} department get a ${bonus * 100}% bonus so their salary in total becomes ${baseSalary +( baseSalary * bonus)}`)

	}
}


const employee = new Employee("Noel", 4000)
employee.annualSalary()

const manager = new Manager("Alice", 5000, "HR");
manager.annualSalary();
