import React from "react";

const AboutMe = ({darkmode,setDarkMode})=>{
    return (
<div >
  <div style={{textAlign:'center',fontSize:'50px',color:darkmode===true?'white':'' }}> ABOUT ME</div> 
    <div className="AboutMe">
        <div className="img-direction">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s" alt="" height='100px' width='100px'/>
  </div>
  <hr />
  <div className="introduction" style={{backgroundColor:darkmode===true?'#3f3f3f':'white',color:darkmode===true?'white':'black' }}>
    Hi, My name is Abhinav Deshmukh.I am currently working at Pramerica Life insurance as an intern.
    I did my B.tech in computer science from Technocrats Institute of Technology.
    I am eager to learn new Technologies. I hope my problem solving and eagerness of learning should benefits to the company.
  </div>
  
</div>
</div>
    );
}

export default AboutMe;