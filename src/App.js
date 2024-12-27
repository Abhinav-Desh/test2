
import './App.css';
import AboutMe from "./components/AboutMe"
import Navbar from "./components/Navlists"
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Skills from './components/skills';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
function App() {
  const [darkMode,setDarkMode] = useState(false);
  // useEffect(()=>{
  //   setDarkMode(darkMode);
  // },[darkMode])
  return (
    <Router>
    <div style={{ backgroundColor: darkMode===true ? '#282828' : 'aliceblue' }}>
      <Navbar darkmode={darkMode} setDarkMode={setDarkMode}/>

    {/* switch ensures it only renders only one components at a time */}
      <switch>
      <Route path="/aboutMe" element={<AboutMe darkmode={darkMode} setDarkMode={setDarkMode}/>}/>
      <Route path="/projects" element={<Projects darkmode={darkMode} setDarkMode={setDarkMode} />}/>
      <Route path="/contactForm" element={<ContactForm darkmode={darkMode} setDarkMode={setDarkMode} />}/>
      <Route path="/skills" element={<Skills darkmode={darkMode} setDarkMode={setDarkMode}  />}/>
      </switch>
    </div>
    </Router>
  );
}

export default App;
