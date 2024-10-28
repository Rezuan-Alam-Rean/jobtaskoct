import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";

import img from "../assets/Intersect.png"
const Navbar = () => {
    return (
        <div className="rounded-lg max-w-7xl mx-auto shadow-sm bg-[#ffffff]  h-[78px] flex justify-center items-center ">

            <div className="navbar  ">
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
                        <div className="flex h-[44px] w-[277px]  gap-x-4">


                            <div className="flex justify-center ml-4 items-center gap-x-4">
                                <div className="relative" >

                                    <div className="h-3 w-3 flex items-center justify-center text-xs text-center absolute ml-3 bg-[#A1045A]  rounded-full  ">1</div>
                                    <IoNotificationsOutline size={23} />


                                </div>
                                <div>
                                    <AiOutlineMessage size={23} />

                                </div>



                            </div>


                            <div className="border-l-2">
                                <div className="flex ml-4 ">
                                    <div className="text-end">

                                        <p className="font-semibold text-sm">Nayamul Roni</p>
                                        <p className="text-xs " >Super Admin</p>


                                    </div>
                                    <div className="avatar  ml-4">
                                        <div className="w-10 h-10 rounded-full">
                                            <img src={img} />
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