const { ReminderModel } = require('../Model/reminder.model.js');

const postReminder = async (req, res) => {
    try {
        const {
            petName,
            category,
            title,
            notes,
            startDate,
            time,
            timeSlot,
            frequency,
            status
        } = req.body;

        // Create a new reminder document
        const newReminder = new ReminderModel({
            petName,
            category,
            title,
            notes,
            startDate,
            time,
            timeSlot,
            frequency,
            status
        });

        // Save to MongoDB
        const savedReminder = await newReminder.save();

        res.status(201).json({
            message: "Reminder created successfully",
            data: savedReminder
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create reminder",
            error: error.message
        });
    }
}

const getReminders = async (req, res) => {
    try {
        const data = await ReminderModel.find();

        res.status(200).json({
            message: "Reminders fetched successfully",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to get reminders",
            error: error.message
        });
    }
};

const deleteReminders = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await ReminderModel.findOneAndDelete({ _id: id });

        if (!data) {
            return res.status(404).json({ message: "Reminder not found" });
        }

        res.json({ message: "Reminder deleted successfully", data });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete reminder",
            error: error.message
        });
    }
};


module.exports = { postReminder, getReminders, deleteReminders }