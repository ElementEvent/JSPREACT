import React, {Component} from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from "./store";
import {CHANGE_INPUT, CLICK_BTN, DELETE_ITEM} from "./store/actionTypes";

class TodoList extends Component {

	constructor(props){
		super(props);
		console.log(store.getState());
		this.state = store.getState();
		this.changeInputValue = this.changeInputValue.bind(this);
		this.storeChange = this.storeChange.bind(this);
		this.clickBtn = this.clickBtn.bind(this);
		//this.clickDelete = this.clickDelete.bind(this);
		store.subscribe(this.storeChange) //订阅模式,针对input的value值中无法发生改变
	}

	render() {
		return (
			<div style={{'margin': '10px'}}>

				<div>
					<Input
						value={this.state.inputValue}
						onChange={this.changeInputValue}
					/>
					<Button
						type='primary'
						onClick={this.clickBtn}
					>
						新增
					</Button>
				</div>

				<div style={{'margin': '10px', 'width': '300px'}}>
					<List
						bordered
						dataSource={this.state.list}
						renderItem={(item, index)=>(<List.Item onClick={this.clickDelete.bind(this, index)}>{item}</List.Item>)}
					/>
				</div>

			</div>
		);
	}

	changeInputValue(e){
		const action = {
			type: CHANGE_INPUT,
			value: e.target.value
		};
		store.dispatch(action);
	}

	clickBtn(){
		const action = {
			type: CLICK_BTN,
			value: store.getState().inputValue
		};
		store.dispatch(action);
	}

	clickDelete(index){
		const action = {
			type: DELETE_ITEM,
			index: index
		};
		store.dispatch(action);
	}

	storeChange(){
		this.setState(store.getState());
	}

}



export default TodoList;
