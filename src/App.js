import { useReducer } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { fetchAPI } from './api';
import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import BookingPage from './components/Booking/BookingPage';
import HomePage from './components/HomePage';

const initializeTimes = () => {
  return [];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const response = fetchAPI(new Date (action.date));
      return response;

    default:
      return state;
  }
};


function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <Router>
      <AppHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>} />
        </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
