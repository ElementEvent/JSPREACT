import React, {Component} from 'react';
import {connect} from 'react-redux';

// 无状态组件
const TodoListState = (props) => {

	let {inputValue, inputChange, clickBtn, deleteClick, list} = props;

	return (
		<div>
			<div>
				<input
					type="text"
					value={inputValue}
					onChange={inputChange}
				/>
				<button onClick={clickBtn}>提交</button>
			</div>
			<ul>
				{
					list.map((item, index) => {
						return (<li onClick={() => deleteClick(index)} key={index}>{item}</li>)
					})
				}
			</ul>
		</div>
	);
};

class TodoList extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		let {inputValue, inputChange, clickBtn, deleteClick, list} = this.props;

		return (
			<div>
				<div>
					<input
						type="text"
						value={inputValue}
						onChange={inputChange}
					/>
					<button onClick={clickBtn}>提交</button>
				</div>
				<ul>
					{
						list.map((item, index) => {
							return (<li onClick={() => deleteClick(index)} key={index}>{item}</li>)
						})
					}
				</ul>
			</div>
		);
	}


}

// 把store里面的数据拿到该组件中, 通过this.props使用 理解为getStore
const stateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list,
	}
};

// 派发事件通知store更新 理解为setStore
const dispatchToProps = (dispatch) => {
	return {

		inputChange(e) {
			console.log(e.target.value);
			let action = {
				type: 'change_input',
				value: e.target.value
			};
			dispatch(action)
		},

		clickBtn() {
			let action = {
				type: 'add_item',
			};
			dispatch(action)
		},

		deleteClick(index) {
			let action = {
				type: 'delete_item',
				index
			};
			dispatch(action)
		}

	}
};

export default connect(stateToProps, dispatchToProps)(TodoListState);
