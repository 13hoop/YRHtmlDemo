/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/hello', function (req, res) {
	res.send({
		status: 0,
		msg: "hello 饥人谷"
	});
});

/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/user/:uid', function (req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); res.send({
		status: 1,
		errorMsg: "请先注册"
	});
});

/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */
app.post('/comment', function (req, res) {
	console.log(req.body.comment); res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});

/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function (req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});

app.get('/flickr', function (req, res) {
	console.log(' -⛩⛩' + req.query)
	var data = [{
		url: "http://c1.staticflickr.com/3/2880/33864492791_8231e87989.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2826/33609965560_b5e3026661.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2933/33181056303_2f3eb130e3.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2923/33843915962_622f0c4c79.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2814/33996006565_c5a462d09b.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2873/33842615112_9a285a293a.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2826/33960436266_88898a17b8.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2909/33146955834_1b4ec99f5f.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2844/33993439575_50beebf9a9.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2819/33840960752_e4910761be.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2942/33181379533_d4b50f1ef6.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2917/33826955322_8bc6178676.jpg"
	},
	{
		url: "http://c1.staticflickr.com/3/2813/33835099182_89103c052b_m.jpg"
	},
	{ url: "https://c1.staticflickr.com/5/4178/34422698596_3a37686be5_b.jpg" },
	{ url: "https://c1.staticflickr.com/5/4165/34078735770_79d1b0f3b1_b.jpg" },
	{ url: "https://c1.staticflickr.com/5/4168/34422708866_ce61e23f36_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4169/34304156872_2f2d095261_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4155/34304281432_f45beda4b7_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4155/33621704254_3754a9d986_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4156/33621839354_bc035d04c3_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4155/34304281432_f45beda4b7_h.jpg" },
	{ url: "https://c1.staticflickr.com/3/2848/34304408112_51a5e6b5c4_b.jpg" },
	{ url: "https://c1.staticflickr.com/5/4187/34422557966_70e5f01fa1_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4174/33621593084_ded0efd0a7_c.jpg" },
	{ url: "https://c1.staticflickr.com/5/4188/33621598234_f3e0a8be61_b.jpg" },
	{ url: "https://c1.staticflickr.com/5/4157/34304289092_6cd1ddf7c7_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4168/34304291242_9cc3d31392_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4172/34304291832_5556254b03_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4192/34304292712_57a7d44f16_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4185/34304297062_90b456a79d_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4157/34422287466_bda9122ee6_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4180/33621709204_365aca0462_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4170/33621713854_e30222ad04_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4165/33653832953_ff347ee2ba_h.jpg" },
	{ url: "https://c1.staticflickr.com/5/4183/33653833803_f1d7a6dc30_b.jpg" },
	{ url: "https://c1.staticflickr.com/5/4194/33653953853_01c0355427_h.jpg" }
	]
	res.send({
		"status": 0,
		"data": data
	})
})

/**
 * GET news test 
 * url: /getNews&page=1
 */
