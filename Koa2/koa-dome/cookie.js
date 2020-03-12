const koa = require('koa');
const app = new koa();

app.use(async (ctx)=>{
	if( ctx.url === '/index' ){
		ctx.cookies.set(
			'name', 'xulei', {
				domain: '127.0.0.1',
				path: '/index',
				maxAge: 1000*60*60,
				expires: new Date('2020-03-06'),
				heepOnly: false,
				overwrite: false
			}
		)
		ctx.body = 'cookie'
	}else{
		if( ctx.cookies.get('name') ){
			ctx.body = ctx.cookies.get('name')
		}else{
			ctx.body = 'world'
		}

	}
});

app.listen(3000, ()=>{
	console.log('starting at port 3000');
});
