import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp({ tasks, setTasks }) {

  const [taskInput, setTaskInput] = useState("");
  const [editingId, setEditingId] = useState(null);


  const addTask = () => {
    if (taskInput.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);

    setTaskInput(taskToEdit.text);
    setEditingId(id);
  };

  const saveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editingId ? { ...task, text: taskInput } : task,
      ),
    );

    setTaskInput("");
    setEditingId(null);
  };

  return (
   <section className="tasks-section">
  <div className="section-header">
    <h2>My Tasks</h2>
    <p>Stay organized and get things done.</p>
  </div>

  <TodoForm
    taskInput={taskInput}
    setTaskInput={setTaskInput}
    addTask={addTask}
    saveEdit={saveEdit}
    editingId={editingId}
  />

  <div className="tasks-list">
    {tasks.map((task) => (
      <TodoItem
        key={task.id}
        task={task}
        toggleTask={toggleTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    ))}
  </div>
</section>
  );
}

export default TodoApp;
