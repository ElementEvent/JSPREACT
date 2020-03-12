import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

function Index() {
	useEffect(()=>{
		console.log('index useEffect');
		return () => {
			console.log('解绑index');
		}
	},[]);
	return <h2>Index.html</h2>
}

function List() {
	useEffect(()=>{
		console.log('List useEffect');
	})
	return <h2>List.html</h2>
}

function ExampleHooks(){
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('useEffect', count);
		return () => {
			console.log('解除生命周期');
		}
	},[count]);

	return(
		<div>
			<p>
				点击次数 {count}
			</p>
			<button onClick={() => {setCount(count+1)}}>click</button>

			<Router>
				<ul>
					<li><Link to="/">首页</Link></li>
					<li><Link to="/list/">列表</Link></li>
				</ul>
				<Route path="/" exact component={Index}/>
				<Route path="/list/" component={List}/>
			</Router>

		</div>
	)
}


export default ExampleHooks;
