import Head from 'next/head';
import Header from "../components/Header";
import {Row, Col, Breadcrumb, Affix} from 'antd';
import {useState} from "react";
import {HomeOutlined} from '@ant-design/icons';
import '../public/static/css/pages/detailed.css';
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'
import {servicePath} from "../config/api";

const Detailed = (data) => {

	const tocify = new Tocify();
	const renderer = new marked.Renderer();

	renderer.heading = function(text, level, raw){
		const anchor = tocify.add(text, level);
		return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}<h${level}></a>\n`
	}

	// marked 解析配置
	marked.setOptions({
		renderer: renderer,
		gfm: true, // 是否开启github样式渲染
		peantic: false,
		sanitize: false,
		tables: true, // 是否表格样式 类似github
		breaks: false, // 换行符
		smartLists: true, // 列表样式
		highlight: function(code){
			return hljs.highlightAuto(code).value
		}
	})
	let html = marked(data.content);

	return (
		<div>

			<Head>
				<title>详情</title>
			</Head>

			<Header/>

			<Row className="comm-main" type="flex" justify="center">
				<Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
					<div>

						<div className="bread-div">
							<Breadcrumb>
								<Breadcrumb.Item>
									<a href="/">首页</a>
								</Breadcrumb.Item>
								<Breadcrumb.Item>
									<a href="/">视频列表</a>
								</Breadcrumb.Item>
							</Breadcrumb>
						</div>

						<div>
							<div className="detailed-title">
								{ data.title }
							</div>

							<div className="list-icon center">
								<span>
									<HomeOutlined/>
									{ data.addTime }
								</span>
							</div>

							<div className="detailed-content" dangerouslySetInnerHTML={{ __html: html }}>
							</div>
						</div>

					</div>
				</Col>
				<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author/>
					<Advert/>
					<Affix offsetTop={5}>
						<div className="detailed-nav comm-box">
							<div className="nav-title">
								文章目录
							</div>
							{/*<MarkNav
								className="article-menu"
								source={html}
								headingTopOffset={0}
								ordered={false}
							/>*/}
							{tocify && tocify.render()}
						</div>
					</Affix>

				</Col>
			</Row>

			<Footer/>

		</div>
	)

};

Detailed.getInitialProps = async (context)=>{
	let id = context.query.id;
	const promise = new Promise((resolve, reject)=>{
		axios( servicePath.getArticleById + '/' + id).then(res=>{
			resolve(res.data.data[0])
		}).catch(err=>{
			reject(err)
		})
	});
	return await promise;
};

export default Detailed
