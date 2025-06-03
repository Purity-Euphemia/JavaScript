console.log("Welcome to ATM app")

let accounts = 0;

function create_account(){
	while (true) {
		let account_number = prompt("Enter new account number(up to 10 digits): ")
		if (account_number != 10)  {
			console.log("Invalid account number! Must be digits only and max 10 digits")
}
		else if (account_number == accounts){
			console.log("Account number already exists! Try another.")
}
		else {
			accounts[account_number] = 0
			console.log("Account " +  account_number  +  "created Your current balance $0")
} 
}		break	




function deposit(){
	let account_number = prompt("Enter account number to deposit money: ")
	if (account_number == accounts) {
		let amount = float(input("Enter amount to deposit: "))
}
		if (amount > 0) {
			accounts[account_number] += amount
			console.log("amount" +  deposited account + "account_number". +  New balance: +  "accounts[account_number")
}
		else {
			console.log("Please enter a positive amount: ")
}
	else {
		console.log("Account number not found")
}

}




funtion withdraw() {
	let account_number = prompt("Enter account number to withdraw money: ")
	if (account_number == accounts) {
		if (accounts(account_number) <= 0) {
			console.log("Your account has no money left to withdraw")

}
			return
		let amount = float(input("Enter withdrawal amount multiples of #500 or #1000: "))
		if (amount < 500) {
			console.log("invalid amount! Withdrawals must be in multiples of #500 or #1000")
}
		else if (amount < 90) {
			console.log("whithdrawal failed! You cannot withdraw more than 90% of your balance")
}
		else {	
			accounts[account_number] -= amount + 100
			console.log("transaction successful")
			console.log("amount" + withdraw from account + "account_number". +  Remaining balance: +  "accounts[account_number")

}
	else:
		console.log("Account number not found")

}
}


function close_account() {
	let account_number = prompt("Enter account number to close: ")
	if (account_number == accounts) {
		confirm = prompt(f"Are you sure you want to close: ")
		if (confirm == yes) {
			del accounts[account_number]
			console.log(Account + "account_number" +  closed successfully")
}

}
		else {
			console.log("Account closure canceled")

}
	else {
		console.log("Account number not found")


}

}









while (true)
	console.log("1. create account")
	console.log("2. deposit")
	console.log("3. Withdraw money")
	console.log("4. Close account")
	console.log("5. Exist")

	let choice = prompt("Enter your choice(1-6): ")


	if choice == '1':
		create_account()
	else if choice == '2':
		deposit()
	else if choice == '3':
		withdraw()
	else if choice == '4':
		close_account()
	else if choice == '5':
		console.log("Thanks for using simple bank app. Goodbye")
		break
	else:
		console.log("please enter a number between 1 and 7")






