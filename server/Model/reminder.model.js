const mongoose = require('mongoose');

const reminderSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        enum: ['general', 'lifestyle', 'health']
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    notes: {
        type: String,
        trim: true
    },
    startDate: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true,
        match: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]([ ]?(am|pm))?$/i
    },
    timeSlot: {
        type: String,
        required: true,
        enum: ['Morning', 'Afternoon', 'Evening', 'Night']
    },
    frequency: {
        type: String,
        required: true,
        enum: ['everyday', 'weekly', 'monthly']
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Completed']
    }
}, {
    timestamps: true
});

const ReminderModel = mongoose.model('Reminder', reminderSchema);
module.exports = { ReminderModel }
