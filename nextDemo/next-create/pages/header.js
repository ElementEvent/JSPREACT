import Head from "next/head";
import '../public/styl.css';
import {Button} from 'antd';

function Header() {
	return (
		<>
			<Head>
				{/* 这里存放html head标签中所有的东西 */}
				<title>
					header.js
				</title>
			</Head>
			<div>header.js</div>
			<div>
				<Button>我是按钮</Button>
			</div>
		</>
	)
}

export default Header
