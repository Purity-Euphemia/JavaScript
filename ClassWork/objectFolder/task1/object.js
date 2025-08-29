

function getObject(){
    let person = {
        name: "JohnDoe",
        age: 22,
        courses: ["Math", "Physics", "Computer Science"],
        address: {
            city: "New York",
            zip: 10001,
        }
    };
    return person;
}

function getStudent() {
    return {
        name: "John Doe",
        age: 23,
        GPA: 3.8,
        getDetails() {
            return this.name + " is " + this.age + " years old and has a GPA of " + this.GPA;
        }
    };
}

function getBankAccount() {
    let owner = "Alice";
    let balance = 500;

    function deposit(amount) {
        balance += amount;
    }

    function withdraw(amount) {
        if (amount > balance) {
            return false;
        } else {
            balance -= amount;
            return true;
        }
    }

    function getBalance() {
        return balance;
    }

    return {
        owner: owner,
        deposit,
        withdraw,
        getBalance
    };
}


function handleInventory() {
    const inventory = {
        apple: 10,
        banana: 5,
        orange: 8,
        mango: 12
    };

    function getFruitQuantities() {
        const fruits = Object.keys(inventory);
        const result = [];
        for (let count = 0; count < fruits.length; count++) {
            const fruit = fruits[count];
            result.push(`${fruit}: ${inventory[fruit]}`);
        }
        return result;
    }

    function getTotalQuantity() {
        const fruits = Object.keys(inventory);
        let total = 0;
        for (let count = 0; count < fruits.length; count++) {
            total += inventory[fruits[count]];
        }
        return total;
    }

    return {
        getFruitQuantities,
        getTotalQuantity
    };
}

function getCompany() {
    return {
        name: "TechCorp",
        location: "San Francisco",
        employees: [
            { id: 1, name: "Alice", department: "Engineering" },
            { id: 2, name: "Bob", department: "HR" },
            { id: 3, name: "Charlie", department: "Marketing" },
            { id: 4, name: "Diana", department: "Engineering" }
        ]
    };
}






const account = getBankAccount();
account.deposit(200);
const success = account.withdraw(100);
console.log("Withdrawal successful? " + success);
console.log(account.getBalance());

console.log(getObject().name);
console.log(getObject().courses[1]);
console.log(getObject().address.zip);
console.log(getStudent().getDetails());






module.exports = { getObject,getStudent,getBankAccount,handleInventory,getCompany};

