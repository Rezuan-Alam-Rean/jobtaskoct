import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
const Navbar = () => {
    return (
        <div>

            <div className="navbar ">
                <div className="  flex-1">
                    <div className="  flex justify-center items-center">
                        <button className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" ml-6 h-5 mt-1  w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <input type="text" placeholder="Search here..." className="input  w-24 md:w-auto" />
                    </div>
                </div>
                <div className="flex-none gap-2">

                    <div className="dropdown dropdown-end">
                        <div className="flex gap-x-4">


                            <div className="flex justify-center items-center gap-x-4">
                                <div className="relative" >

                                    <div className="h-4 w-4 text-xs text-center absolute ml-3 bg-[#A1045A]  rounded-full  ">1</div>
                                    <IoNotificationsOutline size={25} />


                                </div>
                                <div>
                                    <AiOutlineMessage size={25} />

                                </div>



                            </div>


                            <div className="border-l-2">
                                <div className="flex ml-4 ">
                                    <div className="text-end">

                                        <p className="font-semibold">Nayamul Roni</p>
                                        <p className="text-sm " >Super Admin</p>


                                    </div>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;