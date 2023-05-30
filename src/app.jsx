import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  let [taskInput, setTaskInput] = useState("");
  let [tasks, setTasks] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let taskInput = formData.get("taskInput");
    let taskId = tasks.length ? tasks[tasks.length - 1].id + 1 : 0;
    let task = {
      id: taskId,
      task: taskInput,
    };
    setTasks([...tasks, task]);
    setTaskInput("");
  }

  return (
    <div className="container">
      <h1 className="logo">todo.</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskInput"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Create a task and press enter to submit"
        />
      </form>
      {!tasks.length ? (
        <h2>Add a task to get started!</h2>
      ) : (
        <ul>
          {tasks.map((task, index) => {
            return <li key={task.id}>{task.task}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
