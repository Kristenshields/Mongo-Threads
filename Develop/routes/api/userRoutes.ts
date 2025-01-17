import { Router } from 'express';
const router = Router();
import { getUsers, getSingleUser, createUser, deleteUser } from '../../controllers/userController.js';

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/').post(getSingleUser).delete(deleteUser)

export default router;
