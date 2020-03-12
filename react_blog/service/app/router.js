'use strict';

/**
 * @param {Egg.Application} app - egg application
 *
 * 该文件为路由总入口
 */
const viewRouter = require('./routers/view-p'); // 引入前台路由
const adminRouter = require('./routers/admin-p'); // 引入后台路由
module.exports = app => {
  viewRouter(app)
  adminRouter(app)
};
