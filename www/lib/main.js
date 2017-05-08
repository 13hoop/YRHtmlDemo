// main.js 
require.config({
    baseUrl: "../lib",
    paths: {
        "jquery": "jQuery2.1",
        "goTop": "GoTop",
        "banner": "SliderBanner",
        "lazyLoad": "LazyLoad",
        "waterFlow": "WaterFlow"
    }
})


require(["jquery", "banner", "waterFlow", 'goTop', 'lazyLoad'], function ($, SliderBanner, WaterFlow, GoTop, LazyLoad) {

    SliderBanner.banner($('.banner'), false)
    
    new GoTop()
    
    $.get('/flickr').done(function (data) {
        // paseJsonData
        var resluts = data["data"]
        $.each(resluts, function (idx, infoData) {

            var imgUrl = infoData.url
            //    new WaterFlow()
            new WaterFlow($('.waterFlow'), imgUrl, 200)
        })
    })

    console.log('^^^ ' + LazyLoad.init)
    LazyLoad.init($('.container img'), function($elNode) {
        var url = $elNode.attr('data-src')
        if ($elNode.hasClass('loaded')) return
        $elNode.attr('src', url)
        $elNode.addClass('loaded')
    })
})