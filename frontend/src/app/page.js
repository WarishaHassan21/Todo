"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { createTodo, updateTodo, deleteTodo } from "./actions/todoActions";

export default function Page() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [deletingTodo, setDeletingTodo] = useState(null);

  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:3001/todo");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="p-8">
      {/* ADD DIALOG */}
      <Dialog open={openAdd} onOpenChange={setOpenAdd}>
        <DialogTrigger asChild>
          <Button>Add Todo</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Todo</DialogTitle>
          </DialogHeader>
          <form
            action={async (formData) => {
              await createTodo(formData);
              setOpenAdd(false);
              fetchTodos();
            }}
            className="space-y-3"
          >
            <Input name="title" placeholder="Title" />
            <Input name="description" placeholder="Description" />
            <div className="flex justify-end gap-3">
              <Button variant="outline" type="button" onClick={() => setOpenAdd(false)}>
                Cancel
              </Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <div className="overflow-hidden rounded-xl shadow mt-6">
        <table className="w-full border bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} className="text-center hover:bg-gray-100">
                <td className="p-3 border">{todo.title}</td>
                <td className="p-3 border">{todo.description}</td>
                <td className="p-3 border flex justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditingTodo(todo);
                      setOpenEdit(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      setDeletingTodo(todo);
                      setOpenDelete(true);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT DIALOG */}
      <Dialog open={openEdit} onOpenChange={setOpenEdit}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
          </DialogHeader>
          {editingTodo && (
            <form
              action={async (formData) => {
                await updateTodo(editingTodo.id, formData);
                setOpenEdit(false);
                setEditingTodo(null);
                fetchTodos();
              }}
              className="space-y-3"
            >
              <Input name="title" defaultValue={editingTodo.title} />
              <Input name="description" defaultValue={editingTodo.description} />
              <div className="flex justify-end gap-3">
                <Button variant="outline" type="button" onClick={() => setOpenEdit(false)}>
                  Cancel
                </Button>
                <Button type="submit">Update</Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* DELETE DIALOG */}
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete "{deletingTodo?.title}"?</p>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={() => setOpenDelete(false)}>
              Cancel
            </Button>
            <form
              action={async () => {
                await deleteTodo(deletingTodo.id);
                setOpenDelete(false);
                setDeletingTodo(null);
                fetchTodos();
              }}
            >
              <Button variant="destructive" type="submit">Delete</Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}