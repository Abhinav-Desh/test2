import * as React from 'react';
import BasicCard from './BasicCard'; 
const Projects = () => {
const projectName = ['Expense Tracker','Todo List','Progress Tracker']
const projectDate = ['20 Apr 2024 to 21 May 2024','10 Aug 2023 to 11 sept 2023', '12 Oct 2023 to 11 Nov 2023']
const projectDescription = ['It is expense tracker in which the person can track the expense of own daily expenses',
    'Todo List is tracker of daily tasks in which people can create,delete and update according to their needs',
    'Progress Tracker is used to track the progress of daily number of lines showed in charts dashboard'
]
const TechStack = ['ReactJs MongoDB ExressJs NodeJs','ReactJs MUI JOY','ReactJS MongoDB NodeJs' ]
  return ( 
    <div>
      <div style={{ textAlign: 'center', fontSize: '50px' }}>Projects</div>
      <div style={{ margin:'10px', display:'flex', justifyContent: 'space-between', alignContent: 'center' }}>
        <BasicCard name={projectName[0]} Dates={projectDate[0]} Description={projectDescription[0] } Stack={TechStack[0]}/>
        <BasicCard name={projectName[1]} Dates={projectDate[1]}  Description={projectDescription[1] } Stack={TechStack[1]} />
        <BasicCard name={projectName[2]} Dates={projectDate[2]}  Description={projectDescription[2] } Stack={TechStack[2]}/>
      </div>
    </div>
  );
};

export default Projects;
