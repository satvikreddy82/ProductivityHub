import Navbar from "./Navbar";
import Dashboard from "../Dashboard/Dashboard";
import TodoApp from "../Todo/TodoApp";
import NotesApp from "../Notes/NotesApp";
import { useState,useEffect } from "react";

function Layout() {
  const [tasks, setTasks] = useState(() => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
});

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  return (
    <div className="app-layout">
      <Navbar title="Productivity Hub" />

      <main className="main-content">
       <Dashboard tasks={tasks} />
       <TodoApp tasks={tasks} setTasks={setTasks} />
        <NotesApp />
      </main>
    </div>
  );
}

export default Layout;
