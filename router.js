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
	}]
	res.send({
		"status": 0,
		"data": data
	})
})

