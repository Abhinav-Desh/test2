import React from 'react';
import EducationAndSkills from './EducationAndSkills.jsx'; 

const Skills = ({darkmode,setDarkMode}) => {

  const educationData = [
    { degree: 'B.Tech. in Computer Science', school: 'University of XYZ', year: '2024' },
    { degree: 'Diploma in Engineering', school: 'University of XYZ', year: '2021' },
    {degree:  'X completed', school:'XYZ school', year:'2018'}
  ];

 
  const skillsData = [
    'JavaScript', 'React', 'c++', 'HTML/CSS', 'c', 'Git/GitHub',
  ];

  return (
    <div>
      <div style={{ textAlign: 'center', fontSize: '50px',color:darkmode===true?'white':''  }}>Education & Skills</div>
      <EducationAndSkills education={educationData} skills={skillsData} />
    </div>
  );
}

export default Skills;
