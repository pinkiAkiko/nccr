import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Activity from './pages/Activity';
import Publications from './pages/Publications';
import AboutUs from './pages/AboutUs';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App;
