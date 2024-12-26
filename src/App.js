
import './App.css';
import AboutMe from "./components/AboutMe"
import Navbar from "./components/Navlists"
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Skills from './components/skills';
import { useEffect, useState } from 'react';
function App() {
  const [darkMode,setDarkMode] = useState(false);
  // useEffect(()=>{
  //   setDarkMode(darkMode);
  // },[darkMode])
  return (
    <div style={{ backgroundColor: darkMode===true ? '#282828' : 'aliceblue' }}>
      <Navbar darkmode={darkMode} setDarkMode={setDarkMode}/>
      <AboutMe darkmode={darkMode} setDarkMode={setDarkMode}/>
      <Projects darkmode={darkMode} setDarkMode={setDarkMode} />
      <ContactForm darkmode={darkMode} setDarkMode={setDarkMode} />
      <Skills darkmode={darkMode} setDarkMode={setDarkMode}  />
    </div>
  );
}

export default App;
