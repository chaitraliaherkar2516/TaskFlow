import EditTask from "./EditTask";
import { useState } from "react";

function TaskItem({ task, onDelete, onToggle, onUpdated }) {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <EditTask
        task={task}
        onUpdated={(updatedTask) => {
          onUpdated(updatedTask);
          setEditing(false);
        }}
        onCancel={() => setEditing(false)}
      />
    );
  }

  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>
        Status: {task.completed ? "Completed" : "Pending"}
      </p>

      <button onClick={() => onToggle(task)}>
        {task.completed ? "Mark Pending" : "Mark Completed"}
      </button>

      <button onClick={() => setEditing(true)}>
        Edit
      </button>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>

      <hr />
    </div>
  );
}

export default TaskItem;