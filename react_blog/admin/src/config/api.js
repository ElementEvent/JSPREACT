const ipUrl = 'http://127.0.0.1:7001/admin';

export const servicePath = {
	checkLogin: ipUrl + '/checkLogin', //检查用户名和密码
	getTypeInfo: ipUrl + '/getTypeInfo', //获取类型
	addArticle: ipUrl + '/addArticle', //添加文档
	updateArticle: ipUrl + '/updateArticle', //修改文档
	getArticleList: ipUrl + '/getArticleList', //获取文档列表
	deleteArticle: ipUrl + '/deleteArticle', //删除文章
	getArticleById: ipUrl + '/getArticleById', //根据id查详情
};
