import { ObjectId } from 'mongodb';
import { User, Thought } from '../models/index.js';
import { Request, Response } from 'express';

export const userCount = async () => {

    const numberOfUsers = await User.aggregate()
    .count('userCount');
    return numberOfUsers;
}

export const reaction = async (userId: string) => 
    User.aggregate([
        {
            $match: {
                _id: new ObjectId(userId)
            }
        },
        {
            $lookup: {
                from: 'reactions',
                localField: '_id',
                foreignField: 'userId',
                as: 'reactions'
            }
        },
        {
            $project: {
                _id: 0,
                username: 1,
                reactionCount: { $size: '$reactions' }
            }
        }
    ]);

    export const getAllUsers = async (_req: Request, res: Response) => {
        try {
            const users = await User.find();

            const userObj = {
                users,
                userCount: await userCount(),
            }
        
            res.json(userObj);
        } catch (err: any) {
            res.status(500).json({
                message: err.message
            });
        }
    };

    export const getUserById = async (req: Request, res: Response) => {
        const { userId } = req.params;
        try {
            const user = await User.findById(userId);
            if (user) {
                res.json({
                    user,
                    reaction: await reaction(userId)
                });
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

    export const createUser = async (req: Request, res: Response) => {
        
        try {
            const user = await User.create(req.body);
            res.json(user);
                
            } catch (err) {
                res.status(500).json(err);
            }
        };

        export const deleteUser = async (req: Request, res: Response) => {
            try {
                const user = await User.findOneAndDelete({ _id: req.params.userId });

                if (!user) {
                    return res.status(404).json({
                        message: 'No user found with that ID'
                    });

                }

                const thought = await Thought.findOneAndUpdate(
                    { users: req.params.userId },
                    { $pull: { users: req.params.userId } },
                    { new: true }
                );

                if (!thought) {
                    return res.status(404).json({
                        message: 'No thought found with that ID'
                    });
                }

                return res.json({ message: 'User and associated thoughts deleted' });
            } catch (err) {
                console.log(err);
                return res.status(500).json(err);
            }
        }

        export const addReaction = async (req: Request, res: Response) => {
            console.log(req.body);
            try {
                const user = await User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $addToSet: { reactions: req.body } },
                    { runValidators: true, new: true }
                );
                 if (!user) {
                    return res.status(404).json({
                        message: 'No user found with that ID'
                    });

                }

                return res.json(user);
            } catch (err) {
                return res.status(500).json(err);
            }
        }

        export const removeReaction = async (req: Request, res: Response) => {
            try {
                const user = await User.findOneAndUpdate(
                    { _id: req.params.userId },
                    { $pull: { reactions: { reactionId: req.params.reactionId } } },
                    { runValidators: true, new: true }
                );

                if (!user) {
                    return res.status(404).json({
                        message: 'No user found with that ID'
                    });

                }

                return res.json(user);
            } catch (err) {
                return res.status(500).json(err);
            }
        }

          
