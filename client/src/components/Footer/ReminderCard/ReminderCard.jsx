import React from 'react';
import { AiOutlineExpandAlt } from "react-icons/ai";
import { MdOutlinePets } from "react-icons/md";
import { IoMdAlarm } from "react-icons/io";
import { RxLoop } from "react-icons/rx";

export const ReminderCard = () => {
    return (
        <div className="bg-white rounded-xl shadow p-4 w-fit relative">
            {/* Expand Icon */}
            <div className="absolute top-2 right-2 text-gray-400 text-sm cursor-pointer">
                <AiOutlineExpandAlt />
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mb-2">Morning Walk</h2>

            {/* Info Row */}
            <div className="flex items-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                    <MdOutlinePets className="text-lg" />
                    <span>For Browny</span>
                </div>
                <div className="flex items-center gap-1">
                    <IoMdAlarm className="text-lg" />
                    <span>At 2:00pm</span>
                </div>
                <div className="flex items-center gap-1">
                    <RxLoop className="text-lg" />
                    <span>Everyday</span>
                </div>
            </div>
        </div>
    );
};
