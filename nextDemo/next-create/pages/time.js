import React , {useState} from 'react'
import moment from 'moment'
import dynamic from "next/dynamic"; // 懒加载自定义组件

// 定义需要懒加载的自定义组件
const One = dynamic(import('../components/one.js'));

function time(){
	const [nowTime, setTIme] = useState(Date.now());
	const changeTime = () => {
		setTIme(moment(Date.now()).format());
	};

	//使用懒加载的形式
	const LodingChangeTime = async () => {
		const moment1 = await import('moment');
		console.log(moment1);
		setTIme(moment1.default(Date.now()).format());
	};

	return (
		<>
			<div>显示时间为: {nowTime}</div>
			<One></One>
			<div><button onClick={changeTime}>改变时间格式</button></div>
			<div><button onClick={LodingChangeTime}>懒加载改变</button></div>
		</>
	)
}

export default time;
