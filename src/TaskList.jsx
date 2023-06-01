const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {!tasks.length ? (
        <h2>Add a task to get started!</h2>
      ) : (
        <ul>
          {tasks.map((task) => {
            return <li key={task.id}>{task.task}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
