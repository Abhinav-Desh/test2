import * as React from 'react';
import BasicCard from './BasicCard';

const Projects = ({darkmode,setDarkMode}) => {
  const projectName = ['Expense Tracker', 'Todo List', 'Progress Tracker'];
  const projectDate = ['20 Apr 2024 to 21 May 2024', '10 Aug 2023 to 11 Sept 2023', '12 Oct 2023 to 11 Nov 2023'];
  const projectDescription = [
    'It is an expense tracker in which the person can track the expense of their daily expenses',
    'Todo List is a tracker for daily tasks in which people can create, delete, and update according to their needs',
    'Progress Tracker is used to track the progress of the daily number of lines shown in charts dashboard',
  ];
  const TechStack = ['ReactJs MongoDB ExpressJs NodeJs', 'ReactJs MUI JOY', 'ReactJS MongoDB NodeJs'];

  return (
    <div>
      <div style={{ textAlign: 'center', fontSize: '50px',color:darkmode===true?'white':''  }}>PROJECTS</div>
      <div className="projects-container">
        <BasicCard name={projectName[0]} Dates={projectDate[0]} Description={projectDescription[0]} Stack={TechStack[0]} />
        <BasicCard name={projectName[1]} Dates={projectDate[1]} Description={projectDescription[1]} Stack={TechStack[1]} />
        <BasicCard name={projectName[2]} Dates={projectDate[2]} Description={projectDescription[2]} Stack={TechStack[2]} />
      </div>
    </div>
  );
};

export default Projects;
