
// import { FaTasks } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";

const tasks = [
    { title: 'Restaurant Account', count: 10 },
    { title: 'Restaurant Onboarding', count: 10 },
    { title: 'Rider Partners', count: 10 },
    { title: 'Rider Onboarding', count: 10 },
    { title: 'Support Tickets', count: 10 },
];

const PendingTasks = () => {
    return (
        <div className="bg-white md:h-[380px] p-4 px-8 rounded-lg shadow-md">
            <div className="flex border-b justify-between items-center mb-4">
                <h2 className="text-xl pb-4 font-semibold">Pending Tasks</h2>
                <BsThreeDotsVertical />

            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="flex px-3 border border-1 p-1 justify-between items-center mb-4">
                        <span className="flex items-center text-gray-600">
                            {/* <FaTasks className="mr-2" /> */}
                            {task.title}
                        </span>
                        <span className="bg-pink-100 text-[#A1045A] px-2 py-1 rounded-lg">{task.count}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PendingTasks;
