import React from 'react'
import { AddReminderButton } from '../../components/AddReminder/AddReminderButton'
import Calendar from '../../components/Calendar/Calendar'

export const Reminders = () => {
  return (
    <div>
      <Calendar />
      <AddReminderButton />
    </div>
  )
}
