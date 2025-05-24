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
        <div className="bg-green-500 text-white rounded-xl p-4 w-full max-w-xs mx-auto">
            <div className="text-center text-sm font-semibold mb-3">
                {format(today, "MMMM yyyy")}
            </div>

            <div className="grid grid-cols-7 text-center text-xs text-black font-semibold mb-2">
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
                            className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-bold ${isTodayDate
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
