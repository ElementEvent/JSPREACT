/**
 * 前台api接口配置
 *
 * router参数
 * @参数一 路由
 * @参数二 执行的方法 controller(文件夹)home(home.js)index(index方法)
 *
 * */
module.exports = app => {
	const { router, controller } = app;
	router.get('/view', controller.view.home.index)
	router.get('/view/getArticleList', controller.view.home.getArticleList)
	router.get('/view/getArticleById/:id', controller.view.home.getArticleById)
	router.get('/view/getTypeInfo', controller.view.home.getTypeInfo)
	router.get('/view/getArticleListByTypeIdInfo/:id', controller.view.home.getArticleListByTypeIdInfo)
}
