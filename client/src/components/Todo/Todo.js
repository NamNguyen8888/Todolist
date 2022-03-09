import { Checkbox, Row, Tag } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateTodo } from '../../redux/Actions/Action';

const Todo = ({ todo }) => {
	const priorityColorMapping = {
		High: 'red',
		Medium: 'blue',
		Low: 'gray'
	};
	const [checked, setChecked] = useState(todo.completed);
	const dispatch = useDispatch();
	const toggleCheckbox = () => {
		setChecked(!checked);
		dispatch(UpdateTodo(todo._id, { ...todo, completed: !checked }));
	};
	return (
		<Row
			justify="space-between"
			style={{
				marginBottom: 3,
				...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {})
			}}
		>
			<Checkbox checked={checked} onChange={toggleCheckbox}>
				{todo.name}
			</Checkbox>
			<Tag color={priorityColorMapping[todo.prioriry]} style={{ margin: 0 }}>
				{todo.prioriry}
			</Tag>
		</Row>
	);
};

export default Todo;