app.get('/getNews', function (req, res) {
	var news = [
		{
			link: 'http://view.inews.qq.com/a/20160830A02SEB00',
			img: 'https://cdn.sspai.com/2017/03/27/0058cc605cfcf659750fdedbbae39a41.png?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '优秀的流媒体播放平台：Spotify 体验',
			brif: '我会继续用下去吗？答案显然是肯定的，Spotify 物有所值。我会推荐它给身边的人使用吗？不会，作为一个没有进入国内的服务，Spotify 使用成本同国产应用相比要高很多，而其所具备的优点也提供不了足够多更换到 Spotify 的动力。'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/article/5ee40e44-d505-5936-4088-474b3c538bec.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '⌘ Space：LaunchBar 的力量',
			brif: '介绍 ⌘ Space 的历史或者说介绍 LaunchBar 的历史，是为了帮助理解： LaunchBar 与 Alfred 和 Spotlight 虽功能相似，但是在最初之时的设计理念就有所不同，Alfred 是一个站在系统旁边的「助手」，自己就能完成各种事；LaunchBar 本质上是一扎脚本的集合，对各种「变量」传入传出处理很好。'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/2017/03/22/dcfdfe59634a87d4d5c60ee098d777b0.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '⌘ Space：LaunchBar 的力量',
			brif: '介绍 ⌘ Space 的历史或者说介绍 LaunchBar 的历史，是为了帮助理解： LaunchBar 与 Alfred 和 Spotlight 虽功能相似，但是在最初之时的设计理念就有所不同，Alfred 是一个站在系统旁边的「助手」，自己就能完成各种事；LaunchBar 本质上是一扎脚本的集合，对各种「变量」传入传出处理很好。'
		},
		{
			link: 'http://view.inews.qq.com/a/20160828A007LB00',
			img: 'https://cdn.sspai.com/article/d89ef85d-4891-d2d3-5c71-29c79336d318.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '派读 | 为播客的可听性稍微付出一些投入是值得的',
			brif: '为播客的可听性稍微付出一些投入是值得的；AirPods 依然是简洁和易用的无线耳机；世界上最顶尖的设计师的生活是什么样子的？'
		},
		{
			link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
			img: 'https://cdn.sspai.com/article/995de065-2bdb-fc40-0ca1-ecbd65eef62a.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '具透 | 升级 iOS 10.3 后存储空间变多了？这都是 APFS 的功劳',
			brif: '很多用户在升级 iOS 10.3 后，发现设备的可用存储空间莫名变多了，这里面很大一部分是 APFS 的功劳。APFS 是什么？它带来了哪些改变？苹果为什么要使用 APFS？这篇文章为你一一详解。'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/article/1b653e1e-56e1-2463-e5a1-57412122f574.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '他们这样提升效率 | 专栏推荐 [福利]',
			brif: '少数派有不少用户都非常注重「效率」这件事情，他们在 Matrix 分享了不少关于如何提升效率的文章。比如，如何用 Workflow 把多步操作化繁为简；遵循 GTD 每一条准则把每一项任务都有序的安排...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/2017/03/20/53d2e2730f5f52f70ae720d77e01594c.png?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: 'Mac 外接显示器的 2 个基础小技巧 ',
			brif: '通常我们为 Mac 外接显示器，都是为了扩展屏幕，以平铺更多窗口、展示更多内容。这篇文章介绍两个关于多显示器很基础但又总有人没发现的小技巧。'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/article/d89ef85d-4891-d2d3-5c71-29c79336d318.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: 'Workflow 移除了 Pocket 动作？教你做个更强大的',
			brif: '苹果因为法律原因临时移除了一批 Workflow 中的第三方应用，本文以 Pocket 为例，使用 API 还原了 Workflow 中的 Pocket 功能，甚至可以说比之前功能更丰富。你也可以用同样的方式，在 Workflow 中找回其它被苹果移除的服务。'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/2017/03/20/53d2e2730f5f52f70ae720d77e01594c.png?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: 'Tweetbot 的进阶使用技巧：屏蔽',
			brif: '屏蔽是个很好的功能。它既是过滤有效信息的关键道具之一，也是不想看对方某方面的发言却又不想 Unfo 得罪他的社交法宝，还是自己在不感兴趣的重大事件发生时带来的信息风暴的避风港。'
		},
		{
			link: 'http://view.inews.qq.com/a/20160830A02SEB00',
			img: 'https://cdn.sspai.com/2017/03/27/0058cc605cfcf659750fdedbbae39a41.png?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '优秀的流媒体播放平台：Spotify 体验',
			brif: '我会继续用下去吗？答案显然是肯定的，Spotify 物有所值。我会推荐它给身边的人使用吗？不会，作为一个没有进入国内的服务，Spotify 使用成本同国产应用相比要高很多，而其所具备的优点也提供不了足够多更换到 Spotify 的动力。'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/article/ff724a7d-b8c8-a362-6ae0-7d7389c40939.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '⌘ Space：LaunchBar 的力量',
			brif: '介绍 ⌘ Space 的历史或者说介绍 LaunchBar 的历史，是为了帮助理解： LaunchBar 与 Alfred 和 Spotlight 虽功能相似，但是在最初之时的设计理念就有所不同，Alfred 是一个站在系统旁边的「助手」，自己就能完成各种事；LaunchBar 本质上是一扎脚本的集合，对各种「变量」传入传出处理很好。'
		},
		{
			link: 'http://view.inews.qq.com/a/20160828A007LB00',
			img: 'https://cdn.sspai.com/article/14384c1b-5e5c-b480-425e-058ac3e02c28.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '派读 | 为播客的可听性稍微付出一些投入是值得的',
			brif: '为播客的可听性稍微付出一些投入是值得的；AirPods 依然是简洁和易用的无线耳机；世界上最顶尖的设计师的生活是什么样子的？'
		},
		{
			link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
			img: 'https://cdn.sspai.com/article/995de065-2bdb-fc40-0ca1-ecbd65eef62a.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '具透 | 升级 iOS 10.3 后存储空间变多了？这都是 APFS 的功劳',
			brif: '很多用户在升级 iOS 10.3 后，发现设备的可用存储空间莫名变多了，这里面很大一部分是 APFS 的功劳。APFS 是什么？它带来了哪些改变？苹果为什么要使用 APFS？这篇文章为你一一详解。'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/article/1b653e1e-56e1-2463-e5a1-57412122f574.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: '他们这样提升效率 | 专栏推荐 [福利]',
			brif: '少数派有不少用户都非常注重「效率」这件事情，他们在 Matrix 分享了不少关于如何提升效率的文章。比如，如何用 Workflow 把多步操作化繁为简；遵循 GTD 每一条准则把每一项任务都有序的安排...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/2017/03/20/53d2e2730f5f52f70ae720d77e01594c.png?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: 'Mac 外接显示器的 2 个基础小技巧 ',
			brif: '通常我们为 Mac 外接显示器，都是为了扩展屏幕，以平铺更多窗口、展示更多内容。这篇文章介绍两个关于多显示器很基础但又总有人没发现的小技巧。'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/article/ff724a7d-b8c8-a362-6ae0-7d7389c40939.jpg?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: 'Workflow 移除了 Pocket 动作？教你做个更强大的',
			brif: '苹果因为法律原因临时移除了一批 Workflow 中的第三方应用，本文以 Pocket 为例，使用 API 还原了 Workflow 中的 Pocket 功能，甚至可以说比之前功能更丰富。你也可以用同样的方式，在 Workflow 中找回其它被苹果移除的服务。'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'https://cdn.sspai.com/2017/03/20/53d2e2730f5f52f70ae720d77e01594c.png?imageMogr2/quality/95/thumbnail/!700x233r/gravity/Center/crop/700x233',
			title: 'Tweetbot 的进阶使用技巧：屏蔽',
			brif: '屏蔽是个很好的功能。它既是过滤有效信息的关键道具之一，也是不想看对方某方面的发言却又不想 Unfo 得罪他的社交法宝，还是自己在不感兴趣的重大事件发生时带来的信息风暴的避风港。'
		}
	]
	var pageIndex = req.query.page;
	var len = 1;
	var retNews = news.slice(pageIndex * len, pageIndex * len + len); //0, 1;  3, 6
	console.log('query BD data: \n' + req.query.page + '~' + pageIndex)

	res.send({
		status: 0,
		data: retNews
	});
});

