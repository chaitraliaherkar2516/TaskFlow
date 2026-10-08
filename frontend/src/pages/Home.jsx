import { useEffect, useState } from "react";
import API from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Navbar from "../components/Navbar";

function Home({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  useEffect(() => {
    API.get("tasks/")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error loading tasks:", error);
      });
  }, []);

  const addTask = (newTask) => {
    setTasks((previousTasks) => [newTask, ...previousTasks]);
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`tasks/${id}/`);

      setTasks((previousTasks) =>
        previousTasks.filter((task) => task.id !== id)
      );
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const toggleTask = async (task) => {
    try {
      const response = await API.put(`tasks/${task.id}/`, {
        title: task.title,
        description: task.description,
        completed: !task.completed,
      });

      setTasks((previousTasks) =>
        previousTasks.map((item) =>
          item.id === task.id ? response.data : item
        )
      );
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const updateTask = (updatedTask) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  return (
    <div>
        <Navbar onLogout={onLogout} />

      <h1>TaskFlow</h1>
      <p>Manage your daily tasks easily.</p>
         <div className="dashboard">
  <h2>Dashboard</h2>

  <div className="dashboard-cards">
    <div className="dashboard-card">
      <h3>Total Tasks</h3>
      <p>{tasks.length}</p>
    </div>

    <div className="dashboard-card">
      <h3>Completed</h3>
      <p>{completedTasks}</p>
    </div>

    <div className="dashboard-card">
      <h3>Pending</h3>
      <p>{pendingTasks}</p>
    </div>
  </div>
</div>
      <hr />
      <input
  className="search-box"
  type="text"
  placeholder="🔍 Search tasks..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<br />
<br />
      <TaskForm onTaskAdded={addTask} />

      <hr />

      <TaskList
        tasks={tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  )}
  onDelete={deleteTask}
  onToggle={toggleTask}
  onUpdated={updateTask}
/>
    </div>
  );
}

export default Home;