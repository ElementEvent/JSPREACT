
[Redux 24/24](https://www.bilibili.com/video/av56213747?p=10) 已完成

[Router 9/9](https://www.bilibili.com/video/av61672919?=5) 已完成

[React Hooks 11/11](https://www.bilibili.com/video/av63409044) 已完成

[Next.js 12/12](https://www.bilibili.com/video/av66351541) 已完成

[React实战 42/44](https://www.bilibili.com/video/av68325396) 已完成

[Koa2实战 13/13](https://www.bilibili.com/video/av36421651) 中台需要

[NR 7/43](https://www.bilibili.com/video/BV1JJ411a7pD?p=7)
 
## 全局安装脚手架
npm install -g create-react-app 全局安装脚手架 需要在管理员权限运行npm

## 创建项目
create-react-app （项目名）

## 基本用法

import React, { Component, Fragment } from 'react'

--- Component react模板
--- Fragment react标签占位符


```javascript
   // 所有组件中都需要执行 constructor方法
/**

  this.state中存放所有数据如 Vue中的 data{}存放一样
  修改this.state中的属性值使用 setState()方法
  如下修改 inputValue 

  render里面的模板调用方法的时候 ，方法要加上bind(this)把指向改为当前模板

  this.setState({
    inputValue: '333',
  })

*/
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '222',
            list: []
        }
    }
}
    
```

## 关于this.state

    组件中所有跟数据有关的内容存放在this.state中 类似于vue中的 data
    修改state中的任何属性不能直接做修改，需要使用this.setState()方法进行修改
    
    this.setState(fn1,fn2) : f1 异步执行对state里面的属性值修改， f2: f1异步函数执行完后执行
    

## [快捷键](https://blog.csdn.net/weixin_43606158/article/details/90900061)

rcc + tab 用ES6模块系统创建一个React组件类

rccp + tab  创建一个带有PropTypes和ES6模块系统的React组件类

rcfc + tab 创建一个带有PropTypes和所有生命周期方法以及ES6模块系统的React组件类

rcjc + tab键 - - 用ES6模块系统创建一个React组件类（无导出）

rdp + tab键 - - 快速生成defaultProps

rpc + tab键 - - 用PropTypes和ES6 moudle系统创建一个React纯组件类

rrc + tab键 - - 创建一个连接到redux的React组件类

rrdc + tab键 - - 创建一个通过dispatch连接到redux的React组件类

rsc + tab键 - - 创建没有PropTypes和ES6模块系统的无状态React组件

rscp + tab键 - - 创建有PropTypes和ES6模块系统的无状态React组件

rsf + tab键 - - 以命名函数的形式创建无状态的React组件，不使用PropTypes

rsfp + tab键 - - 使用PropTypes将无状态的React组件作为命名函数创建

rsi + tab键 - - 创建无状态的React组件，不使用PropTypes和ES6模块系统，但使用隐式返回和道具

rwwd + tab键 - - 在没有导入的情况下，在ES6模块系统中创建一个有构造函数、空状态、proptypes和导出的React组件类。(主要用于React时，proptype由webpack提供插件提供)

## [PropTypes 父组件传值类型校验与默认值](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html#___gatsby)
    import PropTypes from 'prop-types'
    // 子组件参数验证中 propTtypes必须是开头小写
    children.propTypes = {
        content: PropTypes.string.isRequired // content 类型必须是string，切必须有值
    }
    
    // 给传递设置默认值
    children.defaultProps = {
    	test: 'defaultContent'
    };  
    

## 组件渲染原理
    
    每个组件中只要state和props发生变化都会重新渲染render

## 生命周期函数
    constructor(){} 初始化
    render(){} 数据发生变化时执行
    componentWillMount(){} 在组件即将被挂在页面的时候
    componentDidMount(){} 在组件被挂在之后 一般在发送请求的时候
    componentWillReceiveProps(){} 当组件从父组件接受参数且父组件 render 执行，这个函数就会执行, 第一次存在父组件中不会执行，如果这个组件之前就存在父组件中，才会执行
    componentWillUnmount(){} 当组件即将被删除的时候执行
    
    shouldComponentUpdate(nextProps, nextState){} 组件更新之前 调用时必须带一个返回值， 类型为布尔值
    @nextProps： 即将要渲染的props数据
    @nextState： 即将要渲染的state数据
    以下生命周期函数在 shouldComponentUpdate 之后执行
    componentWillUpdate(){}  组件更新之前
    componentDidUpdate(){}  组件更新之后
    
    

## 请求相关Axios
    import axios from 'axios'
    
## Charles 接口拦截配置本地数据的模拟
    Tools -> map local 新增接口拦截
    Tools -> Rewrite 跨域设置
    http://localhost.charlesproxy.com:3000 浏览器访问就可以抓到接口了， 或者配置跨域信息
    
    1.需要设置下注册码
    
    2。从网上找一个 注册码 记录下 名称和注册码信息
    
    Registered Name: https://zhile.io
    
    License Key: 48891cf209c6d32bf4
    
    3.点击help下面的第二个按钮，输入名称和注册码
    
    4，重启该软件
    ———————————————
    
    
## 在react中使用动画
    安装 npm install react-transition-group --save
    <CSSTransition
        in={this.state.show} 进入的动画的时候添加样式
        timeout={1000} 
        classNames='fade'
        unmountOnExit
    >
        <div>hello</div>
    </CSSTransition>
    
    CSSTransition 动画类
    .fade-enter 入场的瞬间执行
    .fade-enter-active 入场后到结束前
    .enter 入场动画执行完毕

     .fade-exit 结束开始的瞬间
     .fade-exit-active 结束动画的开始到完毕之前
     .fade-exit-done 结束动画执行完毕
     
     appear={true} 属性 开场就执行的动画类
     .fade-appear 开始瞬间
     .fade-appear-active 开始到结束
     
     多个标签动画的时候
     TransitionGroup 配合 CSSTransition使用
     <TransitionGroup>
        for
            <CSSTransition>
                <div>item</div>
            </CSSTransition>
        /for
     </TransitionGroup>
     

## Redux使用方法
    概念1： 于VUEX类似
    概念2： Redux = Reducer + Rlux
    npm install --save redux
    store文件夹中
        reducer.js 存放的数据源
        index.js 存放状态管理
        
        引入
        import store from "../store/index.js";
        store.getState() //获取状态管理中的数据
        store.subscrib(fn()) // 每次更新的时候执行的函数
        store.dispatch(action) // 更新状态管理 
        
    @Redux 进阶核心api
        Provider 详情参考src/index.js
        
        

## react UI组件[ant](https://ant.design/docs/react/introduce-cn)
    类似于VUE中element-ui


##redux 基础解析
    
    store 状态管理中
        index.js 为主体
        reducer 管理数据的分发
        action 操作数据的行为

##



## redux-thunk 维护ajax请求中间件 让redux能够执行函数
    cnpm install redux-thunk --save
    使用放在 store index.js中
    import {createStore, applyMiddleware} from 'redux' 引入applyMiddleware
    import thunk from 'redux-thunk'
    
    使用单中间件的时候 
    window.__REDUX_DEVTOOLS_EXTENSION__
    多中间件的时候
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    

## redux-saga 中间件
    参考 reduxdemo
    cnpm install redux-saga --save
    
    /**
     *
     *  saga运行逻辑解析
     *  先在 componentDidMount 执行store
     *
     *  在mySagas（）方法中监听store的 action类型，并且执行一个方法
     *  在方法中请求数据，然后再调用store的action通过reducer修改数据
     *
     *
     * */
    
## 

## react-redux 自己的中间件 依赖先安装redux 
    参考react-redux-demo
    在需要使用的地方引入 Provider 来源于 react-redux
    import {Provider} from 'react-redux';
    
    
    
##
    

1 - 谈谈对Vue的双向绑定的理解

双向绑定中是vue先创建生命周期函数,并且生成虚拟dom(view-modal), 然后数据发生改变的时候对比虚拟dom,把发生变化的替换掉,再重新渲染view

问题1:  你把你的回答结合的再深一点
    首先根据view结构生成虚拟dom,然后将modal注入进虚拟dom中, 当这个modal发生onchange事件触发的时候,虚拟会生成新的dom树,然后对比新旧找到不一致的地方,重新渲染
    
    
vue实例进行初始化完成后，
会将data中的属性值进行循环遍历拦截处理，通过Object.defineProperty来为每个属性对象设置set和get属性，通过编译器将dom节点中的指令进行编译处理，收集指令所依赖的数据和方法，等待数据变化然后进行渲染，这时候watcher属于拦截器和编译器的桥梁，它接收拦截器这边的数据对象发生变化，并对编译器提供的指令进行视图渲染，从而变成数据变更时，视图也在变化，达到数据双向绑定的目的
    
2 - 谈谈对MVVM的理解
                                               M - modal 数据模型
                                               V - view  视图模型
                                               VM - view-modal 虚拟视图模型
                                               
                                               补充: M - 是针对数据管理与操作数据的管理
                                                     V - 是页面中的HTML结构层
                                                     VM - 是虚拟dom,拼接view层的同时注入modal,然后重新渲染view层

modal属于数据层，通过ajax/fetch等api完成服务端与客户端的数据交互。
view属于属于动态视图模板，除了完成布局和结构以外，需要展示数据的信息，这里并不需要处理数据的状态，同时需要进行数据的声明，指令绑定的声明，事件的声明。
viewmodal作为view和modal的中间桥梁，将逻辑业务数据和视图分离，同时支持一个viewmodal对应多个view。

3 - 选用一个前端框架,从哪些方面考虑

第一因素是团队掌握的技术栈,实力强 > 人数多
如果不考虑团队掌握的技术栈的话:
快速轻便使用vue
js功底扎实对函数式变成理解透彻使用react
ng暂时不考虑
如果项目临时修改多,环境音速和打包效率低,要实时修改和查看就使用jquery

## react-router-dom 路由管理
    npm install react-router-dom --save 
    
    引入
    import { BrowserRouter as Router, Route, Link } from 'react-router-dom' 

    Route关键字: 
        exact: 精确匹配
        
    Route标签: 
        Redirect: 重定向

## react-hooks react新特性
    不再使用Component
    import React, { useState } from 'react';
    参考文件exampleHooks
useState使用
    const [age, setAge] = useState(16)// age = 18, 定义一个修改功能
    useState 不能存在条件判断语句中
    
useEffect 代替生命周期函数 异步函数
    useEffect代替 componentDidMount 和 componentDidUpdate
    
    解绑useEffect代替 在useEffect内返回一个匿名函数即可
    useEffect(fn1 , [])
    第二个参数为数据, 需要解除生命周期的时候, 如果传递为[] 那么当前页面执行的刷新, 都不会去执行解除方法, []可以填写变量, 为监听到该变量发生变化则执行解除函数
    
useContext 父子通信
    参考文件example
    
useReducer 一般结合useContext一起使用 参考Example5, 结合使用例子参考example6

useMemo 监听更新缓存状态 参考example7

useRef 获取dom元素 example8

useCallback 缓存方法

## next.js 服务端渲染
   
    全局安装next 脚手架工具
    npm install -g create-next-app
    npm add @zeit/next-css  在next中使用css包 
        新增next.comfig.js 
        配置: 
        const withCss = require('@zeit/next-css');
        
        if(typeof require !== 'undefined'){
        	require.extensions['.css']=file=>{}
        }
        
        module.exports = withCss({});
   
    
    npm/npx create-next-app (项目名称)
    
    npm run dev
    
    目录解析:
    components 下存放小组件
    pages 存放视图, 并且目录就是对应的路由
    pubilc 公共静态资源
    
    功能使用:
        
        1:路由跳转:
            html: <Link></linl> 跳转
            js: Router.push('/index')
    
            路由跳转传递参数 只能通过query传递
            接受路由传参的组件需要引入
               import {withRouter} from "next/router";
               详情参考pages/linkB页面 
               
            router 钩子函数
                routerChangeStart 路由正要发生变化之前
                routerChangeComplete 路由发生变化之后
                beforeHistoryChange 在更改浏览器历史之前触发
                routerChangeError 路由发生错误
                hashChangeStart
                hashChangeComplete

        2:异步获取数据
        组件名称.getInitialProps()方法, 返回值必须是一个对象,该方法不能在子组件中调用
        传参中 {router, data} data是解构后的属性值

        3: 懒加载组件 moment日期库
            懒加载公用组件
             参考next-create > pages > time.js
            懒加载自定义组件
            import dynamic from "next/dynamic"; // 懒加载自定义组件
            
        4.SEO搜索优化
            pages -> header.js
            
        5.使用import引入css
        cnpm install --save @zeit/next-css
        需要在根目录下创建 next.config.js 配置文件
        
        5.安装antd UI
        cnpm install antd
        
        6.分批加载UI babel-plugin-import
        跟目录下创建 .babelrc
        基础配置如下
        
        {
          "presets": ["next/babel"],
          "plugins": [
            [
              "import",
              {
                "libraryName": "antd",
                "style": "css"
              }
            ]
          ]
        }
    
        7.更换端口
        在package.json中
        "start": "next start -p 80       


## 实战目录解析
pages
    _app.js 所有页面的-整体引入文件
    
    
组件:
    markdown-navbar 解析markdown生成导航
        source: 需要解析的语法
        headingTopOffset: 点击跳转到位置后距顶部的位置
        
    ReactMarkdown 解析展示markdown
        source: 需要解析的语法
        escapeHtml: 是否解析html语法 布尔
推荐使用 marked
        npm install --save marked
        npm install --save highlight.js


## ANTD
   @ant-design/icons 图标库 
   Affix 固定布局


## 使用egg.js编写中台

全局安装egg脚手架工具
    npm i egg-init -g
    egg-init --type=simple 初始化
    cnpm install
    目录解析
        --app 主要源码
            -- controller 控制器
            -- public 公用文件
            -- router 路由
            -- view 模板
            -- extend 继承模板
            -- middleware 中间件
        --config 配置文件
        --logs 服务日志
        --run 运行时生成
        --test 测试文件
       

    install --save koa
    创建index入口文件 
    127.0.0.0:自定义端口号访问
    
    FormatTool： 浏览器json插件

get与post
    源码编写在： getAndPost中
    使用中间件：bodyparser
    get/post 使用中间件bodyparser来解决post请求
    install koa-bodyparser

router 原生写法
    参考router
    
koa-router 路由插件 
    源码: koaRouter
    npm install --save koa-router
    const Router = require('koa-router'); 引入
    const router = new Router({ 创建
    	prefix: '/js' //所有接口访问都要在前面加上 /js目录
    });
    router.get('/',(ctx, next)=>{})
调用中间件
app
	.use(router.routes())
	.use(router.allowedMethods());
	
使用cookie
    源码: cookie.js
    domain 访问的域名
    path: '/index' 访问的路径必须是index
    maxAge: 有效时间 毫秒
    expires: 过期时间 new Date()类型
    heepOnly: 是否只有HTTP请求生效 布尔值
    overwrite: 是否允许重写cookie

服务器模板语法 koa-views
    npm install --save koa-views
    npm install --save ejs 模板引擎
    
访问静态资源  koa-static
    npm install --save koa-static
    
## egg接口设计 RESTful(诶思特佛) APP API
   安装数据库插件 npm install --save egg-mysql
   配置数据库插件
        配置路口:
            config -> plugin.js
            加入: 
            mysql:{
            		enable: true,
            		package: 'egg-mysql'
            	}
    下载数据库: phpstudy启动数据库,  navicat11连接数据库
        config.default.js中加入以下配置
         config.mysql = {
            // database configuration
            client: {
              // host
              host: 'localhost',
              // port
              port: '3306',
              // username
              user: 'root',
              // password
              password: 'root',
              // database
              database: 'test',
            },
            // load into app, default is open
            app: true,
            // load into agent, default is close
            agent: false,
          };
    配置完毕后使用 navicat11

## 服务端解决跨域
npm install --save egg-cors
在config -> plugin中开启服务
cors: {
		enable: true,
		package: 'egg-cors'
	}
然后在config.default.js中添加配置信息
  config.security = {
    scrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };

## 排坑攻略
    axios
    withCredentials 无效
    前后端都需要设置为true
    security cors 地址需要精确地址

## 部署相关
    axiosShell FinalShell 部署
    主机IP地址为 公网地址 端口22 
    
    Docker 安装
    yum list docker-ce --showduplcates | sort -r
    
    启动
    sudo systemctl start docker
    
    查看正在进行
    docker ps
    
    插件镜像
    docker images


## React Native[文档](https://reactnative.cn/docs/getting-started.html)
安装yarn 和 react-native-cli
npm install -g yarn react-native-cli

初始化 react-native init (项目名称)

先开模拟器

运行 yarn react-native run-android

node版本16.3稳定版

### RN错误解决
错误1: app:processDebugResources
 在android编辑器中 > 设置 > build > Gradle > USE Gradle From 选择Specified location 选择包

错误2: Unable to load script Make sure 模拟器报错
个体app>src>build.gradle 中的数据 project.ext.react添加以下属性
entryFile: "index.js",
bundleAssetName: "index.android.bundle",
bundleInAlpha: true,
bundleInBeta: true
