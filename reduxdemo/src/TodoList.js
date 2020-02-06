import React, {Component} from 'react';
import 'antd/dist/antd.css'
import store from "./store";
import {addAction, changeInputAction, deleteAction, getListAction, getMyListAction} from "./store/actionCreators";
import TodoListUi from "./TodoListUi";
import axios from 'axios'

class TodoList extends Component {

	constructor(props){
		super(props);
		console.log(store.getState());
		this.state = store.getState();
		this.changeInputValue = this.changeInputValue.bind(this);
		this.storeChange = this.storeChange.bind(this);
		this.clickBtn = this.clickBtn.bind(this);
		this.clickDelete = this.clickDelete.bind(this);
		store.subscribe(this.storeChange) //订阅模式,针对input的value值中无法发生改变
	}

	render() {
		return (
			<TodoListUi
				inputValue={this.state.inputValue}
				list={this.state.list}
				changeInputValue={this.changeInputValue}
				clickBtn={this.clickBtn}
				clickDelete={this.clickDelete}
			/>
		);
	}

	componentDidMount() {
		// 使用redux-saga
		const action = getMyListAction();
		store.dispatch(action);


		// 异步调用数据
		/*axios.get('http://localhost.charlesproxy.com:3000/list.json').then(res=>{
			console.log(res);
			const data = res.data;
			const action = getListAction(data);
			store.dispatch(action);
		}).catch(err=>{
			console.log(err);
		})*/
	}

	changeInputValue(e){
		const action = changeInputAction(e.target.value);
		store.dispatch(action);
	}

	clickBtn(){
		const action = addAction(store.getState().inputValue);
		store.dispatch(action);
	}

	clickDelete(index){
		const action = deleteAction(index);
		store.dispatch(action);
	}

	storeChange(){
		this.setState(store.getState());
	}

}



export default TodoList;
