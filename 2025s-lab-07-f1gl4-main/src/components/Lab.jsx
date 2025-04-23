import React from "react";
import { useLoaderData, Form, Outlet } from "react-router-dom";
import { getTodos, addTodo } from "../data";

export async function loader() {
  if (Math.random() < 0.5) {
    throw new Error("Test error");
  }
  const todos = await getTodos();
  return { todos };
}

export async function action({ request }) {

  const formData = await request.formData();
  const newTodo = formData.get("todo");

  await addTodo(newTodo);

  return null;
}

export default function Lab() {
  const {todos} = useLoaderData();
  return (
    <div>
      <h1>Lab Page</h1>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <Form method="post">
        <input type="text" name="todo" placeholder="Add new todo ^)" />
        <button type="submit">Add Todo</button>
      </Form>

      <Outlet />

    </div>
  );
}
