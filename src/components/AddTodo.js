import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.addToDo(title);
    setTitle("");
  };

  const onChange = (e) => setTitle(e.target.value);
  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Add Todo..."
        autoComplete="off"
        value={title}
        onChange={onChange}
      />
      <input
        type="submit"
        value="submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
};

AddTodo.propTypes = {
  addToDo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default AddTodo;
