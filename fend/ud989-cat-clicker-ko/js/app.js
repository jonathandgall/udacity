var Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com/photos/big');
    this.nicknames = ko.observableArray([
        { nick: "Tabtab" },
        { nick: "T-Bone" },
        { nick: "Mr. T" },
        { nick: "Tabitha Tab Tabby Cat" }
    ]);
    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return "NewBorn"
        } else if (this.clickCount() < 20) {
            return "Infant"
        } else {
            return "Teen"
        }
    }, this)
};

var ViewModel = function() {

    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1)
    };

};

ko.applyBindings(new ViewModel())
