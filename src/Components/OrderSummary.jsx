import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";

const OrderSummary = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-full">
         <div className="flex justify-between border-b items-center mb-4 ">
        <h2 className="text-xl pb-4 font-semibold ">Current Order Summary</h2>
        <BsThreeDotsVertical />

      </div>

      <div className="flex   justify-between items-center bg-pink-100 p-2 rounded-md ">
        <div className="flex  items-center">
          <FaShoppingCart className="text-pink-600 mr-2" />
          <span className="text-pink-600 font-semibold">125 new orders!</span>
        </div>
        <button className="bg-pink-600 text-white px-4 py-2 rounded-md">Manage Order</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold">389</p>
          <p className="text-gray-500">Active</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">125</p>
          <p className="text-gray-500">Pending</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">234</p>
          <p className="text-gray-500">Refunded</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">234</p>
          <p className="text-gray-500">Cancelled</p>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <span className="w-1/4 text-gray-500">Active (43%)</span>
          <div className="w-3/4 bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: '43%' }}></div>
          </div>
          <span className="ml-2">384</span>
        </div>
        <div className="flex items-center">
          <span className="w-1/4 text-gray-500">Pending (20%)</span>
          <div className="w-3/4 bg-gray-200 rounded-full h-4">
            <div className="bg-blue-500 h-4 rounded-full" style={{ width: '20%' }}></div>
          </div>
          <span className="ml-2">125</span>
        </div>
        <div className="flex items-center">
          <span className="w-1/4 text-gray-500">Refunded (37%)</span>
          <div className="w-3/4 bg-gray-200 rounded-full h-4">
            <div className="bg-orange-500 h-4 rounded-full" style={{ width: '37%' }}></div>
          </div>
          <span className="ml-2">234</span>
        </div>
        <div className="flex items-center">
          <span className="w-1/4 text-gray-500">Cancelled (37%)</span>
          <div className="w-3/4 bg-gray-200 rounded-full h-4">
            <div className="bg-red-500 h-4 rounded-full" style={{ width: '37%' }}></div>
          </div>
          <span className="ml-2">234</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;



// import React from 'react';
// import { FaClipboardList } from 'react-icons/fa';
// import { Pie } from 'react-chartjs-2';
// import 'chart.js/auto';

// const pieData = {
//   labels: ['Active', 'Pending', 'Refunded', 'Cancelled'],
//   datasets: [
//     {
//       data: [384, 125, 234, 234],
//       backgroundColor: ['#34D399', '#60A5FA', '#FBBF24', '#F87171'],
//       hoverOffset: 4,
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'bottom',
//       labels: {
       
//         padding: 20,
//       },
//     },
//   },
//   maintainAspectRatio: false,
// };

// const OrderSummary = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md max-w-full">
//       <h2 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
//         <FaClipboardList className="mr-2" /> Current Order Summary
//       </h2>
//       <div className="bg-red-100 p-4 rounded-md mb-4 flex justify-between items-center">
//         <span className="text-red-600 font-semibold">125 new orders!</span>
//         <button className="bg-red-500 text-white px-4 py-2 rounded-md">Manage Order</button>
//       </div>
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div className="text-center">
//           <h3 className="text-3xl text-gray-700">384</h3>
//           <p className="text-gray-500">Active</p>
//         </div>
//         <div className="text-center">
//           <h3 className="text-3xl text-gray-700">125</h3>
//           <p className="text-gray-500">Pending</p>
//         </div>
//         <div className="text-center">
//           <h3 className="text-3xl text-gray-700">234</h3>
//           <p className="text-gray-500">Refunded</p>
//         </div>
//         <div className="text-center">
//           <h3 className="text-3xl text-gray-700">234</h3>
//           <p className="text-gray-500">Cancelled</p>
//         </div>
//       </div>
//       <div className="relative h-64">
//         <Pie data={pieData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;
