import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUserStockList } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  login: (e) => {
    e.preventDefault();
    console.log(e.target.form[0].value, e.target.form[1].value);
    dispatch(getUserStockList(e.target.form[0].value, e.target.form[1].value));
  }
});
//const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Modal = (props) => {
  return (
    <div id="modal-overlay">
      <div id="form-modal"> 
      <form>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" placeholder="Enter your username"/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" placeholder="Enter your username"/>
        <button onClick={(e) => {props.login(e);props.onCloseButtonClick();}}>Login</button>
        <button onClick={props.onCloseButtonClick}>SignUp</button>

      </form>
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Modal);