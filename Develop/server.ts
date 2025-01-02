import express from 'express';
import db from './config/connection.js';
import { Item } from './models/index.js';


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/items', (req, res) => {
    try {
        Item.find({}).then((items) => {
            res.json(items);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`🌍 Connected on localhost:${PORT}`);
    });
});
