const Stats = ({ tasks }) => {
  if (!tasks.length) {
    return (
      <footer className="stats">
        <em>Start adding some tasks to your list 🚀</em>
      </footer>
    );
  }
  const numTasks = tasks.length;
  const numCompleted = tasks.filter((task) => task.completed).length;
  const percentage = Math.round((numCompleted / numTasks) * 100);
  return (
    <footer className="stats">
      <em>
        {" "}
        {percentage === 100
          ? `Congrats you finished all your tasks 🎉`
          : `You have ${numTasks} tasks
          in your list, you already completed ${numCompleted} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
