import React from 'react';
import './App.css';

function ToDoItem({ item, toggleComplete, removeItem }) {

  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: "10px",}}>
      <input
        type="checkbox"
        checked={item.completed} // determines if checkbox is checked or not
        onChange={() => toggleComplete(item.id)} // changes the state of the list item as either complete or incomplete
      />
      
      <span style={{ textDecoration: item.completed ? 'line-through' : 'none', marginLeft: "10 px" }}> 
        {item.title} 
      </span>

      <button style={{margin: 20}} onClick={() => removeItem(item.id)}>Remove Item</button>
    </li>
  );
}

export default ToDoItem;
