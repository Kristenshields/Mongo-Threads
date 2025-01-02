import { Request, Response } from 'express';
import { Thought, User } from '../models/index.js';


export const getAllThoughts = async(_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err: any) {
        res.status(500).json({
            message: err.message
        });
    }
};


export const getThoughtById = async(req: Request, res: Response) => {
    const {thoughtId} = req.params;
    try {
        const user = await Thought.findById(thoughtId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (err: any) {
        res.status(500).json({
            message: err.message
        });
    }
};

export const createThought = async(req: Request, res: Response) => {
    const { thought } = req.body;
    try {
        const newThought = await Thought.create({
            thought
        });
        res.status(201).json(newThought);
    } catch (err: any) {
        res.status(400).json({
            message: err.message
        });
    }
};

export const updateThought = async(req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        if (!thought) {
            res.status(404).json({
                message: 'No thought found with that ID'
            });
        }

        res.json(thought)
    } catch (err: any) {
        res.status(400).json({
            message: err.message
        });
    }
};

export const deleteThought = async(req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

        if (!thought) {
            res.status(404).json({
                message: 'No thought found with that ID'
            });
        } else {
            await User.deleteMany({ _id: { $in: thought.reactions } });
        res.json({
            message: 'Thought deleted'
        });
    }
    } catch (err: any) {
        res.status(500).json({
            message: err.message
        });
    }
};
        
