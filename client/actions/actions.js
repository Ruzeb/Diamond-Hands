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
      dispatch({
        type: types.GET_USER_STOCKLIST,
        payload: data,
      });
    })
    .catch(console.error);
};