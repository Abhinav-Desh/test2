import { useEffect } from 'react';
import * as React from 'react';
import DarkMode from './DarkMode';
import { NavLink } from 'react-router-dom';
import Home from "./Home";
const Navlists = ({darkmode,setDarkMode}) => {
    //  background-color: #f8fffa;
    // useEffect(()=>{
    //     setDarkMode(darkmode);
    // },[darkmode])
    return (
        <div className="navbar" style={{ position: 'sticky', top: 0, left:0, overflow: 'hidden', zIndex: '90', }}>
            <div className="nav-lists" style={{  backgroundColor: darkmode===true ? '#3f3f3f' : '#f8fffa', color:darkmode===true?'white':'' }}>
                <div className="right-section">
                    <div className="right-child" style={{ borderRadius: 3 }}>
                        Navbar
                    </div>
                </div>
                <div className="left-section">
                <NavLink to="/" className="list-1 nav-left-child" style={{  width: '17%',textAlign:'center',cursor: 'pointer',listStyle:'none' }}>Home</NavLink>
                    <NavLink to="/aboutMe" className="list-1 nav-left-child" style={{  width: '17%',textAlign:'center',cursor: 'pointer',listStyle:'none' }}>About Me</NavLink>
                    <NavLink to="/projects" className="list-2 nav-left-child" style={{  width: '17%',textAlign:'center',  cursor: 'pointer',listStyle:'none' }}>Projects</NavLink>
                    <NavLink to="/contactForm" className="list-3 nav-left-child" style={{  width: '18%',textAlign:'center', cursor: 'pointer',listStyle:'none' }}>Contact Form</NavLink>
                    <NavLink to="/skills" className="list-4 nav-left-child" style={{ width: '17%',textAlign:'center',  cursor: 'pointer',listStyle:'none' }}>Skills</NavLink>
                    <NavLink to = "/table" className="list-5 nav-left-child" style={{width:"18%",textAlign:'center',cursor:'pointer', listStyle:'none'}}>Show Tables</NavLink>
                    <li className="list-6 nav-left-child" style={{ width: '17%',textAlign:'center',  cursor: 'pointer',listStyle:'none' }}><DarkMode  darkmode={darkmode} setDarkMode={setDarkMode} /></li>
                </div>
            </div>
        </div>
    );
};

export default Navlists;
