const Contact = require('./contact.js');
const PhoneBook = require('./phoneBook.js');


describe("PhoneBook", () => {
    let phonebook;

    beforeEach(() => {
        phonebook = new PhoneBook();
    });

    test('Add Contact', () => {
        const contact = new Contact("Ayo", "Ade", "08012345678");
        phonebook.addContact(contact);
        expect(phonebook.getAllContacts().length).toBe(1);
    })

    test('Remove Contact', () => {
        const contact = new Contact("Sola", "Ojo", "08012345679");
        phonebook.addContact(contact);
        phonebook.removeContact("08012345679");
        expect(phonebook.getAllContacts().length).toBe(0);
    })
    test('Find by Phone Number', () => {
        const contact = new Contact("Sola", "Ojo", "08012345679")
        phonebook.addContact(contact);
        const result = phonebook.findByPhoneNumber("08012345679");
        expect(result).toBeDefined();
        expect(result.firstName).toBe("Sola");
    })
})