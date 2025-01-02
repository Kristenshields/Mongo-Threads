import db from '../config/connection.js';
import { Thought, User } from '../models/index.js';
try {
    await db();
    const users = [];
    for (let i = 0; i < 10; i++) {
        const reactions = [];
        const username = `user${i}`;
        users.push({
            username,
            reactions,
        });
    }
    const userData = await User.create(users);
    await Thought.create({
        thoughtText: 'I love MongoDB!',
        username: userData[0]._id,
    });
    console.table(userData);
    console.info('Seed data has been successfully added to the database!');
    process.exit(0);
}
catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
}
