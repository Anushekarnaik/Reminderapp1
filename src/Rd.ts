interface Reminder {
    id: string;
    title: string;
    date: Date;
    completed: boolean;
}

export class ReminderDatabase {
    private reminders: Map<string, Reminder> = new Map();

    // Create a new reminder
    createReminder(id: string, title: string, date: Date): void {
        const reminder: Reminder = { id, title, date,completed:false };
        this.reminders.set(id, reminder);
    }

    // Check if a reminder exists
    exists(id: string): boolean {
        return this.reminders.has(id);
    }
    markReminderAsCompleted(id: string): void {
        if (!this.reminders.has(id)) {
            throw new Error('Reminder not found');
        }
        const reminder = this.reminders.get(id)!;
        reminder.completed = true;
        this.reminders.set(id, reminder);
    }
    unmarkReminderAsCompleted(id: string): void {
        if (!this.reminders.has(id)) {
            throw new Error('Reminder not found');
        }
        const reminder = this.reminders.get(id)!;
        reminder.completed = false;
        this.reminders.set(id, reminder);
    }
    // Get all reminders
    getAllReminders(): Reminder[] {
        return Array.from(this.reminders.values());
    }

    // Get a specific reminder by ID
    getReminder(id: string): Reminder | null {
        return this.reminders.get(id) || null;
    }

    getAllRemindersMarkedAsCompleted(): Reminder[] {
        return Array.from(this.reminders.values()).filter(reminder => reminder.date < new Date());
    }
    getAllRemindersNotMarkedAsCompleted(): Reminder[] {
        return Array.from(this.reminders.values()).filter(reminder => reminder.date > new Date());
    }

    getAllRemindersDueByToday(): Reminder[] {
        return Array.from(this.reminders.values()).filter(reminder => reminder.date < new Date());
    }
    // Remove a reminder by ID
    removeReminder(id: string): boolean {
        return this.reminders.delete(id);
    }

    // Update an existing reminder
    updateReminder(id: string, title: string, date: Date): boolean {
        if (!this.reminders.has(id)) {
            return false;
        }
        const reminder: Reminder = { id, title, date,completed:false };
        this.reminders.set(id, reminder);
        return true;
    }
}