
// import { FaTasks } from 'react-icons/fa';

const tasks = [
  { title: 'Restaurant Account', count: 10 },
  { title: 'Restaurant Onboarding', count: 10 },
  { title: 'Rider Partners', count: 10 },
  { title: 'Rider Onboarding', count: 10 },
  { title: 'Support Tickets', count: 10 },
];

const PendingTasks = () => {
  return (
    <div className="bg-white md:h-[365px] p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Pending Tasks</h2>
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
