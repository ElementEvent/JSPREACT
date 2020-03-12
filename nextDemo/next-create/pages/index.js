import Test from "../components/Test";
import Link from "next/link";
import Router from "next/router";

const Home = () => {

	function gotoA() {
		Router.push('/linkA')
	}

	function gotoB() {
		//Router.push('/linkB?id=123&name=张三')
		Router.push({
			pathname: "/linkB",
			query: {
				id: '33',
				name: '李四'
			}
		})
	}

	Router.events.on('routerChangeStart', ()=>{
		console.log('路由正要发生变化之前');
	});

	Router.events.on('routerChangeComplete', ()=>{
		console.log('路由发生变化之后');
	});

	Router.events.on('beforeHistoryChange', ()=>{
		console.log('在更改浏览器历史之前触发');
	});

	return (
		<div>
			<div> 我是首页 </div>
			<div><Link href='/linkA'><a> 前往LInk A </a></Link></div>
			<div><Link href={{ pathname: '/linkB', query: {id: '123', name: '张三'} }}><a> 前往LInk B</a></Link></div>
			<div>
				<button onClick={gotoA}>前往A</button>
				<button onClick={gotoB}>前往B</button>
			</div>
			<Test>
				按钮文字
			</Test>
		</div>
	)
}

export default Home
