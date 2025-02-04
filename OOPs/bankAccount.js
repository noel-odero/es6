class BankAccount {
	constructor(accountNum, balance){
		this.accountNum = accountNum;
		this.balance = balance;

	}

	deposit(money) {
		this.balance += money;
		console.log(`Deposited $${money}`)

	}
	withdraw(money){
		if(money <= this.balance){
			this.balance -= money;
			console.log(`Withdrawn $${money}`)
		} else {
			console.log(`Want to withdraw $${money}`)
			console.log('Insufficient balance')
		}


	}

	displayBalance (){
		console.log(`Dear customer, account number ${this.accountNum}, your balance is $${this.balance}`)
	}
}


const acc1 = new BankAccount(33433, 765)


acc1.deposit(65)
acc1.displayBalance()
acc1.withdraw(876)