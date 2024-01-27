import { useState } from "react";
import { Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";
import styled from "@emotion/styled";

const initialText = {
  name: "",
  description: "",
};

const StyledButton = styled(Button)`
  font-family: "Rubik";
  color: #fff;
  background-color: #fd9814;
  border-radius: 50px;
`;

const TodoForm = () => {
  const [text, setText] = useState(initialText);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addNewTodo(text)); //api called to add new Todo
    setText(initialText);
  };

  const onInputChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <form className="form">
          <div className="form-first">
            <div className="form-input">
              <label for="input1">Name</label>
              <input
                id="input1"
                className="input"
                onChange={onInputChange}
                name="name"
                value={text.name}
              />
            </div>
            <div className="form-input">
              <label for="input2">Description</label>
              <input
                id="input2"
                className="input"
                onChange={onInputChange}
                name="description"
                value={text.description}
              />
            </div>
          </div>
          <div className="form-first">
            <StyledButton variant="contained" onClick={handleClick}>
              Add Todo
            </StyledButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
