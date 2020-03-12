import React, {useState, createContext, useContext} from 'react';

// 创建上下文
const CreateContext = createContext();

function Counter(){
	let count = useContext(CreateContext); // 获取上下文, 定义的创建文名称
	return (<h2>{count}</h2>)
}

function Example() {
	const [count, setCount] = useState(0);

	return(
		<div>
			<p>
				点击次数 {count}
			</p>
			<button onClick={() => {setCount(count+1)}}>click</button>
			{/* 定义上下文 value为传递参数 */}
			<CreateContext.Provider value={count}>
				<Counter/>
			</CreateContext.Provider>
		</div>
	)

}

export default Example;
