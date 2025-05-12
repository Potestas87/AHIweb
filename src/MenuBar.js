import './MenuBar.css';
import Home from './home.js';
import ChoooseUs from './chooseus.js';
import ScheduleAppt from './scheduleappt.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function MenuBar() {
  return (
    <nav className="menu-bar">
      <ul className="menu-items">
        <li className="menu-item">
          <Link to="/Home">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/ChooseUs">Why Choose Us?</Link>
        </li>
        <li className="menu-item">
          <Link to="/ScheduleAppt">Schedule an Appointment</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;