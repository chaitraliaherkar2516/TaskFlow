import { useState } from "react";
import API from "../services/api";

function EditTask({ task, onUpdated, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.put(`tasks/${task.id}/`, {
        title: title,
        description: description,
        completed: task.completed,
      });

      onUpdated(response.data);
    } catch (error) {
      console.error("Edit error:", error);
      alert("Failed to update task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Task</h3>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button type="submit">Save Changes</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EditTask;