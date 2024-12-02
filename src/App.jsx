import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { About, Contact, Home, Navbar, Sec1, Sec2, Sec3, Services } from './Components'

function App() {
    // Get the current location (path) to conditionally render components
    const location = useLocation();
    
  return (
    <div>
      <Navbar/>  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      {location.pathname === "/" && (
          <>
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Services/>
          </>
      )}
    </div>
  )
}

export default App