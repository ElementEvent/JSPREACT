const ipUrl = 'http://127.0.0.1:7001/view';

export const servicePath = {
	getArticleList: ipUrl + '/getArticleList', //首页查询
	getArticleById: ipUrl + '/getArticleById', // 详细查询
	getTypeInfo: ipUrl + '/getTypeInfo', // 详细查询
	getArticleListByTypeIdInfo: ipUrl + '/getArticleListByTypeIdInfo', // 根据类别Id获取文章列表
};
