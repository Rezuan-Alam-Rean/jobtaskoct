
import { FaShoppingCart } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";
import img1 from "../assets/Pie.png";

const OrderSummary = () => {
    return (
        <div className="max-w-full  p-4 bg-white rounded-lg shadow-md">
            <div className="flex justify-between border-b items-center mb-4">
                <h2 className="text-xl pb-4 font-semibold">Current Order Summary</h2>
                <BsThreeDotsVertical />
            </div>
            <div className="flex px-6 justify-between items-center bg-pink-100 p-2 rounded-md mb-4">
                <div className="flex items-center">
                    <FaShoppingCart className="text-pink-600 mr-2" />
                    <span className="text-pink-600 font-semibold">125 new orders!</span>
                </div>
                <button className="bg-white text-pink-600 border border-pink-600 px-4 py-1 rounded-md">Manage Order</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-4">
                <div className="text-center p-4 rounded-xl shadow border border-1">
                    <p className="text-4xl font-bold">389</p>
                    <p className="text-gray-500">Active</p>
                </div>
                <div className="text-center p-4 rounded-xl shadow border border-1">
                    <p className="text-4xl font-bold">125</p>
                    <p className="text-gray-500">Pending</p>
                </div>
                <div className="text-center p-4 rounded-xl shadow border border-1">
                    <p className="text-4xl font-bold">234</p>
                    <p className="text-gray-500">Refunded</p>
                </div>
                <div className="text-center p-4 rounded-xl shadow border border-1">
                    <p className="text-4xl font-bold">234</p>
                    <p className="text-gray-500">Cancelled</p>
                </div>
            </div>
            <div className='md:flex'>
                <div className="md:w-1/2">
                    <img src={img1} alt="Pie chart" className="w-full" />
                </div>
                <div className="space-y-2 w-full">
                    <div className="flex items-center justify-between">
                        <span className="w-2/4 text-gray-500">Active (43%)</span>
                        <span className="ml-2 text-gray-700">384</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '83%' }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="w-2/4 text-gray-500">Pending (20%)</span>
                        <span className="ml-2 text-gray-700">125</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '47%' }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="w-2/4 text-gray-500">Refunded (37%)</span>
                        <span className="ml-2 text-gray-700">234</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-orange-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="w-2/4 text-gray-500">Cancelled (37%)</span>
                        <span className="ml-2 text-gray-700">234</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OrderSummary;



