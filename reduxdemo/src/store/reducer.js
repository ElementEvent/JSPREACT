// 执行方法 相当于图书馆管理员
import {CHANGE_INPUT, CLICK_BTN, DELETE_ITEM} from "./actionTypes";
const defaultState = {
	inputValue: "write",
	list: [
		'八点晨会!!!',
		'九点需求会!!!!',
		'十点开发!!!',
	]
};

export default (state = defaultState, action)=>{
	// reducer 只能接受state 不能直接改变state'
	if( action.type === CHANGE_INPUT ){
		let newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}

	if( action.type === CLICK_BTN ){
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.push(action.value);
		newState.inputValue = "";
		return newState;
	}

	if( action.type === DELETE_ITEM ){
		let newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;
	}

	return state;
}
