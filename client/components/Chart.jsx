import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2'
 

export const LineChart = ({ chartData }) => {
  return (
    <div id="linechart">
      <Line 
      data={chartData}
      options={
        {
          responsive: true,
          maintainAspectRatio: false,

          plugins: {
            legend: {
                display: false,
            }
          },
          scaleFontColor : '#666',
          scales:{
            x:{
              grid: {
                display: false
              },
              ticks: {
                color: "white"
              }
            },
            y:{
              grid: {
                display: false
              },
              ticks: {
                color: "white"
              }
            }
          }
        }
      }
      />
    </div>
  )
};