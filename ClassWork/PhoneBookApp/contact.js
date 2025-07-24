class Contact {
    constructor(firstName, lastName, phoneNumber) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }
    setPhoneNumber(value) {
        this._phoneNumber = value;
    }

    updatePhoneNumber({firstName, lastName, phoneNumber}) {
        if (firstName) this.firstName = firstName;
        if (lastName) this.lastName = lastName;
        if (phoneNumber) this.phoneNumber = phoneNumber;
    }
    toString() {
        return `${this.firstName} ${this.lastName} - ${this.phoneNumber}`;
    }
}

module.exports = Contact;