import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2'
 

export const LineChart = ({ chartData }) => {
  return (
    <div>
      <Line 
      data={chartData}
      options={{responsive: false}}
      />
    </div>
  )
};