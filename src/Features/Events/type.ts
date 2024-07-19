// types.ts

// Type for an individual event
export interface Event {
    id: string;
    eventName: string;
    eventType: string;
    startDate: string;
    endDate: string;
    eventDescription: string;
    eventHandledBy: string;
    eventOrganisation: string;
    totalSubEvents: string;
  }
  
  // State type for the events slice
  export interface EventsState {
    eventsList: Event[];
    // You can add more state properties if needed
  }
  