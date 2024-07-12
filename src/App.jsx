// src/App.js
import React from 'react';
import HomePage from './components/Homepage';
import MainRouter from './components/routes/MainRouter';

function App() {
  return (
    <div className="App tracking-tighter text-darkGray">
      <MainRouter/>
    </div>
  );
}

export default App;
