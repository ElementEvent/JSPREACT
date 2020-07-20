import React, {useState, useEffect} from "react";
import marked from "marked";
import '../static/css/addArticle.css'
import {Row, Col, Input, Select, Button, DatePicker, message} from 'antd';
import moment from 'moment'
import axios from 'axios'
import {servicePath} from "../config/api";
import cookies from 'react-cookies'
const {Option} = Select;
const {TextArea} = Input;

function AddArticle(props) {

	const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
	const [articleTitle,setArticleTitle] = useState('')   //文章标题
	const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
	const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
	const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
	const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
	const [showDate,setShowDate] = useState(null)   //发布日期
	const [updateDate,setUpdateDate] = useState() //修改日志的日期
	const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
	const [selectedType,setSelectType] = useState('请选择类型') //选择的文章类别
	const [defaultDate, setDefaultDate] = useState();

	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		pedantic: false,
		sanitize: false,
		tables: true,
		breaks: false,
		smartLists: true,
		smartypants: false
	});

	const changContent = (e) => {
		setArticleContent(e.target.value);
		let html = marked(e.target.value);
		setMarkdownContent(html)
	};

	const changIntroducemd = (e) => {
		setIntroducemd(e.target.value);
		let html = marked(e.target.value);
		setIntroducehtml(html)
	};

	const selectTypeHandler = (value) => {
		setSelectType(value)
	};

	const getTypeInfo = () => {
		axios(servicePath.getTypeInfo, {withCredentials: true}).then(res => {
			if( res.data.data === '没有登录' ){
				localStorage.removeItem('openId');
				props.history.push('/login')

			}else{
				setTypeInfo(res.data.data)
			}
		}).catch(err => {
			console.log(err);
		})
	};

	const saveArticle = ()=>{
		console.log(showDate);
		if( !selectedType ){
			message.error('请选择文章类型!');
			return false;
		}else if( !articleTitle ){
			message.error('文章标题不能为空!');
			return false;
		}else if( !articleContent ){
			message.error('文章内容不能为空!');
			return false;
		}else if( !introducemd ){
			message.error('文章简介不能为空!');
			return false;
		}else if( !showDate ){
			message.error('发布日期不能为空!');
			return false;
		}
		//message.success('验证通过')

		let dataProps = {
			title: articleTitle,
			article_content: articleContent,
			introduce: introducemd,
			addTime: showDate,
			type_id: selectedType
		};

		if( articleId === 0 ){
			dataProps.view_count = 0;
			axios({
				method: 'post',
				url: servicePath.addArticle,
				data: dataProps,
				withCredentials: true
			}).then(res => {
				console.log(res);
				setArticleId(res.data.insertId);
				if( res.data.success ){
					message.success("文章保存成功")
				}else{
					message.error("文章保存失败")
				}
			}).catch(err => {
				message.error("文章保存失败")
			})
		}else{
			dataProps.id = articleId;
			axios({
				method: 'post',
				url: servicePath.updateArticle,
				data: dataProps,
				withCredentials: true
			}).then(res => {
				if( res.data.success ){
					message.success("文章修改成功")
				}else{
					message.error("文章修改失败")
				}
			}).catch(err => {
				message.error("文章修改失败")
			})
		}

	};

	useEffect(()=>{
		getTypeInfo();
		console.log(props, 'props');
		let tmpId = props.match.params.id;
		if( tmpId ){
			setArticleId(tmpId);
			getArticleById(tmpId);
		}
	},[]);

	const getArticleById = (id)=> {
		axios({
			method: 'get',
			url: servicePath.getArticleById + '/' + id,
			withCredentials: true
		}).then(res=>{
			console.log(res);
			let articleInfo = res.data.data[0];
			setArticleTitle(articleInfo.title);
			setArticleContent(articleInfo.article_content);
			let html = marked(articleInfo.article_content);
			setMarkdownContent(html);
			setIntroducemd(articleInfo.introduce);
			let tmpInt = marked(articleInfo.introduce);
			setIntroducehtml(tmpInt);
			setShowDate(articleInfo.addTime);
			setSelectType(articleInfo.typeId);
			console.log(moment(showDate, ['YYYY-MM-DD HH:mm:ss', moment.ISO_8601]));
			setDefaultDate( moment( showDate , ['YYYY-MM-DD HH:mm:ss', moment.ISO_8601]) )
			console.log(moment("12-25-1995", "MM-DD-YYYY")());

		}).catch(err=>{
			console.log(err);
		})
	};

	return(
		<div>
			<Row gutter={5}>

				<Col span={18}>
					<Row gutter={10}>
						<Col span={20}>
							<Input
								value={articleTitle}
								placeholder="博客标题"
								size="large"
								onChange={e=>{setArticleTitle(e.target.value)}}
							/>
						</Col>
						<Col span={4}>
							<Select defaultValue={selectedType} size="large" onChange={selectTypeHandler}>
								{
									typeInfo.map((item, index)=>{
										return(
											<Option key={item.id} value={item.id}>{item.typeName}</Option>
										)
									})
								}

							</Select>
						</Col>
					</Row>
					<br/>
					<Row gutter={10}>
						<Col span={12}>
							<TextArea onChange={changContent} value={articleContent} className="markdown-content" rows={35} placeholder="文章内容" />
						</Col>
						<Col span={12}>
							<div className="show-html" dangerouslySetInnerHTML={{__html: markdownContent}}>

							</div>
						</Col>
					</Row>
				</Col>

				<Col span={6}>
					<Row>
						<Col span={24}>
							<Button size="large">暂存文章</Button>
							&nbsp;
							<Button size="large" type="primary" onClick={saveArticle}>发布文章</Button>
						</Col>

						<Col span={24}>
							<br/>
							<TextArea onChange={changIntroducemd} value={introducemd} rows={4} placeholder="文章简介">

							</TextArea>
							<br/><br/>
							<div className="introduce-html" dangerouslySetInnerHTML={{__html: introducehtml}}>

							</div>
						</Col>

						<Col span={12}>
							<div className="date-select">
								{ showDate }
								<DatePicker
									placeholder="发布日期"
									size="large"
									format="YYYY-MM-DD HH:mm:ss"
									value={moment( showDate , ['YYYY-MM-DD HH:mm:ss', moment.ISO_8601])}
									onChange={(date, dateString)=>{setShowDate(dateString)}}
								/>
							</div>
						</Col>

					</Row>
				</Col>

			</Row>
		</div>
	)
}



export default AddArticle;