import React, {useState, useEffect} from 'react'
import '../public/static/css/component/header.css'
import {Row, Col, Menu} from 'antd'
import {HomeOutlined, VideoCameraOutlined, SmileOutlined} from '@ant-design/icons'
import axios from 'axios'
import {servicePath} from "../config/api";
import Router from 'next/router';
import Link from 'next/link';

const Header = (data) => {

	const [navArray, setNavArray] = useState([]);

	useEffect(()=>{
		const fetchData = async ()=>{
			const result = await axios(servicePath.getTypeInfo).then(res=>{
				return res.data.data;
			}).catch(err=>{
				return err
			})
			setNavArray(result)
		}

		fetchData()

	},[]);

	const handleClick = (e) => {
	/*	console.log(e);
		console.log(e.key);*/
		if( e.key === 1 ){
			Router.push('/index')
		}else{
			Router.push('/list?id=' + e.key)
		}
	}

	return (
		<div className="header">
			<Row type="flex" justify="center">

				<Col xs={24} sm={24} md={10} lg={10} lx={10}>
				<span className="header-logo">
					Logo
				</span>
					<span className="header-text">
					前端开发博客123
				</span>
				</Col>

				<Col xs={0} sm={0} md={14} lg={8} lx={6}>
					<Menu mode="horizontal" onClick={handleClick}>

						{
							navArray.map((item)=>{
								return(
									<Menu.Item key={item.id}>
										<HomeOutlined />
										{ item.typeName }
									</Menu.Item>
								)
							})
						}

					{/*	<Menu.Item key="home">
							<HomeOutlined />
							首页
						</Menu.Item>

						<Menu.Item key="video">
							<VideoCameraOutlined />
							视频
						</Menu.Item>

						<Menu.Item key="life">
							<SmileOutlined />
							生活
						</Menu.Item>*/}

					</Menu>
				</Col>

			</Row>
		</div>
	)

};

/*Header.getInitialProps = async ()=>{
	const promise = new Promise((resolve, reject)=>{
		axios(servicePath.getTypeInfo).then(res=>{
			console.log('header.js', res.data);
			resolve(res.data)
		}).catch(err=>{
			reject(err)
		})
	});

	return await promise;

};*/

export default Header;
