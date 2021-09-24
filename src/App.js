import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTask();
  }, []);
  // fetch taskS function
  const fetchTasks = async () => {
    const result = await fetch("http://localhost:5000/tasks");
    const data = result.json();
    return data;
  };
  // fetch task function
  const fetchTask = async (id) => {
    const result = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = result.json();
    return data;
  };
  // delete/hide task func
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder func
  const toggleReminder = async (id) => {
    const toggleReminder = await fetchTask(id);
    const updateTask = {
      ...toggleReminder,
      reminder: !toggleReminder.reminder,
    };
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              reminder: data.reminder,
            }
          : task
      )
    );
  };

  // add task function
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title={"Task Tracker"}
        toggleAddTaskForm={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {/* only positive ternary operator */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
