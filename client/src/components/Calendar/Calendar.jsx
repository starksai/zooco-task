import React from "react";
import {
    format,
    startOfWeek,
    addDays,
    isToday,
} from "date-fns";

const Calendar = () => {
    const today = new Date();
    const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Monday start
    const daysShort = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

    return (
        <div className="bg-green-500 text-white rounded-xl p-3 sm:p-4 md:p-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-lg mt-2 sm:mt-4 md:mt-6">
            <div className="text-center text-sm sm:text-base font-semibold mb-3">
                {format(today, "MMMM yyyy")}
            </div>

            <div className="grid grid-cols-7 text-center text-xs sm:text-sm text-black font-semibold mb-2">
                {daysShort.map((day, index) => (
                    <div key={index}>{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
                {weekDays.map((day, index) => {
                    const isTodayDate = isToday(day);
                    return (
                        <div
                            key={index}
                            className={`flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full text-xs sm:text-sm md:text-base font-bold
            ${isTodayDate
                                    ? "bg-green-800 text-white"
                                    : "bg-green-300 text-black opacity-80"
                                }`}
                        >
                            {format(day, "d")}
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-center mt-3">
                <div className="text-white text-lg transform rotate-180">⌃</div>
            </div>
        </div>

    );
};

export default Calendar;

