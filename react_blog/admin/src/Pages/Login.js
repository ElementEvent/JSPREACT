import React ,{useState}from "react";
import 'antd/dist/antd.css';
import {Card,Input,Button,Spin,message} from 'antd'
import {HomeOutlined} from '@ant-design/icons'
import '../static/css/login.css'
import axios from 'axios'
import {servicePath} from "../config/api";
import cookie from 'react-cookies'

function Login(props) {

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const checkLogin = ()=> {

		if( !userName ){
			message.error('用户名不能为空!');
			return false;
		}else if( !password ){
			message.error('密码不能为空!');
			return false;
		}
		setIsLoading(true);
		axios({
			method: 'post',
			url: `${servicePath.checkLogin}`,
			data:{
				'userName': userName,
				'password': password,
			},
			withCredentials: true
		}).then(res=>{
			setIsLoading(false);
			if( res.data.data === "登陆成功" ){
				localStorage.setItem("openId", res.data.openId);
				props.history.push("/index")
			}else{
				message.error("用户名或密码错误")
			}
		}).catch(err=>{
			console.log(err);
		})

	};

	return(
		<div className='login-div'>

			<Spin tip='loading' spinning={isLoading}>
				<Card title='XULEI bole System' bordered={true} style={{width: 400}}>
					<Input id='userName'
								 size='large'
								 placeholder='输入用户名'
								 prefix={<HomeOutlined style={{color: 'rgba(0,0,0,0.25)'}}/>}
								 onChange={(e)=>{setUserName(e.target.value)}}
					/>
					<br/>
					<br/>
					<Input.Password
									id='password'
								  size='large'
								  placeholder='输入用户名'
								  prefix={<HomeOutlined style={{color: 'rgba(0,0,0,0.25)'}}/>}
								  onChange={(e)=>{setPassword(e.target.value)}}
					/>
					<br/>
					<br/>
					<Button type='primary' size="large" block onClick={checkLogin}>提交</Button>
				</Card>
			</Spin>
		</div>
	)
}

export default Login;
