import Exercise from '../../models/exerciseModel.js';
import expressAsyncHandler from 'express-async-handler';

// @desc    Create new exercise
// @route   POST /api/exercises
// @access  Private
export const createNewExercise = expressAsyncHandler(async (req, res) => {
  const { name, times, imageName } = req.body;

  const exercise = await Exercise.create({
    name,
    times,
    imageName,
  });

  res.json(exercise);
});

// @desc    Get exercises
// @route   GET /api/sxercises/:id
// @access  Private
export const getExercises = expressAsyncHandler(async (req, res) => {
  const exercises = await Exercise.find({});

  res.json(exercises);
});

// @desc    Update exercise
// @route   PUT /api/exercises
// @access  Private
export const updateExercise = expressAsyncHandler(async (req, res) => {
  const { name, times, imageIndex, exerciseId } = req.body;

  const exercise = await Exercise.findById(exerciseId);

  if (!exercise) {
    res.status(404);
    throw new Error('Данное упражнение не найдено!');
  }

  exercise.name = name;
  exercise.times = times;
  exercise.imageIdx = imageIndex;

  const updatedExercise = await exercise.save();

  res.json(updatedExercise);
});

// @desc    Delete exercise
// @route   DELETE /api/exercises
// @access  Private
export const deleteExercise = expressAsyncHandler(async (req, res) => {
  const { exerciseId } = req.body;

  const exercise = await Exercise.findById(exerciseId);

  if (!exercise) {
    res.status(404);
    throw new Error('Данное упражнение не найдено!');
  }

  await exercise.remove();

  res.json({ message: 'Exercise has been removed'});
});