app.get('/txNews', function(req, res) {
	var news = [
		{
			link: 'http://view.inews.qq.com/a/20160830A02SEB00',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531730377_150120/0',
			title: '中国轰6K研发险些被俄罗斯发动机厂商卡脖子',
			brif:  '近日，轰6K＂战神＂轰炸机首次公开亮相。在中国...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '外媒称中国已经决心造出世界先进的航空发动机',
			brif: '资料图：2012年11月14日，第九届中国国际...'
		},
		{
			link: 'http://view.inews.qq.com/a/20160828A007LB00',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531727868_150120/0',
			title: '传奇导弹专家冯·布劳恩：其实到美国后曾被当局忽视',
			brif: '小火箭出品本文作者：邢强博士原文标题：布劳恩博...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
			title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
			brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '外媒称中国已经决心造出世界先进的航空发动机',
			brif: '资料图：2012年11月14日，第九届中国国际...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
			brif: '嚣张（aggressive）这个词，腐国海军当...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
			brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '中国武警2016年征兵宣传片震撼首发',
			brif: '中国武警2016年征兵宣传片震撼首发'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
			brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
			brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
		},
		{
			link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
			title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
			brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '外媒称中国已经决心造出世界先进的航空发动机',
			brif: '资料图：2012年11月14日，第九届中国国际...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
			brif: '嚣张（aggressive）这个词，腐国海军当...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
			brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '中国武警2016年征兵宣传片震撼首发',
			brif: '中国武警2016年征兵宣传片震撼首发'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
			brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
			brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
		}

	]

	var pageIndex = req.query.page;
	var len = 3;
	var retNews = news.slice(pageIndex * len, pageIndex * len + len); //0, 1;  3, 6
	console.log('query BD data: \n' + req.query.page + '~' + pageIndex)
	console.log(retNews)

	res.send({
		status: 0,
		data: retNews
	});
});