import Navbar from "./Navlists"
import AboutMe from "./AboutMe"
import  Projects from "./Projects";
import ContactForm from "./ContactForm";
import Skills from "./skills";

const Home = ({darkmode,setDarkMode})=>{
return(
    <div>
        
        <AboutMe  darkmode={darkmode} setDarkMode={setDarkMode} />
        <Projects  darkmode={darkmode} setDarkMode={setDarkMode}/>
       
        <Skills  darkmode={darkmode} setDarkMode={setDarkMode} />
        <ContactForm  darkmode={darkmode} setDarkMode={setDarkMode} />
       
    </div>
);
}

export default Home;