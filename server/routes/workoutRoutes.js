import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { createNewWorkout, deleteWorkout, getWorkout, updateWorkout } from '../controllers/workout/workoutController.js';
import { createNewWorkoutLog } from '../controllers/workout/logController.js';

const router = express.Router();

router.route('/').post(protect, createNewWorkout).put(protect, updateWorkout).delete(protect, deleteWorkout);
router.route('/log').post(protect, createNewWorkoutLog);
router.route('/:id').get(protect, getWorkout);

export default router;
 