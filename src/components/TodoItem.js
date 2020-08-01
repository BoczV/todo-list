import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const buttonStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

const Div = styled.div`
  background-color: "#f4f4f4";
  padding: "10px";
  border-bottom: "1px #ccc dotted";
`;

const TodoItem = (props) => {
  const { id, title } = props.todo;

  return (
    <Div
      style={{ textDecoration: props.todo.completed ? "line-through" : "none" }}
    >
      <p>
        <input type="checkbox" onChange={props.markComplete.bind(this, id)} />{" "}
        {title}
        <button onClick={props.delTodo.bind(this, id)} style={buttonStyle}>
          x
        </button>
      </p>
    </Div>
  );
};

TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
