import { Button, Col, Input, Row, Select, Spin, Tag } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetTodo } from '../../redux/Actions/Action';
import Todo from '../Todo/Todo';
import { LoadingOutlined } from '@ant-design/icons';

const TodoList = () => {
	const [postData, setPostData] = useState({
		name: '',
		prioriry: 'Medium',
		completed: false
	});

	const todoData = useSelector(state => state.todo);
	const dispatch = useDispatch();
	const handleSubmit = e => {
		e.preventDefault();
		dispatch(GetTodo(postData));
		clear();
	};
	const clear = () => {
		setPostData({
			name: ' ',
			prioriry: 'Medium',
			completed: false
		});
	};
	const antIcon = (
		<LoadingOutlined
			style={{
				fontSize: 24
			}}
			spin
		/>
	);
	return (
		<Row style={{ height: 'calc(100%-40px)' }}>
			<Col span={24} style={{ height: 'calc(100%-40px)', overflowY: 'auto' }}>
				{!todoData.length ? (
					<Spin
						indicator={antIcon}
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					></Spin>
				) : (
					todoData.map((item, index) => <Todo todo={item} key={index} />)
				)}
			</Col>
			<Col span={24}>
				<Input.Group style={{ display: 'flex' }} compact>
					<Input
						onChange={e => setPostData({ ...postData, name: e.target.value })}
					/>
					<Select
						defaultValue="Medium"
						value={postData.prioriry}
						onChange={value => setPostData({ ...postData, prioriry: value })}
					>
						<Select.Option value="High" label="High">
							<Tag color="red">High</Tag>
						</Select.Option>
						<Select.Option value="Medium" label="Medium">
							<Tag color="blue">Medium</Tag>
						</Select.Option>
						<Select.Option value="Low" label="Low">
							<Tag color="gray">Low</Tag>
						</Select.Option>
					</Select>
					<Button type="primary" onClick={handleSubmit}>
						Add
					</Button>
				</Input.Group>
			</Col>
		</Row>
	);
};

export default TodoList;
