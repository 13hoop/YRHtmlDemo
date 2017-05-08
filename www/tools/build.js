//build.js文件
({
    baseUrl: "../lib",
    paths: {
        "jquery": "jQuery2.1",
        "goTop": "GoTop",
        "banner": "SliderBanner",
        "lazyLoad": "LazyLoad",
        "waterFlow": "WaterFlow",
        "flowLayout": "FlowLayout"
   },
   name: "main",  //name为需要打包压缩js文件的入口文件名字
   out: "../dist/merge.js" //out为压缩完成后输出的文件名字
})