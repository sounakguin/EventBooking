import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    eventsList: [],
  },
  reducers: {
    addEvent: (state, action) => {
      state.eventsList.push(action.payload);
    },
    updateEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;
      const eventIndex = state.eventsList.find(event => event.id === id);
      if (eventIndex !== -1) {
        state.eventsList[eventIndex] = updatedEvent;
      }
    },
    deleteEvent: (state, action) => {
      const eventId = action.payload;
      state.eventsList = state.eventsList.filter(event => event.id !== eventId);
    },
  },
});

export const { addEvent, updateEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
