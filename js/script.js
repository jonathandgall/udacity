function loadData() {

    var $catname = $('.catname');
    var $catlist = $('#catlist');
    var $catpic = $('#catpic');


    var model = {
        cats: [{
            "name": "Kiaousse",
            "url": "./img/cat1.jpeg",
            "clk": 0,
            "hided": 1
        }, {
            "name": "Miagel",
            "url": "./img/cat2.jpeg",
            "clk": 0,
            "hided": 1
        }, {
            "name": "Karambrousse",
            "url": "./img/cat3.jpeg",
            "clk": 0,
            "hided": 1
        }, {
            "name": "Miaousse",
            "url": "./img/cat4.jpeg",
            "clk": 0,
            "hided": 1
        }, {
            "name": "Minaude",
            "url": "./img/cat5.jpeg",
            "clk": 0,
            "hided": 1
        }]
    }


    var octopus = {
        createCallback: function(i) {
            return function() {
                model.cats[i].clk++;
                $('#nbclicks' + i).text(model.cats[i].clk);
            }
        },

        toggleFromCatList: function() {
            for (var i = 0; i <= model.cats.length; i++) {
                $('.catList' + i).click(octopus.toggle(i));
            };
        },

        showImage: function() {
            for (var i = 0; i <= model.cats.length; i++) {
                $('#img' + i).click(octopus.createCallback(i));
            };
        },

        toggle: function(i) {
            return function() {
                $('#img' + i).toggleClass("hide");
                $('.cat' + i).toggleClass("hide");
            }
        },
        init: function() {
            view.init();
            octopus.showImage();
            octopus.toggleFromCatList();

        }
    }

    var view = {
        init: function() {
            for (var i = 0; i <= model.cats.length - 1; i++) {
                $catlist.append('<div class="catMenu catList' + i + '">' + model.cats[i].name + '</div>');
                $catpic.append('<div class="catname hide cat' + i + '">' + model.cats[i].name + '</div>' + '<img  width="400px" class="catimg hide" id="img' + i + '" src="' + model.cats[i].url + '"><p class="hide cat' + i + '">Number of clicks: <span id="nbclicks' + i + '">' + model.cats[i].clk + '</span></p>');
            };
        }
    }

    octopus.init();
};

loadData();
