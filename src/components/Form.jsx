import { useState } from "react";

const Form = ({ onAddTask }) => {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newTask = { id: Date.now(), description, completed: false };
    onAddTask(newTask);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you have to do?</h3>
      <input
        type="text"
        placeholder="Task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add Task</button>
    </form>
  );
};

export default Form;
