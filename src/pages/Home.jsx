import * as React from 'react';
import './../assets/css/Home.css';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function Home() {
  return (
    <Grid container spacing={2}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Meow-Finder
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A website to help search for the best cat breed through search filtering.
            This was created as a collaberative project.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/code-quiz.png"
          alt="code quiz"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Weather Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Shows the weather in whichever city you search up using the OpenWeatherAPI.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  );
};