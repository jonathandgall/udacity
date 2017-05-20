function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');


    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");


    //GoogleStreetView
    var streetStr = $('#street').val();
    var cityStr = $("#city").val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text('So, you want to live at ' + address + '?');
    var streetviewUrl = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address;
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    //NYTimes Ajax Request

    var items = [];
    var nyTimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + address + '&page=1&sort=newest&api-key=b6937703c0834ab6a5c30e3b668b104a'

    $.getJSON(nyTimesUrl, function(data) {

        $nytHeaderElem.text('New York Times Articles About ' + cityStr);

        $.each(data.response.docs, function(key, val) {
            items.push('<li class="article"> <a href="' + data.response.docs[key].web_url + '">' + data.response.docs[key].headline.main + '</a>' + '<p>' + data.response.docs[key].snippet + '</p>' + '</li>');
        })

        for (var i = 0; i <= items.length - 1; i++) {
            $nytElem.append(items[i]);
        }
    }).fail((function() {
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');;
    }));

    return false;
};


$('#form-container').submit(loadData);
