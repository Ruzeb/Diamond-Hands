const express = require('express');
const stockController = require('../controllers/stockController');
const stockRouter = express.Router();

stockRouter.get('/search/:keyword', stockController.searchStock, (req, res) => {
  return res.status(200).json(res.locals.stockList);
});

stockRouter.get('/:stock', stockController.getStock, (req, res) => {
  return res.status(200).json(res.locals.stockData);
});


module.exports = stockRouter;