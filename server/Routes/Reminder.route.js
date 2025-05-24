const express = require('express');

const { postReminder, getReminders } = require('../Controllers/reminderController.js');

const ReminderRoute = express.Router();


ReminderRoute.post('/reminders', postReminder);
ReminderRoute.get('/reminders', getReminders);

module.exports = { ReminderRoute };