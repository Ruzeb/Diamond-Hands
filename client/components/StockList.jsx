import React, { useState, useEffect } from 'react';
import StockItem from './StockItem'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

console.log('here');

const stockItemMaker = (stockName, idx, changeSelectedStock) => {
  console.log("stockItemMaker", stockName, idx);
  return <StockItem 
    key={idx} 
    stockName={stockName} 
    changeSelectedStock={() => changeSelectedStock(stockName)} 
  />
}


// const mapDispatchToProps = dispatch => ({
//   changeSelectedStock: () => dispatch(actions.changeSelectedStock()),
// })

const StockList = ({stockList, changeSelectedStock}) => {
  // console.log('stocklist', list)
  return (
    <ul id="stock-list">
      {stockList.stockList.map((stockName, idx) => stockItemMaker(stockName, idx, changeSelectedStock))}
    </ul>
  )
}

// export default connect(null, mapDispatchToProps)(StockList);
export default StockList;