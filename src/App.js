import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import Stats from "./components/Stats";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddTask={handleTasks} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <Stats tasks={tasks} />
    </div>
  );
}

export default App;
