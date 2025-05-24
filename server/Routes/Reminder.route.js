const express = require('express');

const { postReminder, getReminders, deleteReminders } = require('../Controllers/reminderController.js');

const ReminderRoute = express.Router();


ReminderRoute.post('/reminders', postReminder);
ReminderRoute.get('/reminders', getReminders);
ReminderRoute.delete('/reminders/:id', deleteReminders);

module.exports = { ReminderRoute };