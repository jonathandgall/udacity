var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
	this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1)
	};
}

ko.applyBindings(new ViewModel())