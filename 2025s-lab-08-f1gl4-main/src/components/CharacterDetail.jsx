import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useLoaderData, Outlet } from "react-router-dom";

export function loader({ params }) {
  return fetch(
    `https://rickandmortyapi.com/api/character/${params.characterId}`
  ).then((res) => res.json());
}

export function CharacterDetail() {
  const characters = useLoaderData();

  return (
    <div>
      <h1>Character Detail</h1>
      <Box display="flex" justifyContent="center" padding={2}>
        <Card sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            image={characters.image}
            alt={characters.name}
            height="400"
          />
          <CardContent>
            <Typography variant="h4">{characters.name}</Typography>
            <Typography variant="body1">
              Species: {characters.species}
            </Typography>
            <Typography variant="body1">
              Status: {characters.status}
            </Typography>
            <Typography variant="body1">
              Gender: {characters.gender}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Outlet />
    </div>
  );
}
