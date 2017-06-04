describe('Address Book', function(){
	it('should be able to find a contact',function() {
	var addressBook = new AddressBook(),
		thisContact = new Contact();

	addressBook.addContact(thisContact);

	expect(addressBook.getContact(0)).toBe(thisContact);

	});
});