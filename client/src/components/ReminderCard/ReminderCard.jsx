import { AiOutlineExpandAlt } from "react-icons/ai";
import { MdOutlinePets } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import { RxLoop } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

export const ReminderCard = ({ data, onComplete, isCompleted }) => {
    const { title, petName, time, frequency } = data;

    return (
        <div className="bg-white rounded-xl shadow p-4 w-full relative flex items-center justify-between">
            <div>
                <div className="absolute top-2 right-2 text-gray-400 text-sm cursor-pointer">
                    <AiOutlineExpandAlt />
                </div>

                <h2 className={`text-lg font-semibold mb-2 ${isCompleted ? 'line-through text-gray-400' : ''}`}>{title}</h2>

                <div className="flex items-center gap-6 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                        <MdOutlinePets className="text-lg" />
                        <span>For {petName}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <IoMdAlarm className="text-lg" />
                        <span>At {time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <RxLoop className="text-lg" />
                        <span>{frequency}</span>
                    </div>
                </div>
            </div>

            {!isCompleted && (
                <button onClick={onComplete} className="text-green-500 text-2xl">
                    <FaCheckCircle />
                </button>
            )}
        </div>
    );
};

