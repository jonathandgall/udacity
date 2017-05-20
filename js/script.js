function loadData() {

    var model = {
        cats: [{
            "name": "Kiaousse",
            "url": "./img/cat1.jpeg",
            "clk": 0
        }, {
            "name": "Miagel",
            "url": "./img/cat2.jpeg",
            "clk": 0
        }, {
            "name": "Karambrousse",
            "url": "./img/cat3.jpeg",
            "clk": 0
        }, {
            "name": "Miaousse",
            "url": "./img/cat4.jpeg",
            "clk": 0
        }, {
            "name": "Minaude",
            "url": "./img/cat5.jpeg",
            "clk": 0
        }]
    }


    var octopus = {

        showImage: function() {
            for (var i = 0; i <= model.cats.length; i++) {
                $('#img' + i).click(octopus.showImageCallback(i));

            };
        },
        showImageCallback: function(i) {
            return function() {
                model.cats[i].clk++;
                $('#nbclicks' + i).text(model.cats[i].clk);
                $('#clickInput')[0].value = model.cats[i].clk;
                $('#save').click(function() {
                    model.cats[i].name = $('#catNameInput')[0].value;
                    model.cats[i].url = $('#urlInput')[0].value;
                    model.cats[i].clk = $('#clickInput')[0].value;
                    $('#nbclicks' + i).text(model.cats[i].clk);
                    $('#catNameId' + i).text(model.cats[i].name) ;
                    $('#admin').hide();
                    octopus.showImageCallback(i);
                });
            }
        },


        toggleFromCatList: function() {
            for (var i = 0; i <= model.cats.length; i++) {
                $('.catList' + i).click(octopus.toggle(i));
            };
        },



        CallbackCatElements: function(i) {
            return function() {
                $('#catNameInput')[0].value = model.cats[i].name;
                $('#urlInput')[0].value = model.cats[i].url;
                $('#clickInput')[0].value = model.cats[i].clk;
            };
        },

        showCatElements: function() {
            for (var i = 0; i <= model.cats.length; i++) {
                $('.catList' + i).click(octopus.CallbackCatElements(i));
            }
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

        adminShow: function() {
            return function() {
                $('#admin').show();
            }
        },

        adminHide: function() {
            return function() {
                $('#admin').hide();
            }
        },

        clickAdmin: function() {
            $('#adminButton').click(octopus.adminShow());
        },

        clickAdminCancel: function() {
            $('#cancelButton').click(octopus.adminHide());
        },




        init: function() {
            view.init();
            octopus.showImage();
            octopus.toggleFromCatList();
            octopus.showCatElements();
            octopus.clickAdmin();
            octopus.clickAdminCancel();

        }
    }

    var view = {
        init: function() {

            var $catname = $('.catname');
            var $catlist = $('#catlist');
            var $catpic = $('#catpic');
            var $admin = $('#admin');
            $('#catNameInput').value = "hello";
            var $adminButton = $('#adminButton');
            $admin.hide();

            for (var i = 0; i <= octopus.getCats().length - 1; i++) {
                $catlist.append('<div  class="catMenu catList' + i + '">' + octopus.getCats()[i].name + '</div>');
                $catpic.append('<div id ="catNameId'+ i +'" class="catname hide cat' + i + '">' + octopus.getCats()[i].name + '</div>' + '<img  width="400px" class="catimg hide" id="img' + i + '" src="' + octopus.getCats()[i].url + '"><p class="hide cat' + i + '">Number of clicks: <span id="nbclicks' + i + '">' + octopus.getCats()[i].clk + '</span></p>');
            };
        }
    }

    octopus.init();
};

loadData();
