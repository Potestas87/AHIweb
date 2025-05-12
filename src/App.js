import './App.css';
import MenuBar from './MenuBar';
import Home from './home';
import ChooseUs from './chooseus';
import ScheduleAppt from './scheduleappt';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();

  return (
    <>
      <MenuBar />
      {location.pathname === '/' && <Home />}  

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/ChooseUs" element={<ChooseUs />} />
        <Route path="/ScheduleAppt" element={<ScheduleAppt />} />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

