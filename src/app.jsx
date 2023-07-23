import { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import TaskList from "./TaskList";
import { FaClipboardList } from "react-icons/fa6";

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
    <>
      <div className="container">
        <Header />
        <div className="taskForm">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="taskInput"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Create a task and press enter to submit"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            />
            <button type="submit">Create</button>
          </form>
        </div>
        <div>
          <ul>
            <li>
              <strong>
                <FaClipboardList />
                Main
              </strong>
            </li>
            <li>
              <FaClipboardList />
              Secondary
            </li>
            <li>Create a new List</li>
          </ul>
        </div>
        <div>
          <TaskList tasks={tasks} />
        </div>
      </div>
      <Footer />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
