import React, { useState, useEffect } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

export const EditReminder = () => {
  const { id } = useParams();  // Get reminder ID from URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pet: '',
    category: '',
    title: '',
    notes: '',
    date: '',
    time: '',
    frequency: '',
  });

  const [errors, setErrors] = useState({});


  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/reminder/${id}`)
      .then(res => {

        const data = res.data;

        setFormData({
          pet: data.petName || '',
          category: data.category || '',
          title: data.title || '',
          notes: data.notes || '',
          date: data.startDate?.split('T')[0] || '',
          time: data.time || '',
          frequency: data.frequency || '',
        });
      })
      .catch(err => {
        console.error("Fetch error:", err);
        Swal.fire("Error", "Failed to load reminder", "error");
      });
  }, [id]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/reminders/${id}`, {
        petName: formData.pet,
        category: formData.category,
        title: formData.title,
        notes: formData.notes,
        startDate: formData.date,
        time: formData.time,
        frequency: formData.frequency,
      });


      Swal.fire("Success", "Reminder updated!", "success");
      navigate("/reminders");
    } catch (error) {
      Swal.fire("Error", "Failed to update reminder", "error");
    }
  };

  return (
    <div className="pt-4 pb-20 max-w-md mx-auto">
      <form className="bg-white shadow rounded-lg p-4 space-y-4" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <Link to='/reminders'><FaArrowLeftLong className="text-gray-600 cursor-pointer" /></Link>
          <h1 className="text-lg font-semibold">Edit Reminder</h1>
          <button type="submit" className="text-green-600 font-medium">Save</button>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Select Pet</label>
            <select name="pet" value={formData.pet} onChange={handleChange} className="w-full border p-2 rounded mt-1">
              <option value="">-- Select Pet --</option>
              <option value="browny">Browny</option>
              <option value="rocky">Rocky</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Select Category</label>
            <select name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded mt-1">
              <option value="">-- Select Category --</option>
              <option value="general">General</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="health">Health</option>
            </select>
          </div>
        </div>


        <div>
          <h2 className="bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded mb-2">Reminder Info</h2>
          <label className="text-sm font-medium">Set a reminder for…</label>
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Type here..." className="w-full border p-2 rounded mt-1" />
          <div className="mt-3">
            <label className="text-sm font-medium">Add Notes (Optional)</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} placeholder="Optional notes..." className="w-full border p-2 rounded mt-1" />
          </div>
        </div>


        <div>
          <h2 className="bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded mb-2">Reminder Settings</h2>
          <div className="mb-3">
            <label className="text-sm font-medium">Start Date</label>
            <div className="flex items-center border p-2 rounded mt-1">
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="flex-1 outline-none" />
              <FaCalendarAlt className="text-gray-500" />
            </div>
          </div>
          <div className="mb-3">
            <label className="text-sm font-medium">Reminder Time</label>
            <div className="flex items-center border p-2 rounded mt-1">
              <input type="time" name="time" value={formData.time} onChange={handleChange} className="flex-1 outline-none" />
              <FaClock className="text-gray-500" />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium">Reminder Frequency</label>
            <select name="frequency" value={formData.frequency} onChange={handleChange} className="w-full border p-2 rounded mt-1">
              <option value="">-- Select Frequency --</option>
              <option value="everyday">Everyday</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
