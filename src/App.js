import React from 'react';
import './App.css';
import HomeScreen from './app/screens/HomeScreen';
import { Routes, Route } from "react-router-dom";
import LoginScreen from './app/screens/LoginScreen';

function App() {
  const user = null;

  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
