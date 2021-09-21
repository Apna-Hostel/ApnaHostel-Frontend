import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
