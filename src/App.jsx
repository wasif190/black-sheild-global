import React, {useEffect} from 'react'
import { About, Contact, Home, Service } from './Components';
import AOS from 'aos';
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({duration: 2000})
  });
  return (
    <div>
      <Home/>
      <Service/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App