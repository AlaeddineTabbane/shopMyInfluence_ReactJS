import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";


const data = {
  labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
  datasets: [
    {
      label: "This Month",
      backgroundColor: "rgb(255, 99, 132,0.4)",
      borderColor: "rgb(255, 99, 132)",
      data: [
        0, 1000, 2000, 2000,1000, 2000, 3000, 2000, 3000, 4000,
        4000, 3000, 2000, 1000, 2000, 2000

      ],
      fill: true,
    },
    {
      label: "Preview Month",
      backgroundColor: "rgb(22, 99, 132,0.4)",
      borderColor: "rgb(22, 99, 132)",
      data: [
        0, 2000, 3000, 3000, 4000, 5000, 4000, 3000, 4000, 3000,
        3000, 2000, 3000, 4000, 3000, 2000

      ],
      fill: true,
    },
  ],
};

function Statistics() {
  return (
    <div className="statistics">
      <div className="text-center mb-3">Sales number by country</div>
      <div className='chart'>
        <Line data={data} />
      </div>
    </div>
  )
}

export default Statistics