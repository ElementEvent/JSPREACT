import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from "./TodoList";
import {Provider} from 'react-redux';
import store from "./store";

// 使用Provider连接器 把store里面的数值连接给子组件
const App = (
	<Provider store={store}>
		<TodoList />
	</Provider>
)


ReactDOM.render(App, document.getElementById('root'));
