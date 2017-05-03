function loadData() {

    var $article = $('article');
    var $catimg = $('.catimg');
    var $catname = $('.catname');
    var $numberclicks = $('.numberclicks');
    var $container = $('#container');
    var $catlist = $('#catlist');
    var $catpic = $('#catpic');

    var cats = [{
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
    }];


    for (var i = 0; i <= cats.length - 1; i++) {
        $catlist.append('<div class="catMenu catList' + i + '">' + cats[i].name + '</div>');
        $catpic.append('<div class="catname hide cat' + i + '">' + cats[i].name + '</div>' + '<img  width="400px" class="catimg hide" id="img' + i + '" src="' + cats[i].url + '"><p class="hide cat' + i + '">Number of clicks: <span id="nbclicks' + i + '">' + cats[i].clk + '</span></p>');
    };

    function createCallback(i) {
        return function() {
            cats[i].clk++;
            $('#nbclicks' + i).text(cats[i].clk);
        }
    };

    for (var i = 0; i <= cats.length; i++) {
        $('.catList' + i).click(hide(i));
    };

    for (var i = 0; i <= cats.length; i++) {
        $('#img' + i).click(createCallback(i));
    };

    function hide(i) {
        return function() {
            $('#img' + i).toggleClass("hide");
            $('.cat' + i).toggleClass("hide");
        }
    }

    return false;
};

loadData();
