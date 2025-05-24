const express = require('express');

const { postReminder, getReminders, deleteReminders, editReminders, getReminderById } = require('../Controllers/reminderController.js');

const ReminderRoute = express.Router();


ReminderRoute.post('/reminders', postReminder);
ReminderRoute.get('/reminders', getReminders);
ReminderRoute.get('/reminder/:id', getReminderById);
ReminderRoute.delete('/reminders/:id', deleteReminders);
ReminderRoute.put('/reminders/:id', editReminders);

module.exports = { ReminderRoute };