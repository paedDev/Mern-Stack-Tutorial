import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home/HomePage.jsx";
import CreatePage from "./pages/Create/CreatePage.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
const App = () => {
  return (
    <div className='min-h-full'>
      {/* Navbar here */}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create-product' element={<CreatePage />} />
      </Routes>
    </div>
  );
};

export default App;