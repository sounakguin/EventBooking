import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEventForm from './Components/AddEventForm';
import EventsList from './Components/EventsList';
import Sidebar from './Components/Slidebar';
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<AddEventForm />} /> 
            <Route path="/Events" element={<EventsList />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
