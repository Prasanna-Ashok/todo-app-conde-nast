import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [cards, setCards] = useState([]);

  const addTodo = id => {
    let title, description, tasks, count, index, user;
    //Prompt the title
    title = window.prompt("Enter the title");
    //Check if title exists
    title && title.length
      ? (description = window.prompt("Enter the description"))
      : window.alert("Title is mandatory");
    if (description && description.length !== 0) {
      tasks = {
        title,
        description
      };
      user = [...cards];
      //Finding the appropriate user to add todo
      index = user.findIndex(u => u.id === id);
      user[index].tasks.push(tasks);
      count = user[index].tasks.length;
      user[index].count = count;
      setCards([...cards]);
    } else {
      window.alert("Description has to be atleast 1 character!");
    }
  };

  const addUser = () => {
    let id, username;
    id = (Math.random() * 10).toFixed(4);
    username = window.prompt("Enter the name");
    username && username.length
      ? setCards([...cards, { name: username, tasks: [], id: id, count: 0 }])
      : window.alert("Name is mandatory");
  };

  return (
    <UserContext.Provider value={{ cards, addTodo, addUser }}>
      {props.children}
      {console.log("cards", cards)}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
