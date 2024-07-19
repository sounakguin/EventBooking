import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState, AppDispatch } from "../Features/Events/store"; 
import { deleteEvent, updateEvent } from "../Features/Events/eventsSlice";
import { Event } from "../Features/Events/type"; 

const EventsList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const events = useSelector((state: AppState) => state.events.eventsList);

  const [editEventId, setEditEventId] = useState<string | null>(null);
  const [editEventDetails, setEditEventDetails] = useState<Partial<Event>>({});
  const [sortedEvents, setSortedEvents] = useState<Event[]>([]);

  useEffect(() => {
    setSortedEvents(events);
  }, [events]);

  const sortByStartDate = () => {
    const sorted = [...sortedEvents].sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);
      return dateA.getTime() - dateB.getTime();
    });

    console.log("After sorting:", sorted);

    setSortedEvents(sorted);
  };

  const handleDelete = (eventId: string) => {
    dispatch(deleteEvent(eventId));
  };

  const handleEdit = (event: Event) => {
    setEditEventId(event.id);
    setEditEventDetails(event);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditEventDetails({
      ...editEventDetails,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    if (editEventId) {
      dispatch(updateEvent({ id: editEventId, updatedEvent: editEventDetails as Event }));
      setEditEventId(null);
      setEditEventDetails({});
    }
  };

  return (
    <div className="p-4  ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl ">Events List</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={sortByStartDate}
        >
          Sort by Start Date
        </button>
      </div>

      <div className="hidden md:block overflow-x-auto mt-5">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200 text-center">
              <th className="border px-4 py-2">Event Name</th>
              <th className="border px-4 py-2">Event Type</th>
              <th className="border px-4 py-2">Start Date</th>
              <th className="border px-4 py-2">End Date</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Handled By</th>
              <th className="border px-4 py-2">Organisation</th>
              <th className="border px-4 py-2">Total Sub-Events</th>
              <th className="border px-4 py-2">Edit</th>
              <th className="border px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {sortedEvents.map((event) => (
              <tr key={event.id} className="text-center">
                <td className="border px-4 py-2">{event.eventName}</td>
                <td className="border px-4 py-2">{event.eventType}</td>
                <td className="border px-4 py-2">{event.startDate}</td>
                <td className="border px-4 py-2">{event.endDate}</td>
                <td className="border px-4 py-2">{event.eventDescription}</td>
                <td className="border px-4 py-2">{event.eventHandledBy}</td>
                <td className="border px-4 py-2">{event.eventOrganisation}</td>
                <td className="border px-4 py-2">{event.totalSubEvents}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded "
                    onClick={() => handleEdit(event)}
                  >
                    Edit
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden">
        {sortedEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white border border-black shadow-md rounded-lg p-4 mb-4 mt-5"
          >
            <div className="flex justify-between items-center">
              <div></div>
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                  onClick={() => handleEdit(event)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </button>
              </div>
            </div>

            <p>
              <strong>Event Name:</strong> {event.eventName}
            </p>
            <p>
              <strong>Event Type:</strong> {event.eventType}
            </p>
            <p>
              <strong>Start Date:</strong> {event.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {event.endDate}
            </p>
            <p>
              <strong>Description:</strong> {event.eventDescription}
            </p>
            <p>
              <strong>Handled By:</strong> {event.eventHandledBy}
            </p>
            <p>
              <strong>Organisation:</strong> {event.eventOrganisation}
            </p>
            <p>
              <strong>Total Sub-Events:</strong> {event.totalSubEvents}
            </p>
          </div>
        ))}
      </div>

      {editEventId && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="text-xl mb-4">Edit Event</h3>
          <form>
            <div className="mb-4">
              <label className="block">Event Name</label>
              <input
                type="text"
                name="eventName"
                value={editEventDetails.eventName || ""}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label className="block">Event Type</label>
              <select
                name="eventType"
                value={editEventDetails.eventType || ""}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
              >
                <option value="sports">Sports</option>
                <option value="music">Music</option>
                <option value="general">General</option>
                <option value="children">Children</option>
                <option value="school">School</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={editEventDetails.startDate || ""}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label className="block">End Date</label>
              <input
                type="date"
                name="endDate"
                value={editEventDetails.endDate || ""}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label className="block">Description</label>
              <textarea
                name="eventDescription"
                value={editEventDetails.eventDescription || ""}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label className="block">Handled By</label>
              <input
                type="text"
                name="eventHandledBy"
                value={editEventDetails.eventHandledBy || ""}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label className="block">Organisation</label>
              <input
                type="text"
                name="eventOrganisation"
                value={editEventDetails.eventOrganisation || ""}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label className="block">Total Sub-Events</label>
              <input
                type="number"
                name="totalSubEvents"
                value={editEventDetails.totalSubEvents || ""}
                onChange={handleChange}
                className="border rounded w-full py-2 px-3"
              />
            </div>
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update Event
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EventsList;
