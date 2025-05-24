import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ReminderCard } from '../../components/ReminderCard/ReminderCard';
import { AddReminderButton } from '../../components/AddReminder/AddReminderButton';
import Calendar from '../../components/Calendar/Calendar';

export const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/reminders`);
        setReminders(res.data.data);
      } catch (error) {
        console.error("Failed to fetch reminders", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReminders();
  }, []);

  const handleMarkAsCompleted = (id) => {
    const updated = reminders.map(reminder => {
      if (reminder._id === id) {
        return { ...reminder, status: "Completed" };
      }
      return reminder;
    });

    setReminders(updated);
    setCompleted([...completed, updated.find(r => r._id === id)]);
  };

  const groupBySlot = (slot, status = "Pending") => {
    return reminders
      .filter(r => r.timeSlot?.toLowerCase() === slot.toLowerCase() && r.status === status);
  };

  const completedGoals = reminders.filter(r => r.status === "Completed");

  const hasPendingReminders = ['Morning', 'Afternoon', 'Evening'].some(slot => groupBySlot(slot).length > 0);

  return (
    <div className='p-3'>
      <Calendar />

      <div className="pb-24 space-y-6">
        {/* 🔁 Loading message */}
        {loading && (
          <p className="text-center text-gray-500">Loading reminders...</p>
        )}

        {/* 🚫 No Reminders Message */}
        {!loading && reminders.length === 0 && (
          <p className="text-center text-gray-500">No reminders found. Add your first one!</p>
        )}

        {/* ✅ Reminders Section */}
        {!loading && reminders.length > 0 && (
          <>
            {['Morning', 'Afternoon', 'Evening'].map(slot => (
              <div key={slot}>
                <h2 className="text-gray-500 font-semibold capitalize">{slot.toLowerCase()}</h2>
                <div className="space-y-3">
                  {groupBySlot(slot).map((reminder) => (
                    <ReminderCard
                      key={reminder._id}
                      data={reminder}
                      onComplete={() => handleMarkAsCompleted(reminder._id)}
                    />
                  ))}
                  {groupBySlot(slot).length === 0 && (
                    <p className="text-sm text-gray-400 italic">No {slot.toLowerCase()} reminders.</p>
                  )}
                </div>
              </div>
            ))}

            {/* ✅ Completed Section */}
            <div className="mt-6">
              <h3 className="text-gray-500 font-semibold">Completed Goals</h3>
              <div className="space-y-3 opacity-70">
                {completedGoals.length > 0 ? (
                  completedGoals.map((reminder) => (
                    <ReminderCard
                      key={reminder._id}
                      data={reminder}
                      isCompleted
                    />
                  ))
                ) : (
                  <p className="text-sm text-gray-400 italic">No completed reminders yet.</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <AddReminderButton />
    </div>
  );
};
