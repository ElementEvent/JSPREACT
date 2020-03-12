import React,{useState, useEffect} from "react";
import {List, Row, Col, Modal, message, Button} from "antd";
import axios from 'axios';
import {servicePath} from "../config/api";
import '../static/css/articleList.css'
const {confirm} = Modal;

function ArticleList(props){
	const [list, setList] = useState([]);

	useEffect(()=>{
		getList();
	},[])

	const getList = () => {
		axios({
			method: 'get',
			url: servicePath.getArticleList,
			withCredentials: true
		}).then(res=>{
			console.log(res);
			setList(res.data.list);
		}).catch(err=>{

		})
	};

	const deleteArticleById = (id)=> {
		confirm({
			title: '确定要删除吗?',
			content: '确定删除吗?',
			onOk(){
				axios({
					method: 'get',
					url: servicePath.deleteArticle + '/' + id,
					withCredentials: true
				}).then(res=>{
					console.log(res);
					message.success("删除成功");
					getList();
				}).catch(err=>{
					console.log(err);
				})
			},
			onCancel(){
				message.success("已取消删除!")
			}
		})
	};

	// 修改文章 并且跳转
	const updateArticle = (id) => {
		props.history.push('/index/add/' + id)
	};

	return(
		<div>
			<List
				header={
					<Row className="list-div">
						<Col span={8}>
							标题
						</Col>
						<Col span={4}>
							类别
						</Col>
						<Col span={4}>
							发布时间
						</Col>
						<Col span={4}>
							访问量
						</Col>
						<Col span={4}>
							操作
						</Col>
					</Row>
				}
				bordered
				dataSource={list}
				renderItem={item => (
					<List.Item>
						<Row className="list-div">
							<Col span={8}>
								{item.title}
							</Col>
							<Col span={4}>
								{item.typeName}
							</Col>
							<Col span={4}>
								{item.addTime}
							</Col>
							<Col span={4}>
								{item.view_count}
							</Col>
							<Col span={4}>
								<Button type="primary" onClick={()=>updateArticle(item.id)}>修改</Button>
								<Button onClick={()=>deleteArticleById(item.id)}>删除</Button>
							</Col>
						</Row>
					</List.Item>
				)}
			/>
		</div>
	)
}

export default  ArticleList;
