import './App.css';
import AppHeader from './components/AppHeader';
import MainSection from './components/MainSection';
import AppFooter from './components/AppFooter';
import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom';
import Booking from './components/Booking/Booking';


function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
