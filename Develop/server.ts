import express from 'express';
import db from './config/connection.js';
import Thought from './models/thought.js';


await db();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', async (_, res) => {
    try {
        const result = await Thought.aggregate([
            {
                $lookup: {
                    from: 'reactions',
                    localField: 'reactions',
                    foreignField: '_id',
                    as: 'reactions',
                },
            },
            {
                $addFields: {
                    reactionCount: { $size: '$reactions' },
                },
            },
        ]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(PORT, () => {
    console.log(`🌍 Connected on localhost:${PORT}`);
});

