import Link from "next/link";
import {withRouter} from "next/router";
import axios from 'axios'

const linkB = ({router, data}) => {
	return (
		<>
			<div>linkB页面</div>
			<Link href='/'><a>首页</a></Link>
			<div>{data}</div>
			<span>{ router.query.name }</span>
		</>
	)
};

linkB.getInitialProps = async () =>{

	const promise =new Promise((resolve)=>{
		axios('http://localhost.charlesproxy.com:3000/list.json').then(
			(res)=>{
				console.log('远程数据结果：',res)
				console.log(res);
				resolve(res)
			}
		)
	});
	return await promise
};

export default withRouter(linkB);
