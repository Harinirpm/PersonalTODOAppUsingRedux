import { useDispatch } from "react-redux";
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markInComplete,
} from "../redux/actions";
import {
  FaToggleOn,
  FaToggleOff,
  FaTrash,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        <span
          className={`mr-4 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        <button
          className="mr-1 text-md bg-blue-10 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo(index))}
        >
          {todo.completed ? <FaToggleOff style={{fontSize:"20px"}}/> : <FaToggleOn style={{fontSize:"20px"}}/>}
        </button>
        <button
          className="mr-2 text-sm bg-red-10 text-white sm:px-2 px-1 py-1 rounded-[5px]"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash style={{color:"#f51c00",fontSize:"15px"}}/>
        </button>
        {!todo.completed && (
          <button
            className="text-sm bg-green-10 text-green-500 sm:px-2 px-1 py-1 rounded-[5px]"
            onClick={() => dispatch(markCompleted(index))}
          >
            <FaCheck style={{fontSize:"20px"}}/>
          </button>
        )}
        {todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded-[5px]"
            onClick={() => dispatch(markInComplete(index))}
          >
            <FaTimes style={{fontSize:"15px"}}/>
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
