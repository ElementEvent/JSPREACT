const Koa = require('koa');
const app = new Koa();
const koaView = require('koa-views');
const path = require('path');
const koaStatic = require('koa-static');

app.use(koaView(path.join(__dirname, './view'),{
	extenstion: 'ejs'
}));

app.use(koaStatic(path.join(__dirname, './static')));

app.use(async (ctx) => {

	let title = '123';
	await ctx.render('index.ejs', {title})
});

app.listen(3100);
console.log('app is starting at port 3100');
