const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
	let url = ctx.url;
	// get请求
	let query = ctx.request;
	let req_query = query.query;
	let req_querystring = query.querystring;

	ctx.body = {
		url,
		req_query,
		req_querystring,
		ctx
	}

});

app.listen(3100);
console.log('app is starting at port 3100');
