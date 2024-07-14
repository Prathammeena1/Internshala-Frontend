// src/App.js
import React from 'react';
import MainRouter from './components/routes/MainRouter';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App tracking-tighter text-darkGray">
      <Nav />
      <MainRouter/>
    </div>
  );
}

export default App;
