import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";

const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
