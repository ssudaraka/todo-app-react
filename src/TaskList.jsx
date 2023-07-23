import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {!tasks.length ? (
        <h3>Add a task to get started!</h3>
      ) : (
        <ul>
          {tasks.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
