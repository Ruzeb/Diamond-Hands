import React, { useState, useEffect } from 'react';
import StockItem from './StockItem'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

// console.log('searchbar');

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

const SearchBar = ({searchList, changeSelectedStock, getSearchListOnChange}) => {
  // console.log('stocklist', list)
  return (
    <div id="search-container">
      <input id="searchbar" type="search" placeholder="Search" onChange={(e) => getSearchListOnChange(e.target.value)}/>
      <ul id="search-list">
        {searchList.map((stockName, idx) => stockItemMaker(stockName, idx, changeSelectedStock))}
      </ul>
    </div>
    
  )
}

// export default connect(null, mapDispatchToProps)(StockList);
export default SearchBar;