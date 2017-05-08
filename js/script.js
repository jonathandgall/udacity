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
                for (var y = 0; y <= model.cats.length; y++) {
                    $('#img' + y).hide();
                    $('.cat' + y).hide();
                };
                $('#img' + i).show();
                $('.cat' + i).show();
            }
        },

        getCats: function() {
            return model.cats;
        },


        init: function() {
            view.init();
            octopus.showImage();
            octopus.toggleFromCatList();

        }
    }

    var view = {
        init: function() {
            for (var i = 0; i <= octopus.getCats().length - 1; i++) {
                $catlist.append('<div class="catMenu catList' + i + '">' + octopus.getCats()[i].name + '</div>');
                $catpic.append('<div class="catname hide cat' + i + '">' + octopus.getCats()[i].name + '</div>' + '<img  width="400px" class="catimg hide" id="img' + i + '" src="' + octopus.getCats()[i].url + '"><p class="hide cat' + i + '">Number of clicks: <span id="nbclicks' + i + '">' + octopus.getCats()[i].clk + '</span></p>');
            };
        }
    }

    octopus.init();
};

loadData();
