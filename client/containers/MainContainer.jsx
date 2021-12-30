import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { LineChart } from "../components/Chart";

const mapStateToProps = ({
  stockList: { stockName, data }
}) => ({
  stockName,
  data
})


const MainContainer = props => {
  //console.log('maincontainer', props.stockName)
  console.log('maincontainer', props.data)
  return (
    <main>
      <img id='logo' src='https://i.imgur.com/eAjpVVG.jpg'/>
      <input id="searchbar" type="search" placeholder="Search"/>
      <div id="stock-header">
        <h2 id="stock-title">{props.stockName}</h2>
        <h2 id="stock-price">${props.data.datasets[0]['data'].slice(-1)}</h2>
        <button className="add-stock">Add Stock</button>
      </div>
      <div id="chart">
        <LineChart chartData = {props.data}/>
      </div>
      <article id="buy-sell">
        <input type="number" min="1" max="10000"/>
        <button>BUY</button>
        <button>SELL</button>
      </article>
    </main>
  )
}

export default connect(mapStateToProps, null)(MainContainer);