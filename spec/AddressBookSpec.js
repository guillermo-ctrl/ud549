describe('Address Book', function(){
    var addressBook,
        thisContact;

    beforeEach(function(){
        addressBook = new AddressBook();
        thisContact = new Contact();
    });
    
    it('should be able to add a contact', function() {
        addressBook.addContact(thisContact);
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    it('should be able to delete a contact', function() {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);
        expect(addressBook.deleteContact(0)).not.toBeDefined();
    });
});

describe('Address Book', function(){
    it('should grab initial contacts', function() {
        addressBook = new AddressBook();
        addressBook.getInitialContacts();
        expect(addressBook.initialComplete).toBe(true);
    });
});
