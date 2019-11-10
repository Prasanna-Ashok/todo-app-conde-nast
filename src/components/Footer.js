import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Footer = () => {
  const { cards } = useContext(UserContext);
  var taskCount = 0;
  cards.forEach(function(card) {
    taskCount = parseInt(taskCount + card.count);
  });
  return (
    <div style={{textAlign: 'center'}}>
      {taskCount !==0 ? <h4>Total tasks assigned : <strong>{taskCount}</strong></h4> : ''}
    </div>
  );
};

export default Footer;
