
import { FaPlus } from "react-icons/fa";
import {Link} from 'react-router-dom'

export const AddReminderButton = () => {
    return (
        <Link to='/addReminder' >
            <button className="w-10 h-10 rounded-full bg-[#019D6B] text-white flex items-center justify-center shadow-md hover:bg-[#01885D] transition fixed bottom-25 right-5 cursor-pointer">
                <FaPlus />
            </button>
        </Link>
    );
};
