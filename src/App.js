import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './routes/login'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
