const Contact = require('./contact.js');

class PhoneBook {
    constructor() {
        this.contacts = [];
    }
    addContact(contact) {
        this.contacts.push(contact);
    }
    removeContact(phoneNumber) {
        this.contacts = this.contacts.filter(contact => contact.phoneNumber !== phoneNumber);
    }
    findByPhoneNumber(phoneNumber) {
        return this.contacts.find(contact => contact.phoneNumber === phoneNumber) || null;
    }
    findByFirstName(firstName) {
        return this.contacts.find(contact => contact.firstName.toLowerCase() === firstName.toLowerCase());
    }
    findByLastName(lastName) {
        return this.contacts.find(contact => contact.lastName.toLowerCase() === lastName.toLowerCase());
    }
    editContact(oldPhoneNumber, newContact) {
        const existing = this.findByPhoneNumber (oldPhoneNumber);
        if (existing) {
            existing.update (
                newContact.firstName,
                newContact.lastName,
                newContact.phoneNumber,
            );
        }
    }
    getAllContacts() {
        return this.contacts;
    }
}

module.exports = PhoneBook;