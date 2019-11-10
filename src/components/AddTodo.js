import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const AddTodo = props => {
  const { addTodo } = useContext(UserContext);
  const { id } = props;
  return (
    <div className="todo-add" onClick={()=> addTodo(id)}>
      <span>
        <i
          className="fa fa-plus-circle"
          style={{ fontSize: "40px", color: "#6bbed1", verticalAlign: 'middle', marginRight: '10px' }}
        ></i>
        Add New Task
      </span>
    </div>
  );
};

export default AddTodo;
