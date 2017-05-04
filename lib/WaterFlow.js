define(['jquery'], function ($) {
    'use strict';

        var rowList = []
        var WaterFlow = function(target, url, preHeight) {
            this.$target = $(target)
            this.imgUr = url
            this.preHeight = preHeight
            this.init() 
        }
        WaterFlow.prototype.init = function() {
            var _this = this
            var img = new Image()
            img.onload = function () {
                var preElm = _this.preJustify(_this.preHeight, img)
                _this.renderElm(preElm)
            }
            img.src = _this.imgUr
        }
        WaterFlow.prototype.preJustify = function(preHeight, elm) {
            var orign_H = elm.height
            var orign_W = elm.width
            var preElm = {
                elm: elm,
                height: preHeight,
                width: orign_W * preHeight / orign_H
            }
            return preElm
        }
        WaterFlow.prototype.renderElm = function(info) {
            var _this = this
            var rowSum = 0
            var _rowHeight = 0
            var lastInfo = info
            rowList.push(info)
            var _rowList = rowList
            var flickrWidth = _this.$target.width()
            console.log('in render: ' + info)

            $.each(_rowList, function (idx, elmInfo) {
                rowSum += elmInfo.width // [1,2,3]
                console.log('compare rowSum: ' + rowSum + ' flcW: '+ flickrWidth)
                if (rowSum > flickrWidth) {
                    console.log('🚗')
                    // 去除最后一个,得到完整的一行
                    _rowList.pop()                                   // [1,2]
                    var _k = flickrWidth / (rowSum - lastInfo.width)
                    _rowHeight = elmInfo.height * _k
                    // 创建行，并对行内所有元素调整
                    _this.createAndLayoutInRow(_rowHeight)
 
                    rowList = []
                    rowList.push(lastInfo)                         // [3]
                }
            })
        }
        WaterFlow.prototype.createAndLayoutInRow = function(rowHeight) {
            var _this = this
            var row = $('<div class="clearFix"></div>')
            $.each(rowList, function (idx, rowCell) {
                var $imgCt = $('<div style="float: left; margin-top: 5px; margin-bottom: 5px"></div>')
                var $elm = $(rowCell.elm)
                $elm.height(rowHeight)
                $imgCt.append($elm)
                row.append($imgCt)
            })
            // console.log(row)
            _this.$target.append(row)
        }


        // // creat row
        // function createAndLayoutInRow(rowHeight) {
        //     console.log(' here ! ')
        //     var row = $('<div class="row clearFix"></div>')
        //     $.each(rowList, function (idx, rowCell) {
        //         var $imgCt = $('<div class="img-box"></div>')
        //         var $elm = $(rowCell.elm)
        //         $elm.height(rowHeight)
        //         $imgCt.append($elm)
        //         row.append($imgCt)
        //     })
        //     console.log(row)
        //     $flickr.append(row)
        // }
        // // render element
        // var flickrWidth = $flickr.width()
        // var renderElm = function (info) {
        //     var rowSum = 0
        //     var _rowHeight = 0
        //     var lastInfo = info
        //     rowList.push(info)
        //     var _rowList = this.rowList

        //     console.log('in render: ' + info)
        //     $.each(_rowList, function (idx, elmInfo) {
        //         rowSum += elmInfo.width // [1,2,3]
        //         console.log('compare rs: ' + rowSum + ' flcW: '+ flickrWidth)
        //         if (rowSum > flickrWidth) {
        //             console.log('🚗')
        //             // 去除最后一个,得到完整的一行
        //             _rowList.pop()                                   // [1,2]
        //             var _k = flickrWidth / (rowSum - lastInfo.width)
        //             _rowHeight = elmInfo.height * _k
        //             // 创建行，并对行内所有元素调整
        //             createAndLayoutInRow(_rowHeight)
        //             rowList = []
        //             rowList.push(lastInfo)                         // [3]
        //         }
        //     })
        // }
        // // create elements
        // $.each(resluts, function (idx, infoData) {
        //     var imgUrl = infoData.url
        //     var img = new Image()
        //     img.onload = function () {
        //         // console.log(img)
        //         var preHeight = 200
        //         var preElm = preJustify(preHeight, img)
        //         renderElm(preElm)
        //     }
        //     img.src = imgUrl
        // })

    return WaterFlow 
})












        // loaded data from ajax
        // var resluts = [
        //     {
        //         // wdith: "412",
        //         // height: "275",
        //         url: "http://c1.staticflickr.com/3/2880/33864492791_8231e87989.jpg"
        //     },
        //     {
        //         // wdith: "335",
        //         // height: "224",
        //         url: "http://c1.staticflickr.com/3/2826/33609965560_b5e3026661.jpg"
        //     },
        //     {
        //         // wdith: "337",
        //         // height: "224",
        //         url: "http://c1.staticflickr.com/3/2933/33181056303_2f3eb130e3.jpg"
        //     },
        //     {
        //         // wdith: "336",
        //         // height: "224",
        //         url: "http://c1.staticflickr.com/3/2923/33843915962_622f0c4c79.jpg"
        //     },
        //     {
        //         // wdith: "345",
        //         // height: "276",
        //         url: "http://c1.staticflickr.com/3/2814/33996006565_c5a462d09b.jpg"
        //     },
        //     {
        //         // wdith: "277",
        //         // height: "276",
        //         url: "http://c1.staticflickr.com/3/2873/33842615112_9a285a293a.jpg"
        //     },
        //     {
        //         // wdith: "386",
        //         // height: "276",
        //         url: "http://c1.staticflickr.com/3/2826/33960436266_88898a17b8.jpg"
        //     },
        //     {
        //         // wdith: "312",
        //         // height: "208",
        //         url: "http://c1.staticflickr.com/3/2909/33146955834_1b4ec99f5f.jpg"
        //     },
        //     {
        //         // wdith: "312",
        //         // height: "208",
        //         url: "http://c1.staticflickr.com/3/2844/33993439575_50beebf9a9.jpg"
        //     },
        //     {
        //         // wdith: "384",
        //         // height: "208",
        //         url: "http://c1.staticflickr.com/3/2819/33840960752_e4910761be.jpg"
        //     },
        //     {
        //         // wdith: "399",
        //         // height: "266",
        //         url: "http://c1.staticflickr.com/3/2942/33181379533_d4b50f1ef6.jpg"
        //     },
        //     {
        //         // wdith: "399",
        //         // height: "266",
        //         url: "http://c1.staticflickr.com/3/2917/33826955322_8bc6178676.jpg"
        //     },
        //     {
        //         // wdith: "210",
        //         // height: "266",
        //         url: "http://c1.staticflickr.com/3/2813/33835099182_89103c052b_m.jpg"
        //     }
        // ]