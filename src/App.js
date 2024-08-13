
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { fetchAPI } from './api';
import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import BookingPage from './components/Booking/BookingPage';
import HomePage from './components/HomePage';

function App() {

  return (
    <Router>
      <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
