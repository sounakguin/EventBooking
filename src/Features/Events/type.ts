
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
  

  export interface EventsState {
    eventsList: Event[];
  }
  