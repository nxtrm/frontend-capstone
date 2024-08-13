/* global fetchAPI, submitAPI */
import './App.css';
import AppHeader from './components/AppHeader';
import MainSection from './components/MainSection';
import AppFooter from './components/AppFooter';
import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom';
import Booking from './components/Booking/Booking';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from './api';

const initializeTimes = () => {
  return ['12:00', '12:30', '13:00', '13:30', '14:00'];
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
        <Route path="/" element={<MainSection />} />
        <Route path="/booking" element={<Booking availableTimes={availableTimes} dispatch={dispatch}/>} />
      </Routes>
      <AppFooter />
    </Router>
  );
}

export default App;
