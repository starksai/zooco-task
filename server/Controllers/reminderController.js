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
        console.log("Error creating reminder:", error);
        res.status(500).json({
            message: "Failed to create reminder",
            error: error.message
        });
    }
}

module.exports = { postReminder }