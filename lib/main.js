// main.js 
require.config({
    baseUrl: "/lib",
    paths: {
        "jquery": "../jQuery2.1",
        "goTop": "GoTop",
        "banner": "SliderBanner",
        "lazyLoad": "LazyLoad",
        "waterFlow": "WaterFlow"
    }
})


require(["jquery", "banner", "waterFlow", 'goTop'], function ($, SliderBanner, WaterFlow, GoTop) {
       SliderBanner.banner($('.banner'), false)

       new GoTop()
       $.get('/flickr').done(function(data) {
            // paseJsonData
            var resluts = data["data"]
            $.each(resluts, function (idx, infoData) {

                var imgUrl = infoData.url
                //    new WaterFlow()
                new WaterFlow($('.waterFlow'), imgUrl, 200)               
            })
        })
})