# 📝 Todo App

A fullstack Todo application that lets you **add**, **edit**, and **delete** tasks — keeping your workflow simple and organized.

---

## 🚀 Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React + TypeScript      |
| Backend   | NestJS (Node.js)        |
| Styling   | CSS                     |

---

## ✨ Features

- ✅ Add new todos
- ✏️ Edit existing todos
- 🗑️ Delete todos

---

## 📁 Project Structure

```
Todo/
├── backend/    # NestJS REST API
└── frontend/   # React + TypeScript client
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

---

### 🖥️ Backend Setup

```bash
cd backend
npm install
npm run start:dev
```

The backend server will start on `http://localhost:3000`

---

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available on `http://localhost:5173`

---

## 🔗 API Endpoints

| Method | Endpoint       | Description        |
|--------|----------------|--------------------|
| GET    | `/todos`       | Fetch all todos    |
| POST   | `/todos`       | Create a new todo  |
| PATCH  | `/todos/:id`   | Update a todo      |
| DELETE | `/todos/:id`   | Delete a todo      |

---

## 👩‍💻 Author

**Warisha Hassan**  
[GitHub](https://github.com/WarishaHassan21)
