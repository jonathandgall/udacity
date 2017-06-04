function AddressBook() {
	var catalog = [];
    this.addContact = function(contact) {
        catalog.push(contact);
    };
    this.getContact = function(number) {
        return catalog[0];
    };
}
