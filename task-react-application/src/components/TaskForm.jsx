import { useState } from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Write your task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        placeholder="Write your description of the task"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button>save</button>
    </form>
  );
}
export default TaskForm;
