import React, {Component} from 'react';
import { Input, Button, List } from 'antd'

// 无状态方法函数完成下列操作
const TodoListUiState = (props) => {
	return (
		<div style={{'margin': '10px'}}>

			<div>
				<Input
					value={props.inputValue}
					onChange={props.changeInputValue}
				/>
				<Button
					type='primary'
					onClick={props.clickBtn}
				>
					新增
				</Button>
			</div>

			<div style={{'margin': '10px', 'width': '300px'}}>
				<List
					bordered
					dataSource={props.list}
					renderItem={(item, index)=>(
						<List.Item onClick={()=>{
							props.clickDelete(index)
						}}>
							{item}
						</List.Item>
					)}
				/>
			</div>

		</div>
	);
}
export default TodoListUiState;

// 状态组件函数 会继承Component的方法 无状态组件则是普通函数方法
/*class TodoListUi extends Component {
	render() {
		return (
			<div style={{'margin': '10px'}}>

				<div>
					<Input
						value={this.props.inputValue}
						onChange={this.props.changeInputValue}
					/>
					<Button
						type='primary'
						onClick={this.props.clickBtn}
					>
						新增
					</Button>
				</div>

				<div style={{'margin': '10px', 'width': '300px'}}>
					<List
						bordered
						dataSource={this.props.list}
						renderItem={(item, index)=>(
							<List.Item onClick={()=>{
								this.props.clickDelete(index)
							}}>
								{item}
							</List.Item>
						)}
					/>
				</div>

			</div>
		);
	}
}

export default TodoListUi;*/
