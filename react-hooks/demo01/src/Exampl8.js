import React, {useRef, useState, useEffect} from 'react';

function Exampl8() {
	const inputEl = useRef(null);

	const onButtonClick = () =>{
		inputEl.current.value = '按钮点击';
		console.log(inputEl);
	};

	const [type, setType] = useState('jsp');
	const typeRef = useRef(null);

	useEffect(()=>{
		typeRef.current = type;
	});

	return(
		<div>
			<input type="text" ref={inputEl}/>
			<button onClick={onButtonClick}>按钮</button>
			<br/>
			<br/>
			<input value={type} onChange={(e)=>{ setType(e.target.value) }}/>
		</div>
	)

}

export default Exampl8;
