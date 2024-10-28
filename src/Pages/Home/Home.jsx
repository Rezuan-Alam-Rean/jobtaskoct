import ActivityLog from "../../Components/ActivityLog";
import Date from "../../Components/Date";
import Navbar from "../../Components/Navbar";
import OrderSummary from "../../Components/OrderSummary";
import PendingTasks from "../../Components/PendingTasks";
import RevenueGraph from "../../Components/RevenueGraph";

const Home = () => {
  return (
    <div className="bg-[#FAF9F6] text-black pt-2">
      <Navbar/>
      <Date/>
      
      <div className="  rounded-lg max-w-7xl mx-auto  gap-x-6  mt-[30px] md:flex">
        <div className="w-full ">
      <RevenueGraph />

        </div>
        <div className="w-full ">
      <PendingTasks />

        </div>
    </div>
      <div className="  rounded-lg max-w-7xl mx-auto shadow-sm bg-[#ffffff] gap-x-6  mt-[30px] md:flex">
        <div className="w-full ">
      <OrderSummary/>

        </div>
        <div className="w-full ">
     <ActivityLog/>

        </div>
    </div>
    
    </div>
  );
};

export default Home;