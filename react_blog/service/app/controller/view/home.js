'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
	async index() {
		const { ctx } = this;

		// 获取数据库中blog_content表的数据
		let result = await this.app.mysql.get("blog_content", {});
		ctx.body = 'result';
	}

	// 查询首页列表
	async getArticleList(){
		// 语句拼写 查询后组装,  (查询名称) as (查询后组装成)
		// 事件转义时间戳转标准时间 FORM_UNIXTIME(article.addTime, %Y-%m-%d %H:%i:%s) as addTime
		let sql = 'SELECT article.id as id ,' +
							'article.title as title ,' +
							'article.introduce as introduce ,' +
							'article.addTime as addTime ,' +
							'article.view_count as view_count ,' +
							'type.typeName as typeName ' +
							'FROM article LEFT JOIN type ON article.type_id = type.Id';
		const results = await this.app.mysql.query(sql); // query方法高级查询
		this.ctx.body = {data: results};
	}

	// 根绝列表id查询详情
	async getArticleById(){
		let id = this.ctx.params.id;
		let sql = 'SELECT article.id as id ,' +
			'article.title as title ,' +
			'article.introduce as introduce ,' +
			'article.article_content as content ,' +
			'article.addTime as addTime ,' +
			'article.view_count as view_count ,' +
			'type.typeName as typeName ,' +
			'type.id as typeId ' +
			'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
			'WHERE article.id=' + id;
		const results = await this.app.mysql.query(sql); // query方法高级查询
		this.ctx.body = {data: results};
	}

	// 得到类名别名和标号
	async getTypeInfo(){
		// select @参数 表名
		const result = await this.app.mysql.select('type');
		this.ctx.body = {data: result}
	}

	// 根据类别Id获取文章列表
	async getArticleListByTypeIdInfo(){
		// select @参数 表名
		let id = this.ctx.params.id;
		let sql = 'SELECT article.id as id ,' +
			'article.title as title ,' +
			'article.introduce as introduce ,' +
			'article.addTime as addTime ,' +
			'article.view_count as view_count ,' +
			'type.typeName as typeName ' +
			'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
			'WHERE type.id =' + id;
		const results = await this.app.mysql.query(sql); // query方法高级查询
		this.ctx.body = {data: results};
	}

}

module.exports = HomeController;
