// 入口文件 相当于图书馆
import {createStore} from 'redux';
import reducer from "./reducer";

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

