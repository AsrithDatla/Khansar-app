import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import './App.css';
import Details from './pages/Details';
function App() {
  const [name, setName] = useState('');
  const [clan, setClan] = useState('Mannarsi');
  const [dob, setDob] = useState(new Date());
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isValidAge, setIsValidAge] = useState(false);
  const navigate = useNavigate();

  const calculateAge = (dob) => {
    const age = moment().diff(dob, 'years');
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = calculateAge(dob);
    if (age > 21) {
      setIsValidAge(true);
    }
    setIsFormSubmitted(true);
    navigate('/details'); // Navigate to the details page after form submission
  };

  if (isFormSubmitted && isValidAge) {
    return (
      <div className="welcome-container">
        <h1>WELCOME TO KHANSAR</h1>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter your name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Clan details:</label>
          <select value={clan} onChange={(e) => setClan(e.target.value)}>
            <option value="Mannarsi">Mannarsi</option>
            <option value="Shouryaanga">Shouryaanga</option>
            <option value="Ghaniyaar">Ghaniyaar</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <DatePicker
            selected={dob}
            onChange={(date) => setDob(date)}
            dateFormat="MM/dd/yyyy"
            showYearDropdown
            scrollableYearDropdown
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
