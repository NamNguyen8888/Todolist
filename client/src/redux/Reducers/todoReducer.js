import {
	FETCH_ALL,
	FETCH_BY_PRIORIRY,
	FETCH_BY_SEARCH,
	GET_TODO,
	UPDATE
} from '../Constants/ActionTypes';

const initialState = [];

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ALL:
			return [...action.payload];
		case GET_TODO:
			return [...state, action.payload];
		case UPDATE:
			return state.map(todo =>
				todo._id === action.payload._id ? action.payload : todo
			);
		case FETCH_BY_SEARCH:
			return action.payload;
		case FETCH_BY_PRIORIRY:
			return action.payload;
		default:
			return state;
	}
};
export default todoReducer;
