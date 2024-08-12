import './App.css';
import AppHeader from './components/AppHeader';
import MainSection from './components/MainSection';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <>
      <AppHeader/>
      {/* <Outlet/> */}
      <MainSection/>
      <AppFooter/>
    </>
  );
}

export default App;
