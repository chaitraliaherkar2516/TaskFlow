import { useState } from "react";
import API from "../services/api";

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (!title.trim()) {
  alert("Please enter a task title");
  return;
}

     if (title.trim().length < 3) {
  alert("Task title must be at least 3 characters");
  return;
}

    try {
      const response = await API.post("tasks/", {
        title: title,
        description: description,
      });

      onTaskAdded(response.data);

      setTitle("");
      setDescription("");

      alert("Task added successfully!");
    } catch (error) {
      console.error("Add task error:", error);
      alert("Failed to add task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task</h2>

      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;