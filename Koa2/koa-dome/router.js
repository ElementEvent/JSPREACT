const Koa = require('koa');
const app = new Koa();
const fs = require('fs');



async function setRoute(url){
	console.log(url);
	let page = "";
	switch (url) {
		case '/':
			page = 'index.html';
			break;
		case '/index':
			page = 'index.html';
			break;
		case '/todo':
			page = 'todo.html';
			break;
		case '/404':
			page = '404.html';
			break;
		default:
			page = '404.html';
			break;
	}
	let html = await render(page);
	return html;
}

function render(page){

	return new Promise((res, rej) => {
		let pageUrl = `./page/${page}`;

		fs.readFile(pageUrl, 'binary', (err, data)=>{
			if( err ){
				rej(err);
			}else{
				res(data)
			}
		});
	})
}

app.use(async (ctx)=>{
	let url = ctx.request.url;
	let html = await setRoute(url);
	console.log(html);
	ctx.body = html;
});

app.listen(3000);
console.log('端口号3000');
