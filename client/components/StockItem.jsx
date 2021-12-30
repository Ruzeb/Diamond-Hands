import React, { useState, useEffect } from 'react';
console.log('stockItem1');
const StockItem = ({ stockName, changeSelectedStock }) => {
// const StockItem = ({stockName }) => {
  // console.log('stockitem2', stockName, changeSelectedStock)
  return (
    <li className='stock-item' onClick={changeSelectedStock}>
      {stockName}
    </li>
  )
}

export default StockItem;