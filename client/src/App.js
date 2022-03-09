import { Divider, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Filters from './components/Filters/Filters';
import TodoList from './components/TodoList/TodoList';
import { FetchAllTodo } from './redux/Actions/Action';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(FetchAllTodo());
	}, [dispatch]);

	return (
		<div className="container">
			<Typography.Title style={{ textAlign: 'center' }}>
				TODO APP with REDUX
			</Typography.Title>
			<Filters />
			<Divider />
			<TodoList />
		</div>
	);
};

export default App;
