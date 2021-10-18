import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ConfigureStore } from "./redux/configureStore"

const Store = ConfigureStore();

function App() {
  return (
    <Provider store={Store} >
      <BrowserRouter>
        <div className="App">
          <LandingPage />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
