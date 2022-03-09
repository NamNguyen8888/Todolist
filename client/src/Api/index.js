import axios from 'axios';

const url = 'http://localhost:5000/api/todo';

export const fetchTodo = () => axios.get(url);
export const GetTodo = newTodo => axios.post(url, newTodo);
export const UpdateTodo = (id, updateTodo) =>
	axios.patch(`${url}/${id}`, updateTodo);
export const fetchTodoBySearch = searchQuery =>
	axios.get(`${url}/search?searchQuery=${searchQuery.search || 'none'}`);
export const fetchTodoByPrioriry = prioriryQuery =>
	axios.get(
		`${url}/prioriry?prioriryQuery=${prioriryQuery.prioriry || 'none'}`
	);
