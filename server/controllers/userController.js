const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
//const Session = require('../models/sessionModel');

const userController = {};

/**
* createUser - create and save a new User into the database.
*/
userController.createUser = async (req, res, next) => {
  // get user name and password

  if ('username' in req.body && req.body.username !== '' && 'password' in req.body && req.body.password !== ''){
    await User.create({'username': req.body.username, 'password': req.body.password}, (err, data) => {
      if (err) return next({
        log: 'error creating user',
        message: {
          'err': 'error creating user. check server logs for literally no more detail than is in this message.',
        }
      });
    });

    return next();
  }
  else {
    return next({
      log: 'error creating user',
      message: {
        'err': 'error creating user. check server logs for literally no more detail than is in this message.',
      }
    });
  }
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = async (req, res, next) => {
  // write code here
  // find the user in the database using User.find with the name filter
  console.log('in verify');
  if ('username' in req.body && req.body.username !== '' && 'password' in req.body && req.body.password !== ''){
    const {username, password} = req.body;
    const findResult = await User.findOne({username: username}).lean();

    if (!findResult) {
      // IF NO USERNAME/PASSWORD, THEN REDIRECT TO SIGNUP
    } else {
      await bcrypt.compare(password, findResult['password'], (err, isValid) => {
        if (isValid){
          res.locals.user = findResult;
          return next();
        }
      });
    }
  }
};

module.exports = userController;
