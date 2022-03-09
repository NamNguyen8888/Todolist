import mongoose from 'mongoose';

const Todo = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		prioriry: {
			type: String,
			required: true
		},
		completed: {
			type: Boolean,
			default: false
		}
	},
	{ timestamps: true }
);

const TodoList = mongoose.model('Todo', Todo);
export default TodoList;
