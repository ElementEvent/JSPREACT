import React, {useState, useMemo} from "react";

function Example7(){
	const [red, setRed] = useState('休闲');
	const [blue, setBlue] = useState('休闲');
	return(
		<div>
			<button onClick={()=>{ setRed(new Date().getTime() + 'red') }}>red</button>
			<button onClick={()=>{ setBlue(new Date().getTime() + 'blue' )}}>blue</button>
			<ChildComponent name={red}>
				{ blue }
			</ChildComponent>
		</div>
	)
}

function ChildComponent({name, children}) {

	function changRed() {
		console.log('red修改');
		return name+ 'red'
	}

	const actionRed = useMemo(()=>changRed(name), [name]) ;

	return (
		<div>
			<div>1{ actionRed }</div>
			<div>2{ children }</div>
		</div>
	)
}

export default  Example7;
