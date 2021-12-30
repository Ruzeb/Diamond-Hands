import axios from 'axios';
import * as types from '../constants/actionTypes';

export const changeSelectedStock = stockName => (dispatch) => {
  console.log(stockName);
  axios.get(`/stock/${stockName}`)
    .then(({data}) => {
      dispatch({
        type: types.CHANGE_SELECTED_STOCK,
        payload: data,
      });
    })
    .catch(console.error);
};

export const getUserStockList = (user, password) => (dispatch) => {
  console.log('in getuser');
  axios.post(`/login`, {
      username: user,
      password: password
    })
    .then(({data}) => {
      console.log('data', data);
      dispatch({
        type: types.GET_USER_STOCKLIST,
        payload: data,
      });
    })
    .catch(console.error);
};

export const getSearchStockList = (keyword) => (dispatch) => {
  console.log('in getsearch', keyword);
  axios.get(`/stock/search/${keyword}`)
    .then(({data}) => {
      dispatch({
        type: types.GET_SEARCH_STOCKLIST,
        payload: data,
      });
    })
    .catch(console.error);
};

export const addStockToUserList = (username, stockName) => (dispatch) => {
  console.log('in addstockuserlist', stockName);
  axios.patch(`/login/addStock`, {
      username: username,
      stockName: stockName
    })
    .then(({data}) => {
      dispatch({
        type: types.ADD_STOCK_TO_LIST,
        payload: data,
      });
    })
    .catch(console.error);
};

export const setUser = (username) => ({
  type: types.SET_USER,
  payload: username,
});