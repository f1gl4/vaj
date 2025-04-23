import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import { addComment, getComments } from "../api/comments";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export function loader({ params }) {
  return getComments(params.characterId);
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const content = formData.get("content");
  return addComment(params.characterId, content);
}

export function CharacterComments() {
  const comments = useLoaderData() || [];

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>

      <Paper variant="outlined" sx={{ p: 2, mb: 3 }}>
        <Form method="post">
          <TextField
            name="content"
            label="Add a comment"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
          />
          <Box sx={{ textAlign: "right", mt: 1 }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Form>
      </Paper>

      {comments.length > 0 ? (
        <List>
          {comments.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ variant: "body1" }}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2" color="text.secondary">
          No comments yet
        </Typography>
      )}
    </Box>
  );
}
