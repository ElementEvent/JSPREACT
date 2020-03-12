const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
	if( ctx.url === '/' && ctx.method === 'GET' ){
		// 表单页面
		console.log(111);
		let html = `
			<h1>post</h1>
			<form method='POST' action='/'> 
				<p>名称</p>
				<input type="text" name="userName">
				<p>年龄</p>
				<input type="number" name="age">
				<p>网站</p>
				<input type="text" name="webSite">
				<br>
				<button type="submit">提交</button>
			</form>
		`;
		ctx.body = html;
	}else if( ctx.url === '/' && ctx.method === 'POST' ){
		// 提交表单
		let postData = await parsePostData(ctx);
		ctx.body = parseQueryStr(postData);
	}else {
		ctx.body = '<h1>404</h1>'
	}

});

function parsePostData(ctx){
	return new Promise((resolve, reject) => {
		try{
			let postData = "";
			ctx.req.addListener('data', (data)=>{
				postData += data;
			});
			ctx.req.on('end', ()=>{
				resolve(postData)
			})
		}catch (e) {
			reject(e)
		}
	})
}

function parseQueryStr(queryStr){
	let queryData = {};
	let queryStrList = queryStr.split('&');
	for( let i=0;i<queryStrList.length;i++ ){
		let params = queryStrList[i].split('=');
		queryData[params[0]] = decodeURIComponent(params[1]);
	}
	return queryData;
}

app.listen(3200);
console.log('app is starting at port 3100');
