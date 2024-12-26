
import './App.css';
import AboutMe from "./components/AboutMe"
import Navbar from "./components/navlists"
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
