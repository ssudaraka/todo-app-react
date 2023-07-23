import { FaPenToSquare, FaXmark } from "react-icons/fa6";

const Task = ({ task }) => {
  function handleEdit(e) {
    e.preventDefault();
    console.log("edit");
  }

  function handleDelete(e) {
    e.preventDefault();
    console.log("delete");
  }

  return (
    <li className="task">
      {task.task} <FaPenToSquare onClick={handleEdit} />
      <FaXmark onClick={handleDelete} />
    </li>
  );
};

export default Task;
