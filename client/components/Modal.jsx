import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserStockList, setUser } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  login: (e) => {
    e.preventDefault();
    console.log(e.target.form[0].value, e.target.form[1].value);
    dispatch(getUserStockList(e.target.form[0].value, e.target.form[1].value));
    dispatch(setUser(e.target.form[0].value));
  },


});
//const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Modal = (props) => {
  return (
    <div id="modal-overlay">
      <form id="form-modal">
        <div>
          <label htmlFor="username">Username:</label>
          <input className="form-input" type="text" name="username" placeholder="Enter your username"/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input className="form-input" type="password" name="password" placeholder="Enter your password"/>
        </div>
        <div id='button-container'>
          <button className="form-button" onClick={(e) => {props.login(e);props.onCloseButtonClick();}}>Login</button>
          <button className="form-button" onClick={props.onCloseButtonClick}>SignUp</button>
        </div>
      </form>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Modal);