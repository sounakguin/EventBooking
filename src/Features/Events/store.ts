import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './eventsSlice';

// Create a store instance
const store = configureStore({
  reducer: {
    events: eventsReducer,
    // Add other reducers here if needed
  },
});

// Type for the store's state
export type AppState = ReturnType<typeof store.getState>;
// Type for the store's dispatch
export type AppDispatch = typeof store.dispatch;

export default store;
