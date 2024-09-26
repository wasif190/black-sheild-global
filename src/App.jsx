import React from 'react';
import { About, Contact, Home, Nav, Sec, Sec1, Sec2, Sec3 } from './Components/index';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  // Get the current location (path) to conditionally render components
  const location = useLocation();

  return (
    <div>
      <Nav />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      {/* Conditionally render sections only for the home page */}
      {location.pathname === "/" && (
        <>
          <Sec />
          <Sec1 />
          <Sec2 />
          <Sec3 />
        </>
      )}
    </div>
  );
}

export default App;
