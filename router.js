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

