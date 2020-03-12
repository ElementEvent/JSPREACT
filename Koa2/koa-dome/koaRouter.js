const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();
const parentRouter = new Router();
const childrenRouter = new Router();

// 定义次要路由
parentRouter
	.get('/', async (ctx)=>{
		ctx.body = 'parent html';
	})
	.get('/parentTodo', async (ctx)=>{
		ctx.body = 'parentTodo html';
	});

childrenRouter
	.get('/', async (ctx)=>{
		ctx.body = ctx.query;
	})
	.get('/childrenTodo', async (ctx)=>{
		ctx.body = 'childrenTodo html';
	})

// 主路由
router
	.get('/', (ctx, next)=>{
		ctx.body = '123';
	})
	.get('/todo',(ctx, next)=>{
		ctx.body = '123'
	});

/**
 * 装在次路由
 * @参数一: 路由的首个访问地址, 路由开头访问如 /parent
 * @参数二: 装在路由
 * @参数三: 设置监听request method(请求类型)
 * */
router.use('/parent', parentRouter.routes(), parentRouter.allowedMethods());
router.use('/children', childrenRouter.routes(), childrenRouter.allowedMethods());

app
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000, ()=>{
	console.log('starting at port 3000');
});
