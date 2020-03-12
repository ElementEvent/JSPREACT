'use strict'
const Controller = require('egg').Controller;
class MainController extends Controller{

	async index(){
		this.ctx.body = "mainController"
	}

	async checkLogin(){
		let userName = this.ctx.request.body.userName;
		let password = this.ctx.request.body.password;
		const sql = `SELECT userName FROM admin_user WHERE userName = '${userName}' AND password = '${password}' `;
		const res = await this.app.mysql.query(sql);
		if( res.length > 0 ){
			let openId = new Date().getTime();
			this.ctx.session.openId = {'openId': openId};
			console.log(this.ctx.session, 'this.ctx.session');
			this.ctx.body = {
				'data': '登陆成功',
				'openId': openId
			}
		}else{
			this.ctx.body = {
				'data': '登陆失败'
			}
		}
	}

	async getTypeInfo (){
		const restType = await this.app.mysql.select('type');
		this.ctx.body = {
			data: restType
		}
	}

	async addArticle(){
		let tmpArticle = this.ctx.request.body;
		const result = await this.app.mysql.insert('article', tmpArticle); // 插入数据
		const insertSuccess = result.affectedRows === 1;
		const insertId = result.insertId;
		this.ctx.body = {
			success: insertSuccess,
			insertId: insertId
		}
	}

	async updateArticle() {
		let tmpArticle = this.ctx.request.body;
		const result = await this.app.mysql.update('article', tmpArticle); // 更新
		const insertSuccess = result.affectedRows === 1;
		this.ctx.body = {
			success: insertSuccess
		}
	}

	async getArticleList() {
		let sql = 'SELECT article.id as id ,' +
			'article.title as title ,' +
			'article.introduce as introduce ,' +
			'article.addTime as addTime ,' +
			'article.view_count as view_count ,' +
			'type.typeName as typeName ' +
			'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
			'ORDER BY article.id DESC';
		const resList = await this.app.mysql.query(sql);
		this.ctx.body = {
			list: resList
		}
	}

	async deleteArticle(){
		let id = this.ctx.params.id;
		/**
		 *
		 * 删除方法
		 * @参数一 需要删除的表
		 * @参数二 需要根据什么条件删除
		 *
		 * */
		const res = await this.app.mysql.delete('article', {'id': id});
		this.ctx.body = {
			data: res
		}
	}

	async getArticleById(){
		let id = this.ctx.params.id;
		let sql = 'SELECT article.id as id ,' +
			'article.title as title ,' +
			'article.introduce as introduce ,' +
			'article.article_content as article_content ,' +
			'article.addTime as addTime ,' +
			'article.view_count as view_count ,' +
			'type.typeName as typeName ,' +
			'type.id as typeId ' +
			'FROM article LEFT JOIN type ON article.type_id = type.id ' +
			'WHERE article.id = ' + id;
		const res = await this.app.mysql.query(sql);
		this.ctx.body = {
			data: res
		}
	}

}

module.exports = MainController;
