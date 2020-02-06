import {takeEvery, put} from 'redux-saga/effects'
import {GET_MY_LIST} from "./actionTypes";
import axios from 'axios'
import {getListAction} from "./actionCreators";

/**
 *
 *  saga运行逻辑解析
 *  先在 componentDidMount 执行store
 *
 *  在mySagas（）方法中监听store的 action类型，并且执行一个方法
 *  在方法中请求数据，然后再调用store的action通过reducer修改数据
 *
 *
 * */

function* mySagas(){
	yield takeEvery(GET_MY_LIST, getList)
}

function* getList(){
	const res = yield axios('http://localhost.charlesproxy.com:3000/list.json');
	const action = getListAction(res.data);
	yield put(action);
}

export default mySagas;
