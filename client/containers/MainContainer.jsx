import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LineChart } from "../components/Chart";
import SearchBar from '../components/SearchBar';
import * as actions from '../actions/actions';

const mapStateToProps = ({stockList: {userName, stockName, data, searchList }}) => ({
  userName,
  stockName,
  data,
  searchList
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const MainContainer = props => {
  //console.log('maincontainer', props.stockName)
  // console.log('maincontainer', props.data)
  return (
    <main>
      <img id='logo' src='https://i.imgur.com/eAjpVVG.jpg'/>
      <SearchBar 
        searchList={props.searchList} 
        changeSelectedStock={props.changeSelectedStock}
        getSearchListOnChange={props.getSearchStockList}
      />
      <div id="stock-header">
        <div id="stock-info">
          <h2 id="stock-title">{props.stockName}</h2>
          <h2 id="stock-price">${props.data.datasets[0]['data'].slice(-1)}</h2>
        </div>
        <button className="add-stock" value={props.stockName} onClick={(e) => props.addStockToUserList(props.userName, e.target.value)}>Add Stock</button>
      </div>
      <LineChart chartData = {props.data}/>

      {/* <article id="buy-sell">
        <input type="number" min="1" max="10000"/>
        <button>BUY</button>
        <button>SELL</button>
      </article> */}
    </main>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);