function loadData() {

    var $article = $('article');
    var $catimg = $('.catimg');
    var $catname = $('.catname');
    var $numberclicks = $('.numberclicks');
    var $container = $('#container');

    var nb0 = 0;
    var nb1 = 0;

    var cats = [{
        "name": "Kiaousse",
        "url": "http://thecatapi.com/api/images/get?format=src&type=jpg",
        "clk": 0
    }, {
        "name": "Miagel",
        "url": "http://lorempixel.com/400/200/cats",
        "clk": 0
    }];


    for (var i = 0; i <= cats.length - 1; i++) {
        $container.append('<div class="catname">' + cats[i].name + '</div>' + '<img  width="400px" class="catimg" id="img' + i + '" src="' + cats[i].url + '"><p>Number of clicks: <span id="nbclicks' + i + '">' + cats[i].clk + '</span></p>');
    };

    function createCallback(i) {
        return function() {
            cats[i].clk++;
            $('#nbclicks'+i).text(cats[i].clk);
        }
    }

    for (var i = 0; i <= cats.length; i++) {
        $('#img' + i).click(createCallback(i));
        };

    return false;
};

loadData();