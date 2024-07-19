import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addEvent } from "../Features/Events/eventsSlice";

interface EventState {
  eventName: string;
  eventType: string;
  startDate: string;
  endDate: string;
  eventDescription: string;
  eventHandledBy: string;
  eventOrganisation: string;
  totalSubEvents: string;
}

const initialEventState: EventState = {
  eventName: "",
  eventType: "",
  startDate: "",
  endDate: "",
  eventDescription: "",
  eventHandledBy: "",
  eventOrganisation: "",
  totalSubEvents: "",
};

const AddEventForm: React.FC = () => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState<EventState>(initialEventState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newEvent = {
      id: nanoid(),
      ...event,
    };
    dispatch(addEvent(newEvent));
    setEvent(initialEventState);
  };

  return (
    <>
      <div className="text-center text-4xl mb-5">Book your event</div>
      <form
        onSubmit={handleSubmit}
        className="max-w-full mx-auto my-4 p-6 bg-white border border-gray-300 rounded shadow-md"
      >
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="eventName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              placeholder="Event Name"
              value={event.eventName}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-400 rounded hover:border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="eventType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Event Type
            </label>
            <input
              type="text"
              id="eventType"
              name="eventType"
              placeholder="Event Type"
              value={event.eventType}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-400 rounded hover:border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="startDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              placeholder="Start Date"
              value={event.startDate}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-400 rounded hover:border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="endDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              placeholder="End Date"
              value={event.endDate}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-400 rounded hover:border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="eventDescription"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Event Description
            </label>
            <textarea
              id="eventDescription"
              name="eventDescription"
              placeholder="Event Description"
              value={event.eventDescription}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-400 rounded hover:border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="eventHandledBy"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Handled By
            </label>
            <input
              type="text"
              id="eventHandledBy"
              name="eventHandledBy"
              placeholder="Handled By"
              value={event.eventHandledBy}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-400 rounded hover:border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="eventOrganisation"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Event Organisation
            </label>
            <input
              type="text"
              id="eventOrganisation"
              name="eventOrganisation"
              placeholder="Event Organisation"
              value={event.eventOrganisation}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-400 rounded hover:border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="totalSubEvents"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Total Sub-Events
            </label>
            <input
              type="number"
              id="totalSubEvents"
              name="totalSubEvents"
              placeholder="Total Sub-Events"
              value={event.totalSubEvents}
              onChange={handleChange}
              required
              className="shadow appearance-none border border-gray-400 rounded hover:border-black w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Event
          </button>
        </div>
      </form>
    </>
  );
};

export default AddEventForm;
