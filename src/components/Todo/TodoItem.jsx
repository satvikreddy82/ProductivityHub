function TodoItem({ task, toggleTask, editTask, deleteTask }) {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <div className="todo-content">
        <span className="todo-text">{task.text}</span>

        <span className="todo-status">
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <div className="todo-actions">
        <button onClick={() => toggleTask(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button onClick={() => editTask(task.id)}>
          Edit
        </button>

        <button onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;