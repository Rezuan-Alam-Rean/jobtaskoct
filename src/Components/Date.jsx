import { TbCalendarCheck } from "react-icons/tb";


import { FaUser, FaClipboardList, FaCheck, FaTimes, FaUtensils, FaMotorcycle, FaThumbsUp, FaTicketAlt } from 'react-icons/fa'
const Date = () => {

    const stats = [
        { icon: <FaUser />, value: 3301, label: 'Total Customer' },
        { icon: <FaClipboardList />, value: 10457, label: 'Total Orders' },
        { icon: <FaCheck />, value: 3000, label: 'Completed Orders' },
        { icon: <FaTimes />, value: 240, label: 'Cancelled Orders' },
        { icon: <FaUtensils />, value: 1200, label: 'Restaurant Partners' },
        { icon: <FaMotorcycle />, value: 3628, label: 'Rider Partners' },
        { icon: <FaThumbsUp />, value: 17349, label: 'Approved Rider' },
        { icon: <FaTicketAlt />, value: 1393, label: 'Coupons Active' },
    ];
    return (
        <div className='rounded-lg max-w-7xl mx-auto shadow-sm bg-[#ffffff]  mt-[30px]  '>
            <div className="p-4">
                <div className="md:flex justify-between mt-[14px] mb-[30px]">
                    <div className="flex space-x-1">
                        <button className="px-4 py-2 bg-white rounded shadow">12 months</button>
                        <button className="px-4 py-2 bg-white rounded shadow">30 days</button>
                        <button className="px-4 py-2 bg-white rounded shadow">7 days</button>
                        <button className="px-4 py-2 bg-white rounded shadow">24 hours</button>
                    </div>
                    <button className="px-4 py-2 mt-6 md:mt-0 bg-white rounded shadow flex gap-x-2 items-center">  <TbCalendarCheck size={23} />

                    Custom Date</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded shadow">
                            <div className="text-3xl text-white bg-[#A1045A] h-[58px] w-[58px] flex justify-center items-center mr-4">{stat.icon}</div>
                            <div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-gray-500">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Date;