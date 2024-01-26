import { toggleTodo, deleteTodo } from "../redux/actions";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="task">
      <div className="task-inside">
        <div className="task-core">
          {}
          <h1
            style={{
              textDecoration: todo?.done ? "line-through" : "",
              color: todo?.done ? "#bdc3c7" : "#fd9814",
            }}
          >
            {todo.name}
          </h1>
          <p
            style={{
              textDecoration: todo?.done ? "line-through" : "",
              color: todo?.done ? "#bdc3c7" : "#dddd",
              margin: "0px",
            }}
          >
            {todo.description}
          </p>
        </div>
        <div className="task-core">
          <Button
            variant="outlined"
            color="info"
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
              fontFamily: "Rubik",
              color: "#2196f3",
              borderColor: "#2196f3",
              backgroundColor: "#fff",
              borderRadius: "50px",
              margin: "5px",
              padding: "5px",
              display: todo?.done ? "none" : "inline",
              fontSize: "12px",
            }}
          >
            Complete
          </Button>
          <Button
            variant="outlined"
            style={{
              fontFamily: "Rubik",
              color: "rgb(245 7 0)",
              borderColor: "rgb(245 7 0)",
              backgroundColor: "#fff",
              borderRadius: "50px",
              margin: "5px",
              padding: "5px",
              fontSize: "12px",
            }}
            onClick={() => dispatch(deleteTodo(todo._id))}
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
