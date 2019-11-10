import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext';

const NewUser = () => {
    const {addUser} = useContext(UserContext)
    return ( 
        <div className="todo-add" onClick={addUser}>
      <span>
        <i
          className="fa fa-plus-circle"
          style={{ fontSize: "40px", color: "orange", verticalAlign: 'middle', marginRight: '10px' }}
        ></i>
        Add New User
      </span>
    </div>
    );
}
 
export default NewUser;