import { Router } from 'express';
const router = Router();

import { getThoughts, getSingleThought, createThought, updateThought, deleteThought,  } from '../../controllers/thoughtController.js';


router.route('/').get(getThoughts).post(createThought);


router
  .route('/:thoughtId')
  .get(getThoughts)
  .get(getSingleThought)
  .post(createThought)
  .put(updateThought)
  .delete(deleteThought);



export default router;
