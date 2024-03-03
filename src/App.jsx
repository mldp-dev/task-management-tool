import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Form from './Form';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
