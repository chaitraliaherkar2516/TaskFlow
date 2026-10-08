import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggle, onUpdated }) {
  return (
    <div>
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
            onUpdated={onUpdated}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;