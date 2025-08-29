const { getObject, getStudent, getBankAccount,handleInventory,getCompany } = require('./object.js');

test('person object has correct name', () => {
    const person = getObject();
    expect(person.name).toBe("JohnDoe");
});

test('person object has correct age', () => {
    const person = getObject();
    expect(person.age).toBe(22);
});

test('person is enrolled in Physics', () => {
    const person = getObject();
    expect(person.courses).toContain("Physics");
});

test('person has correct zip code', () => {
    const person = getObject();
    expect(person.address.zip).toBe(10001);
});


test('student has correct name', () => {
    const student = getStudent();
    expect(student.name).toBe("John Doe");
});

test('student has correct age', () => {
    const student = getStudent();
    expect(student.age).toBe(23);
});

test('student has correct GPA', () => {
    const student = getStudent();
    expect(student.GPA).toBe(3.8);
});

test('getDetails() returns correct string', () => {
    const student = getStudent();
    expect(student.getDetails()).toBe("John Doe is 23 years old and has a GPA of 3.8");
});

test('initial balance is 500', () => {
    const account = getBankAccount();
    expect(account.getBalance()).toBe(500);
});

test('deposit adds to balance', () => {
    const account = getBankAccount();
    account.deposit(200);
    expect(account.getBalance()).toBe(700);
});

test('withdraw subtracts from balance when funds are sufficient', () => {
    const account = getBankAccount();
    const result = account.withdraw(300);
    expect(result).toBe(true);
    expect(account.getBalance()).toBe(200);
});

test('withdraw fails when funds are insufficient', () => {
    const account = getBankAccount();
    const result = account.withdraw(1000);
    expect(result).toBe(false);
    expect(account.getBalance()).toBe(500);
});


test('prints correct fruit quantities', () => {
    const inventory = handleInventory();
    const expected = [
        "apple: 10",
        "banana: 5",
        "orange: 8",
        "mango: 12"
    ];
    expect(inventory.getFruitQuantities()).toEqual(expected);
});

test('calculates total number of fruits correctly', () => {
    const inventory = handleInventory();
    expect(inventory.getTotalQuantity()).toBe(35);
});


test('company name and location are correct', () => {
    const company = getCompany();
    const { name, location } = company;
    expect(name).toBe("TechCorp");
    expect(location).toBe("San Francisco");
});

test('second employee\'s name is Bob', () => {
    const company = getCompany();
    expect(company.employees[1].name).toBe("Bob");
});

test('employees have correct names and departments', () => {
    const company = getCompany();
    const expected = [
        { name: "Alice", department: "Engineering" },
        { name: "Bob", department: "HR" },
        { name: "Charlie", department: "Marketing" },
        { name: "Diana", department: "Engineering" }
    ];

    const result = company.employees.map(emp => ({
        name: emp.name,
        department: emp.department
    }));

    expect(result).toEqual(expected);
});



