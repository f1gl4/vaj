import React from "react";
import { useLoaderData, Link as RouterLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

export async function loader({ params }) {
  const ep = await fetch(
    `https://rickandmortyapi.com/api/episode/${params.episodeId}`
  ).then((res) => res.json());

  const characters = await Promise.all(
    ep.characters.map((url) => fetch(url).then((res) => res.json()))
  );

  return { ep, characters };
}

export function EpisodeDetail() {
  const {ep, characters} = useLoaderData();

  return (
    <Box>

      <Card sx={{ mb: 2, maxWidth: 700, mx: "auto" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {ep.episode}: {ep.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Air date: {ep.air_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created: {new Date(ep.created).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>


      <Typography variant="h5" sx={{ px: 2, mb: 1 }}>
        Characters in this episode
      </Typography>
      <Grid container spacing={2}>
        {characters.map((char) => (
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
                  <Typography variant="h6">{char.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
