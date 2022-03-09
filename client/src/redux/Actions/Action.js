import * as api from '../../Api/index.js';
import {
	FETCH_ALL,
	FETCH_BY_PRIORIRY,
	FETCH_BY_SEARCH,
	GET_TODO,
	UPDATE
} from '../Constants/ActionTypes';

export const FetchAllTodo = () => async dispatch => {
	try {
		const { data } = await api.fetchTodo();
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log('error fetch', error.message);
	}
};
export const GetTodo = newTodo => async dispatch => {
	try {
		const { data } = await api.GetTodo(newTodo);
		dispatch({ type: GET_TODO, payload: data });
	} catch (error) {
		console.log('error get todo', error);
	}
};
export const UpdateTodo = (id, updateTodo) => async dispatch => {
	try {
		const { data } = await api.UpdateTodo(id, updateTodo);
		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log('error update', error);
	}
};
export const getSearch = searchQuery => async dispatch => {
	try {
		const {
			data: { data }
		} = await api.fetchTodoBySearch(searchQuery);
		console.log(data);
		dispatch({ type: FETCH_BY_SEARCH, payload: data });
	} catch (error) {
		console.log('error search', error);
	}
};
export const getPrioriry = prioriryQuery => async dispatch => {
	try {
		const {
			data: { data }
		} = await api.fetchTodoByPrioriry(prioriryQuery);
		console.log(data);
		dispatch({ type: FETCH_BY_PRIORIRY, payload: data });
	} catch (error) {
		console.log('error prioriry', error);
	}
};
