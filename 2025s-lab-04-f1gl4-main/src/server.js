import express from 'express'
import { PrismaClient } from '@prisma/client';

const app = express()
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// See tasks in README.md


// Get all users
app.get('/users/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
})

// Get specific user
app.get('/users/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  const user = await prisma.user.findUnique({
    where: { id },
  });

  res.status(200).json(user);
})

// Implement the rest of the end points

// List all posts from user. Should have optional query parameter to filter only published posts

app.get('/users/:id/posts', async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  const { published } = req.query;
  let filter = {
    authorId: userId,
  };

  if (published === 'true') {
    filter.published = true;
  } else if (published === 'false') {
    filter.published = false;
  }

  const posts = await prisma.post.findMany({ where: filter });
  res.status(200).json(posts);
});

// List a specific post from a user

app.get('/users/:userId/posts/:postId', async (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  const postId = parseInt(req.params.postId, 10);

  const post = await prisma.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });

  res.status(200).json(post);
});


// 

// Create new user

app.post('/users', async (req, res) => {
  const { email, name } = req.body;
  
  const newUser = await prisma.user.create({
    data: {
      email,
      name,
    },
  });

  res.status(201).json(newUser);
});

// Delete user

app.delete('/users/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);

  await prisma.user.delete({
    where: { id },
  });

  res.status(204).send()
});


// Update user

app.put('/users/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { email, name } = req.body;

  const updateUser = await prisma.user.update({
    where: { id },
    data: { email, name },
  });

  res.status(200).json(updateUser);
});

//

// Create new post, user ID is mandatory

app.post('/posts', async (req, res) => {
  const { title, content, published, authorId } = req.body;

  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      published: published ?? false,
      authorId: parseInt(authorId, 10),
    }
  });

  res.status(201).json(newPost);

});

//

// Get all posts on the platform. (Add optional query paramter to filter only publishe posts)

app.get('/posts', async (req, res) => {
  const { published } = req.query;
  let filter = { };

  if (published === 'true')
  {
    filter.published = true;
  } else if (published === 'false')
  {
    filter.published = false;
  }

  const posts = await prisma.post.findMany({
    where: filter,
  });

  res.status(200).json(posts);

});

export { app };