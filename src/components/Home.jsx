import Navbar from "./Navlists"
import AboutMe from "./AboutMe"
import  Projects from "./Projects";
import ContactForm from "./ContactForm";
import Skills from "./skills";

const Home = ()=>{
return(
    <div>
        
        <AboutMe />
        <Projects/>
        <ContactForm />
        <Skills />
    </div>
);
}

export default Home;