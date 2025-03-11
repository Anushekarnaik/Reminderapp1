import { ReminderDatabase } from './Rd';

const db = new ReminderDatabase();

// Create reminders
db.createReminder('1', 'Doctor Appointment', new Date('2025-03-15'));
db.createReminder('2', 'Meeting', new Date('2025-03-12'));
db.createReminder('3', 'Body scanning', new Date('2025-05-11'));

// Read reminders
console.log('All Reminders:', db.getAllReminders());
console.log('Reminder with ID 1:', db.getReminder('1'));

// Update a reminder
db.updateReminder('1', 'Doctor Appointment', new Date('2026-03-15T18:00:00'));
console.log('Updated Reminder with ID 1:', db.getReminder('1'));

console.log('Making  Reminder to be Marked:', db.markReminderAsCompleted('1'));
console.log('All Reminders after Marking:', db.getAllReminders());
console.log('Making  Reminder to be Unmarked:', db.unmarkReminderAsCompleted('2'));
console.log('All Reminders after Unmarking:', db.getAllReminders());

console.log('All Reminders Marked as Completed:', db.getAllRemindersMarkedAsCompleted());
console.log('All Reminders Not Marked as Completed:', db.getAllRemindersNotMarkedAsCompleted());
console.log('All Reminders Due By Today:', db.getAllRemindersDueByToday());
// Delete a reminder
db.removeReminder('2');
console.log('All Reminders after removal:', db.getAllReminders());