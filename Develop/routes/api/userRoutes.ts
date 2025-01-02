import { Router } from 'express';
const router = Router();
import { 
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    addReaction,
    removeReaction,
} from '../../controllers/userController.js';

router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:userId')
.get(getUserById)
.delete(deleteUser);

router.route('/:userId/reactions')
    .post(addReaction);

router.route('/:userId/reactions/:reactionId')
.delete(removeReaction);

export { router as userRouter };
    