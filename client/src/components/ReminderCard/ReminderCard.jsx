import { AiOutlineExpandAlt } from "react-icons/ai";
import { MdOutlinePets } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import { RxLoop } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";

export const ReminderCard = ({ data, onComplete, isCompleted, onDelete }) => {
    const { _id, title, petName, time, frequency } = data;

    const handleEdit = () => {
        alert("Edit feature coming soon!");
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this reminder?");
        if (confirmDelete && onDelete) {
            onDelete(_id); // Call delete handler passed from parent
        }
    };

    return (
        <div className="bg-white rounded-xl shadow p-4 w-full relative flex flex-col space-y-2">
            <div>
                <div className="absolute top-2 right-2 text-gray-400 text-sm cursor-pointer">
                    <AiOutlineExpandAlt />
                </div>

                <h2 className={`text-lg font-semibold mb-2 ${isCompleted ? 'line-through text-gray-400' : ''}`}>
                    {title}
                </h2>

                <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-gray-500 text-sm mb-2">
                        <div className="flex items-center gap-1">
                            <MdOutlinePets className="text-base" />
                            <span>For {petName}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <IoMdAlarm className="text-base" />
                            <span>At {time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <RxLoop className="text-base" />
                            <span>{frequency}</span>
                        </div>
                    </div>
                    {!isCompleted && (
                        <button onClick={onComplete} className="text-green-500 text-2xl">
                            <FaCheckCircle />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex gap-4 text-sm">
                <button
                    className="text-blue-500 hover:underline"
                    onClick={handleEdit}
                >
                    Edit
                </button>
                <button
                    className="text-red-500 hover:underline"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
