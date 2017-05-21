var initialCats = [{
    clickCount: 0,
    name: 'Kiaousse',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nicknames: ko.observableArray([
        { nick: "Tabtab" },
        { nick: "T-Bone" },
        { nick: "Mr. T" },
        { nick: "Tabitha Tab Tabby Cat" }
    ])
}, {
    clickCount: 0,
    name: "Tabby",
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nicknames: ko.observableArray([
        { nick: "Tiger" }
    ])
}, {
    clickCount: 0,
    name: "Karambrousse",
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nicknames: ko.observableArray([
        { nick: "Tendre" }
    ])
}, {
    clickCount: 0,
    name: "Miaousse",
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nicknames: ko.observableArray([
        { nick: "Taneur" }
    ])
}, {
    clickCount: 0,
    name: "Minaude",
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flickr.com',
    nicknames: ko.observableArray([
        { nick: "Luce" }
    ])
}];


var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = data.nicknames;

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
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.setCurrentCat = function(clickedCat) {
    	//self because I want to access the viewmodel where the current cat lives
        self.currentCat(clickedCat);
    };

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1)
    };
};

ko.applyBindings(new ViewModel())
