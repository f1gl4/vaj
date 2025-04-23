import React from "react";
import { useLoaderData, Link as RouterLink } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";

export async function loader({ params }) {
  const loc = await fetch(
    `https://rickandmortyapi.com/api/location/${params.locationId}`
  ).then((res) => res.json());

  const residents = await Promise.all(
    loc.residents.map((url) => fetch(url).then((res) => res.json()))
  );

  return { loc, residents };
}

export function LocationDetail() {
  const {loc, residents } = useLoaderData();

  return (
    <Box>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {loc.name}
          </Typography>
          <Typography variant="body1">
            Type: {loc.type}
          </Typography>
          <Typography variant="body1">
            Dimension: {loc.dimension}
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h5">Residents</Typography>

      {residents.length > 0 ? (
        <Grid container spacing={2}>
          {residents.map((char) => (
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
      ) : (
        <Typography variant="body2" color="text.secondary">
          No residents found
        </Typography>
      )}

    </Box>
  );
}
