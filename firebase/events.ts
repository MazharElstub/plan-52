import { 
  createEvent,
  updateEvent,
  deleteEvent,
  getEvent,
  getUserEvents,
  subscribeToUserEvents,
  Event
} from './firestore';

export interface CreateEventData {
  title: string;
  description: string;
  type: 'plan' | 'travel';
  date: string;
  days: {
    saturday: boolean;
    sunday: boolean;
  };
  startTime?: string;
  endTime?: string;
}

export interface UpdateEventData {
  title?: string;
  description?: string;
  type?: 'plan' | 'travel';
  date?: string;
  days?: {
    saturday: boolean;
    sunday: boolean;
  };
  startTime?: string;
  endTime?: string;
}

export class EventService {
  static async createEvent(userId: string, eventData: CreateEventData): Promise<string> {
    return await createEvent({
      ...eventData,
      userId,
    });
  }

  static async updateEvent(eventId: string, eventData: UpdateEventData): Promise<void> {
    await updateEvent(eventId, eventData);
  }

  static async deleteEvent(eventId: string): Promise<void> {
    await deleteEvent(eventId);
  }

  static async getEvent(eventId: string): Promise<Event | null> {
    return await getEvent(eventId);
  }

  static async getUserEvents(userId: string): Promise<Event[]> {
    return await getUserEvents(userId);
  }

  static subscribeToUserEvents(userId: string, callback: (events: Event[]) => void) {
    return subscribeToUserEvents(userId, callback);
  }

  static getEventsByDateRange(events: Event[], startDate: string, endDate: string): Event[] {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return eventDate >= start && eventDate <= end;
    });
  }

  static getWeekendStatus(events: Event[], weekendDate: string): 'free' | 'plans' | 'travel' {
    const saturday = new Date(weekendDate);
    const sunday = new Date(saturday);
    sunday.setDate(saturday.getDate() + 1);
    
    const saturdayStr = saturday.toISOString().split('T')[0];
    const sundayStr = sunday.toISOString().split('T')[0];
    
    const weekendEvents = events.filter(event => 
      event.date === saturdayStr || event.date === sundayStr
    );
    
    if (weekendEvents.length === 0) {
      return 'free';
    }
    
    const hasTravel = weekendEvents.some(event => event.type === 'travel');
    return hasTravel ? 'travel' : 'plans';
  }

  static getEventsForWeekend(events: Event[], weekendDate: string): Event[] {
    const saturday = new Date(weekendDate);
    const sunday = new Date(saturday);
    sunday.setDate(saturday.getDate() + 1);
    
    const saturdayStr = saturday.toISOString().split('T')[0];
    const sundayStr = sunday.toISOString().split('T')[0];
    
    return events.filter(event => 
      event.date === saturdayStr || event.date === sundayStr
    );
  }
}

export default EventService;