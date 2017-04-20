function loadData() {

    var $article = $('article');
    var $catimg = $('.catimg');
    var $numberclicks = $('#numberclicks')
    var nb = 0
    $catimg.click(function() {
        //the element has been clicked... do stuff here
        nb++;
        $numberclicks.text(nb.toString());
        console.log(nb)
    });

    return false;
};

loadData();
