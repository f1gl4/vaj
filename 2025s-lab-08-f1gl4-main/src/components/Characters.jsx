import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";

export function loader() {
  return fetch("https://rickandmortyapi.com/api/character").then((res) =>
    res.json()
  );
}

export function Characters() {
  const characters = useLoaderData();

  return (
    <div>
      <h1>Characters</h1>

      <Grid container spacing={2} padding={2}>
        {characters.results.map(char => (
          <Grid item key={char.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardActionArea
                component={RouterLink}
                to={`/characters/${char.id}`}
              >
                <CardMedia
                  component="img"
                  image={char.image}
                  alt={char.name}
                  height="200"
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {char.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

    </div>
  );
}
