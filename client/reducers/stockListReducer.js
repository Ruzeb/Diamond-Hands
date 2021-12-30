import * as types from '../constants/actionTypes';

const initialState = {
  stockName: 'HOOD',
  stockList: ['AMC', 'TSLA', 'HOOD'],
  data : {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    datasets: [{
      label: 'HOOD stock',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [131.3500, 130.9698, 131.0262, 130.9400],
    }]
  }
};

const parseData = (data) => {
  const arrData = [];
  const arrLabels = [];
  for (const date in data){
    arrData.push((Number(data[date]['4. close'])).toFixed(2));
    arrLabels.push((new Date(date).toLocaleTimeString('en-US')));
  }
  return [arrLabels, arrData];
}


const stockListReducer = (state=initialState, action) => {
  switch (action.type){
    
    case types.CHANGE_SELECTED_STOCK:
      // console.log(state.data)
      const [labels, timeSeriesData] = parseData(action.payload['Time Series (5min)']);
      const datasets = [...state.data.datasets];
      datasets[0]['label'] = action.payload['Meta Data']['2. Symbol'];
      datasets[0]['data'] = timeSeriesData;
      // console.log(datasets);
      console.log('datasets');

      const data = {...state.data, datasets: datasets, labels: labels};
      // console.log('data', data);
      console.log(action.payload)
      return {
        ...state,
        stockName: action.payload['Meta Data']['2. Symbol'],
        data: data
      };

      case types.GET_USER_STOCKLIST:
        console.log(action.payload.stockList.list)
        return {
          ...state,
          stockList: action.payload['stockList']['list']
        };

    default:
       return state;
  }
}

export default stockListReducer;