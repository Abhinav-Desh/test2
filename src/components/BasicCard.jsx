import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';


export default function BasicCard({name,Dates,Stack,Description}) {
  return (
    <Card sx={{ width: '30%' }}>
      <div>
        <Typography level="title-lg">{name}</Typography>
        <Typography level="body-sm">{Dates}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div style={{display:'flex',flexDirection:'column'}}>
        <div>
          <Typography level="body-lg">Project Description:</Typography>
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>{Description}</Typography>
        </div>
        <div style={{marginTop:'30px'}}>
          <Typography level="body-lg" >Tech stack:</Typography>
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>{Stack}</Typography>
        </div> 
        
        </div>
        </CardContent>
        <Button
          variant="solid"
          size="md"
          color="primary"
         
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Explore
        </Button>
      
    </Card>
  );
}