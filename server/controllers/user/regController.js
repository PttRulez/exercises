import User from '../../models/userModel.js';
import asyncHandler from 'express-async-handler';
import { generateToken } from '../../helpers/generateToken.js';

// @desc    Register user
// @route   POST /api/users
// @access  Public

export const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const haveUser = await User.findOne({ email });

  if (haveUser) {
    res.status(400);
    throw new Error('Данный пользователь уже зарегистрирован');
  }

  const user = await User.create({
    email,
    password,
  });

  const token = generateToken(user._id);

  // Create token
  res.json({ user, token });
});
 