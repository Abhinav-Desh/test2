
import './App.css';
import AboutMe from "./components/AboutMe"
import Navbar from "./components/Navlists"
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Skills from './components/skills';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom'; 
function App() {
  const [darkMode,setDarkMode] = useState(false);
  // useEffect(()=>{
  //   setDarkMode(darkMode);
  // },[darkMode])
  return (
   
    <div style={{ backgroundColor: darkMode===true ? '#282828' : 'aliceblue' }}>
      <Navbar darkmode={darkMode} setDarkMode={setDarkMode}/>
      
    {/* Routes cnn be handle to this routing */}
    {/* Routes enables conditional rendering so that it matches the path  */}
      <Routes>
      <Route path="/aboutMe" element={<AboutMe darkmode={darkMode} setDarkMode={setDarkMode}/>}/>
      <Route path="/projects" element={<Projects darkmode={darkMode} setDarkMode={setDarkMode} />}/>
      <Route path="/contactForm" element={<ContactForm darkmode={darkMode} setDarkMode={setDarkMode} />}/>
      <Route path="/skills" element={<Skills darkmode={darkMode} setDarkMode={setDarkMode}  />}/>
      </Routes>
    </div>
    
  );
}

export default App;
