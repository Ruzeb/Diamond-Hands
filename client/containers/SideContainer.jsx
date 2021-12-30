import React, { useState, useEffect } from 'react';
import StockList from '../components/StockList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = ({ stockList, userName }) => ({
  stockList,
  userName
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const SideContainer = props => {
  const [showModal, setShowModal] = useState(false);
  console.log(props);
  return (
    <section id="sidebar">
      <div id="sidebar-icons">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16" onClick={() => {props.setShowModal(true);}}>
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>
      </div>
      {props.userName && (<p>Hello</p>)}
      <h2 id="list-name">My List</h2>
      <StockList stockList={props.stockList} changeSelectedStock={props.changeSelectedStock}/>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SideContainer);