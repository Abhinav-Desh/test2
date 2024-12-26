import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

const EducationAndSkills = ({ name, Dates ,education, skills,darkmode,setDarkMode }) => {
  return (
    <Card sx={{ width: { xs: '80%', sm: '70%' ,margin:'10px auto'}}}>
      <div>
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm">{Dates}</Typography>
        <IconButton
          aria-label="bookmark"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        ></IconButton>
      </div>

      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt="Project Image"
        />
      </AspectRatio>

      <CardContent orientation="horizontal">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
         

          <div style={{ marginTop: '30px' }}>
            <Typography level="body-lg">Education:</Typography>
            <ul style={{ paddingLeft: '20px' }}>
              {education.map((edu, index) => (
                <li key={index}>
                  <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
                    {edu.degree} - {edu.school} ({edu.year})
                  </Typography>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '30px' }}>
            <Typography level="body-lg">Skills:</Typography>
            <ul style={{ paddingLeft: '20px' }}>
              {skills?.map((skill, index) => (
                <li key={index}>
                  <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>{skill}</Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>

     
    </Card>
  );
};

export default EducationAndSkills;
