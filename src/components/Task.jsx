const Task = ({ task, onDeleteTask, onToggleTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={task.completed}
        onChange={() => onToggleTask(task.id)}
      />
      <span style={task.completed ? { textDecoration: "line-through" } : {}}>
        {task.description}
      </span>
      <button onClick={() => onDeleteTask(task.id)}>❌</button>
    </li>
  );
};
export default Task;
