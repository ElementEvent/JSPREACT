import {CHANGE_INPUT, CLICK_BTN, DELETE_ITEM, GET_LIST, GET_MY_LIST} from "./actionTypes";

export const changeInputAction = (value) => ({
	type: CHANGE_INPUT,
	value
});

export const addAction = (value) => ({
	type: CLICK_BTN,
	value
});

export const deleteAction = (index) => ({
	type: DELETE_ITEM,
	index
});

export const getListAction = (data) => ({
	type: GET_LIST,
	data
});

export const getMyListAction = () => ({
	type: GET_MY_LIST
});
