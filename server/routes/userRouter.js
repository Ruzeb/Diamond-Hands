const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();

// userRouter.get('/', userController.verifyUser, (req, res) => {
//   return res.status(200).json(res.locals.user);
// });

userRouter.post('/', userController.verifyUser, (req, res) => {
  console.log('user', res.locals.user);
  return res.status(200).json(res.locals.user);
});

userRouter.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).end();
});

userRouter.patch('/addStock', userController.addToStockList, (req, res) => {
  return res.status(200).json(res.locals.user);
});

module.exports = userRouter;