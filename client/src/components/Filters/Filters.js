import React, { useState } from 'react';
import { Row, Col, Typography, Input, Radio, Select, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { getPrioriry, getSearch } from '../../redux/Actions/Action';
// import { useLocation } from 'react-router-dom';

const Filters = () => {
	// const useQuery = () => {
	// 	return new URLSearchParams(useLocation().search);
	// };
	const { Search } = Input;
	const [search, setSearch] = useState('');
	const [status, setStatus] = useState('All');
	const [prioriry, setPrioriry] = useState([]);
	const dispatch = useDispatch();
	// const query = useQuery();
	// const searchQuery = query.get('searchQuery');
	const handleSearchTextChange = e => {
		setSearch(e.target.value);
		if (search.trim()) {
			dispatch(getSearch({ search }));
		}
	};
	const handleStatusTextChange = e => {
		setStatus(e.target.value);
	};
	const handlePrioriryTextChange = value => {
		setPrioriry(value);
		if (prioriry) {
			dispatch(getPrioriry({ prioriry: prioriry.join(',') }));
		}
	};
	return (
		<Row justify="center">
			<Col span={24}>
				<Typography.Paragraph
					style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
				>
					Search
				</Typography.Paragraph>
				<Search
					placeholder="Input search text"
					value={search}
					onChange={handleSearchTextChange}
				/>
			</Col>
			<Col sm={24}>
				<Typography.Paragraph
					style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
				>
					Filter By Status
				</Typography.Paragraph>
				<Radio.Group onChange={handleStatusTextChange} value={status}>
					<Radio value="All">All</Radio>
					<Radio value="Completed">Completed</Radio>
					<Radio value="Todo">Todo</Radio>
				</Radio.Group>
			</Col>
			<Col sm={24}>
				<Typography.Paragraph
					style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
				>
					Filter By Priority
				</Typography.Paragraph>
				<Select
					mode="multiple"
					allowClear
					placeholder="Please select"
					style={{ width: '100%' }}
					value={prioriry}
					onChange={handlePrioriryTextChange}
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
			</Col>
		</Row>
	);
};

export default Filters;
