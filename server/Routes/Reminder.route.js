const express = require('express');

const { postReminder } = require('../Controllers/reminderController.js');

const ReminderRoute = express.Router();


ReminderRoute.post('/reminders', postReminder);

module.exports = { ReminderRoute };