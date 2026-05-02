"use server";

export async function createTodo(formData) {
  const title = formData.get("title");
  const description = formData.get("description");

  await fetch("http://localhost:3001/todo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
}

export async function updateTodo(id, formData) {
  const title = formData.get("title");
  const description = formData.get("description");

  await fetch(`http://localhost:3001/todo/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
}

export async function deleteTodo(id) {
  await fetch(`http://localhost:3001/todo/${id}`, {
    method: "DELETE",
  });
}