function TodoForm({
  taskInput,
  setTaskInput,
  addTask,
  saveEdit,
  editingId
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingId === null) {
      addTask();
    } else {
      saveEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={taskInput}
        onChange={(event) => setTaskInput(event.target.value)}
      />

      <button type="submit">
        {editingId === null ? "Add Task" : "Save"}
      </button>
    </form>
  );
}

export default TodoForm;