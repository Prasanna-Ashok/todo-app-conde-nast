import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Tasks from './Tasks';
import AddTodo from './AddTodo';

const Cards = () => {
  const { cards } = useContext(UserContext);
  const cardList = cards.length ? (cards.map((e,i) => {
    return (
      <div className="todo-individual" key={i}>
        <h2 style={{borderBottom: '2px solid orange'}}>{e.name}</h2>
        <Tasks tasks={e.tasks} />
        <AddTodo id={e.id} />
      </div>
    );
  })) : (<h3>No Tasks assigned. Create a new user!</h3>)
  return <div className="todo">{cardList}
  </div>;
};

export default Cards;
