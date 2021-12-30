const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

// userRouter.get('/', userController.verifyUser, (req, res) => {
//   return res.status(200).json(res.locals.user);
// });

userRouter.post('/', userController.verifyUser, (req, res) => {
  console.log(res.locals.user);
  return res.status(200).json(res.locals.user);
});

userRouter.post('/signup', userController.createUser, (req, res) => {
  return res.status(200);
});

module.exports = userRouter;