import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaRegCircle } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";

import 'chart.js/auto';

const data = {
  labels: ['00hr', '02hr', '4hr', '6hr', '8hr',  '10hr', '12hr', '14hr', '16hr', '20hr', '22hr',  '24hr'],
  datasets: [
    {
      label: 'Revenue',
      data: [0, 100, 200, 230, 210 , 340, 450, 430, 420 , 410, 530, 600,],
      borderColor: '#d90429',
      backgroundColor: 'rgba(217, 4, 41, 0.2)',
      fill: true,
      pointBackgroundColor: '#d90429',
      pointBorderColor: '#d90429',
      pointHoverBackgroundColor: '#d90429',
      pointHoverBorderColor: '#d90429',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.raw} AED`;
        },
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value) {
          return `AED ${value}`;
        },
      },
    },
  },
};

const RevenueChart = () => {
  return (
    <div className="max-w-full md:h-[365px] p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Revenue 600 AED</h2>
        <BsThreeDotsVertical />

      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default RevenueChart;
