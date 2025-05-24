import {
  PiDogDuotone,
  PiDogFill,
  PiCirclesThreePlus,
  PiCirclesThreePlusFill,
} from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleAccount = () => {
    // alert("this feature under development");
    Swal.fire({
      title: "This feature still under development",
      text: "Progressing....",
      icon: "question"
    });

  }

  return (
    <div className="flex justify-around items-center p-4 border-t border-gray-200 fixed bottom-0 left-0 right-0 bg-white z-50">

      <div className="flex flex-col items-center justify-center">
        <button
          onClick={handleAccount}
          className={`cursor-pointer flex flex-col items-center text-xl px-4 py-2 rounded-full ${currentPath === "/home" ? "bg-black text-white" : "text-gray-400"
            }`}
        >
          {currentPath === "/home" ? <AiOutlineHome /> : <IoMdHome />}
        </button>
        {currentPath === "/home" && <span className="text-xs mt-1">Home</span>}
      </div>



      <div className="flex flex-col items-center justify-center">
        <button
          onClick={handleAccount}
          className={`cursor-pointer flex flex-col items-center text-xl px-4 py-2 rounded-full ${currentPath === "/favourite" ? "bg-black text-white" : "text-gray-400"
            }`}
        >
          {currentPath === "/favourite" ? <FaHeart /> : <FaRegHeart />}
        </button>
        {currentPath === "/favourite" && <span className="text-xs mt-1">Favourite</span>}
      </div>


      <Link to="/reminders">
        <div className="flex flex-col items-center justify-center">
          <button
            className={`cursor-pointer flex flex-col items-center text-xl px-4 py-2 rounded-full ${currentPath === "/reminders" ? "bg-black text-white" : "text-gray-400"
              }`}
          >
            {currentPath === "/reminders" ? <PiCirclesThreePlusFill /> : <PiCirclesThreePlus />}
          </button>
          {currentPath === "/reminders" && <span className="text-xs mt-1">Reminders</span>}
        </div>
      </Link>


      <div className="flex flex-col items-center justify-center">
        <button
          onClick={handleAccount}
          className={`cursor-pointer flex flex-col items-center text-xl px-4 py-2 rounded-full ${currentPath === "/account" ? "bg-black text-white" : "text-gray-400"
            }`}
        >
          {currentPath === "/account" ? <PiDogFill /> : <PiDogDuotone />}
        </button>
        {currentPath === "/account" && <span className="text-xs mt-1">Account</span>}
      </div>

    </div>
  );
};
