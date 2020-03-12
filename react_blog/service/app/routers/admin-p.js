/**
 * 后台api接口配置
 *
 * router参数
 * @参数一 路由
 * @参数二 执行的方法 controller(文件夹)home(home.js)index(index方法)
 *
 * */
module.exports = app => {
	const { router, controller } = app;
	let adminauth = app.middleware.adminauth(); //后台路由守卫
	router.get('/admin', controller.view.admin.main.index)
	router.post('/admin/checkLogin' , controller.view.admin.main.checkLogin)
	router.get('/admin/getTypeInfo',adminauth , controller.view.admin.main.getTypeInfo)
	router.post('/admin/addArticle',adminauth , controller.view.admin.main.addArticle)
	router.post('/admin/updateArticle',adminauth ,controller.view.admin.main.updateArticle)
	router.get('/admin/getArticleList',adminauth,  controller.view.admin.main.getArticleList)
	router.get('/admin/deleteArticle/:id',adminauth , controller.view.admin.main.deleteArticle)
	router.get('/admin/getArticleById/:id',adminauth , controller.view.admin.main.getArticleById)
}
