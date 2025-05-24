import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";


export const AddReminder = () => {
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

    const validate = () => {
        const newErrors = {};
        if (!formData.pet) newErrors.pet = "Please select a pet";
        if (!formData.category) newErrors.category = "Please select a category";
        if (!formData.title) newErrors.title = "Reminder title is required";
        if (!formData.date) newErrors.date = "Start date is required";
        if (!formData.time) newErrors.time = "Reminder time is required";
        if (!formData.frequency) newErrors.frequency = "Select reminder frequency";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getTimeSlot = (time) => {
        const hour = parseInt(time.split(':')[0]);
        if (hour >= 5 && hour < 12) return 'Morning';
        if (hour >= 12 && hour < 17) return 'Afternoon';
        if (hour >= 17 && hour < 21) return 'Evening';
        return 'Night';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const payload = {
                petName: formData.pet,
                category: formData.category,
                title: formData.title,
                notes: formData.notes,
                startDate: formData.date,
                time: formData.time,
                timeSlot: getTimeSlot(formData.time),
                frequency: formData.frequency,
                status: "Pending"
            };

            console.log(payload);


            try {
                const response = await axios.post("http://localhost:3001/api/reminders", payload);
                if (response.status === 201 || response.status === 200) {
                    Swal.fire({
                        title: "Reminder saved successfully!",
                        icon: "success",
                        draggable: true
                    });
                    setFormData({
                        pet: '',
                        category: '',
                        title: '',
                        notes: '',
                        date: '',
                        time: '',
                        frequency: '',
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to save reminder.",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            } catch (error) {
                console.error("Error:", error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong while saving the reminder.",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            }
        }

    };

    return (
        <div className="pt-4 pb-20 max-w-md mx-auto">
            <form className="bg-white shadow rounded-lg p-4 space-y-4" onSubmit={handleSubmit}>

                <div className="flex justify-between items-center">
                    <Link to='/reminders'>
                        <FaArrowLeftLong className="text-gray-600 cursor-pointer" />
                    </Link>
                    <h1 className="text-lg font-semibold">Add Reminder</h1>
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
                        {errors.pet && <p className="text-red-500 text-sm">{errors.pet}</p>}
                    </div>
                    <div>
                        <label className="text-sm font-medium">Select Category</label>
                        <select name="category" value={formData.category} onChange={handleChange} className="w-full border p-2 rounded mt-1">
                            <option value="">-- Select Category --</option>
                            <option value="general">General</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="health">Health</option>
                        </select>
                        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                    </div>
                </div>


                <div>
                    <h2 className="bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded mb-2">Reminder Info</h2>
                    <label className="text-sm font-medium">Set a reminder for…</label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Type here..."
                        maxLength={100}
                        className="w-full border p-2 rounded mt-1"
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

                    <div className="mt-3">
                        <label className="text-sm font-medium">Add Notes (Optional)</label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Optional notes..."
                            className="w-full border p-2 rounded mt-1"
                        />
                    </div>
                </div>


                <div>
                    <h2 className="bg-gray-900 text-white text-sm font-medium px-3 py-1 rounded mb-2">Reminder Settings</h2>

                    <div className="mb-3">
                        <label className="text-sm font-medium">Start Date</label>
                        <div className="flex items-center border p-2 rounded mt-1">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="flex-1 outline-none"
                            />
                            <FaCalendarAlt className="text-gray-500" />
                        </div>
                        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                    </div>

                    <div className="mb-3">
                        <label className="text-sm font-medium">Reminder Time</label>
                        <div className="flex items-center border p-2 rounded mt-1">
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="flex-1 outline-none"
                            />
                            <FaClock className="text-gray-500" />
                        </div>
                        {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                    </div>

                    <div>
                        <label className="text-sm font-medium">Reminder Frequency</label>
                        <select
                            name="frequency"
                            value={formData.frequency}
                            onChange={handleChange}
                            className="w-full border p-2 rounded mt-1"
                        >
                            <option value="">-- Select Frequency --</option>
                            <option value="everyday">Everyday</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        {errors.frequency && <p className="text-red-500 text-sm">{errors.frequency}</p>}
                    </div>
                </div>
            </form>
        </div>
    );
};
