import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";

const ActivityLog = () => {
  const activities = [
    { id: 1, date: '12-04-2024 10:14 PM', action: 'Modified new item', user: 'Jakit Sarker' },
    { id: 2, date: '12-04-2024 10:14 PM', action: 'Modified new item', user: 'Jakit Sarker' },
    { id: 3, date: '12-04-2024 10:14 PM', action: 'Modified new item', user: 'Jakit Sarker' },
    { id: 4, date: '12-04-2024 10:14 PM', action: 'Modified new item', user: 'Jakit Sarker' },
    { id: 5, date: '12-04-2024 10:14 PM', action: 'New items approved', user: 'Jakit Sarker' },
  ];

  return (
    <div className="bg-white  p-6 rounded-lg shadow-md">
         <div className="flex mx-4 justify-between items-center   mb-4">
        <h2 className="text-xl font-semibold">Activity Log</h2>
        <BsThreeDotsVertical />

      </div>
     
      <div className=" border-t mx-4 ">
        {activities.map(activity => (
          <div key={activity.id} className=" mt-4  flex px-3 border border-1 p-1 justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500">{activity.date}</p>
              <p className="text-sm text-gray-700">{activity.action}</p>
            </div>
            <div className="flex items-center">
              
              <p className="text-sm text-gray-700">{activity.user}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityLog;
