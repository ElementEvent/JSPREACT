function test() {
	return new Promise((res,rej) => {
		res('执行成功');
		rej('执行失败');
	})
}

async function test1 (){
	const v = await test();
	console.log(v);
}

test1();
