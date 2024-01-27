import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <div className="list">
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
