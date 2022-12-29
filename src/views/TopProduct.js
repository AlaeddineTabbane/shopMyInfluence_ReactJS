import React from 'react'
import Chart from 'chart.js/auto';
import { Pie } from "react-chartjs-2";


const data = {
  // labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
  datasets: [
    {
      label: "This Month",
      backgroundColor: "rgb(255, 99, 132,0.4)",
      borderColor: "rgb(255, 99, 132)",
      data: [10,8,6,7,10,4,8,5,7,10],
    }
  ],
};

function TopProduct() {
  return (
    <div className="top-product">
      <div className="text-center mb-3">Top 10 product sold</div>
      <div className='chart'>
        <Pie data={data} />
      </div>
    </div>
  )
}

export default TopProduct