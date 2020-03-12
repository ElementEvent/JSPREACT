import React, {useState, useEffect} from 'react'
import Head from 'next/head';
import Header from "../components/Header";
import {Row, Col, List, Breadcrumb} from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import Author from "../components/Author";
import Advert from "../components/Advert";
import Footer from "../components/Footer";
import axios from 'axios'
import {servicePath} from "../config/api";
import Link from "next/link";

const BoleList = (data) => {

	/*console.log(data);*/

	const [list, setList] = useState(data.data);

	useEffect(()=>{
		setList(data.data)
	});

	return (
		<div className="container">

			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header/>

			<Row className="comm-main" type="flex" justify="center">
				<Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>

					<Breadcrumb>
						<Breadcrumb.Item>
							<a href="/">首页</a>
						</Breadcrumb.Item>
						<Breadcrumb.Item>
							视频教程
						</Breadcrumb.Item>
					</Breadcrumb>

					<List
						header={<div>最新日志</div>}
						itemLayout="vertical"
						dataSource={list}
						renderItem={item=>(

							<List.Item>

								<div className="list-title">
									{ item.title }
								</div>

								<div className="list-icon">
                  <span>
                    <HomeOutlined />
										{ item.addTime }
                  </span>

									<span>
                    <HomeOutlined />
                    { item.typeName }
                  </span>

									<span>
                    <HomeOutlined />
										{ item.view_count }
                  </span>
								</div>

								<div className="list-context">
									{ item.introduce }
								</div>

							</List.Item>
						)}
					/>
				</Col>
				<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author/>
					<Advert/>
				</Col>
			</Row>

			<Footer/>

		</div>
	)

};

BoleList.getInitialProps = async (context)=>{
	let id = context.query.id;
	const promise = new Promise((resolve, reject)=>{
		axios(servicePath.getArticleListByTypeIdInfo + '/' +id).then(res=>{
			resolve(res.data)
		}).catch(err=>{
			reject(err);
		})
	});
	return await promise;
};

export default BoleList
