import express from 'express';
import mongoose from 'mongoose';
import TodoMessage from '../models/Todo.js';

const router = express.Router();

export const GetAllTodo = async (req, res) => {
	try {
		const newTodo = await TodoMessage.find();
		res.status(200).json(newTodo);
	} catch (error) {
		res.status(404).json({ error: 'Show failed record' });
	}
};

export const GetTodo = async (req, res) => {
	const newTodo = new TodoMessage(req.body);
	try {
		const saveTodo = await newTodo.save();
		res.status(200).json(saveTodo);
	} catch (error) {
		res.status(500).json({ error: 'Add a failed record' });
	}
};

export const UpdateTodo = async (req, res) => {
	const { id } = req.params;
	const { name, prioriry, completed } = req.body;
	try {
		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(404).send(`No post what that id: ${id}`);
		}
		const updateTodo = { name, prioriry, completed, _id: id };
		await TodoMessage.findByIdAndUpdate(id, updateTodo, { new: true });
		res.status(200).json(updateTodo);
	} catch (error) {
		res.status(500).json({ error: 'Update a failed record' });
	}
};
export const getTodoSearch = async (req, res) => {
	const { searchQuery } = req.query;
	try {
		const name = new RegExp(searchQuery, 'i');
		const todo = await TodoMessage.find({ name });
		console.log('search', todo);
		res.status(200).json({ data: todo });
	} catch (error) {
		res.status(404).json({ error: 'Search a failed record' });
	}
};
export const getTodoPrioriry = async (req, res) => {
	const { prioriryQuery } = req.query;
	try {
		const todo = await TodoMessage.find({
			prioriry: { $in: prioriryQuery.split(',') }
		});
		console.log('prioriry', todo);
		res.status(200).json({ data: todo });
	} catch (error) {
		res.status(404).json({ error: 'Prioriry a failed record' });
	}
};
export default router;
