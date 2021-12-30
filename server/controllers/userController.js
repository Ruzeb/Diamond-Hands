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
    console.log(findResult);
    if (!findResult) {
      // IF NO USERNAME/PASSWORD, THEN REDIRECT TO SIGNUP
    } else {
      await bcrypt.compare(password, findResult['password'], (err, isValid) => {
        console.log(isValid);
        if (isValid){
          res.locals.user = findResult;
          return next();
        }
      });
    }
  }
};


userController.addToStockList = async (req, res, next) => {
  console.log('inaddtostocklist', req.body);

  if ('username' in req.body && req.body.username !== ''){
    if ('stockName' in req.body && req.body.stockName !== ''){
      try{
        const doc = await User.findOneAndUpdate({'username': req.body.username}, {$push: {stockList: req.body.stockName}}, {new: true});
        // doc.stockList.push(req.body.stockName);
        // await doc.save();
        res.locals.user = doc;
        
      }catch(error){
        return next({
          log: `error ${error}`,
          message: {
            'err': `error. check server logs for literally no more detail than is in this message. ${error}`,
          }
        });
      }
      
    }
    else{
      return next({
        log: 'no stock received',
        message: {
          'err': 'no stock received. check server logs for literally no more detail than is in this message.',
        }
      });
    }
    
  }
  else {
    return next({
      log: 'error with credentials user',
      message: {
        'err': 'error with credentials user. check server logs for literally no more detail than is in this message.',
      }
    });
  }
  return next();
};

module.exports = userController;
