import React from "react";

const Tasks = props => {
  const { tasks} = props;
  const taskList = tasks.length ? ( tasks.map((elt, idx) => {
    return (
      <div key={idx} className="todo-tasks">
        <div className="todo-title">
          {elt.title}
        </div>
        <div className="todo-description">{elt.description}</div>
      </div>
    );
  })):(<div></div>)
  return <React.Fragment>{taskList}</React.Fragment>
};

export default Tasks;
