const fetch = require('node-fetch');

const API_KEY = 'T3AXOCN093PNJJR2';

const stockController= {};

stockController.getStock = async (req, res, next) => {
  try{
    const symbol = req.params.stock;
    const data = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`)
      .then(response => response.json());
    res.locals.stockData = data;
  }
  catch(error) {
    return next({
      log: `Error in stockController.getStock ${error}`,
      status: 400,
      message: { err: 'An error occurred' },
    });
  }
  return next();
};

stockController.searchStock = async (req, res, next) => {
  try{
    const keyword = req.params.keyword;
    console.log(keyword);
    console.log(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${API_KEY}`)
    const data = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keyword}&apikey=${API_KEY}`)
      .then(response => response.json());
    res.locals.stockList = data;
    console.log(data);
  }
  catch(error) {
    return next({
      log: `Error in stockController.searchStock ${error}`,
      status: 400,
      message: { err: 'An error occurred' },
    });
  }
  return next();
};

module.exports = stockController;