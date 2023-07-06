import React from 'react';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function ToDoItem({ item, toggleComplete, removeItem }) {

  return (
    <li style={{display:'block', marginBottom: "5px",}}>
      <input
        type="checkbox" 
        checked={item.completed} // determines if checkbox is checked or not
        onChange={() => toggleComplete(item.id)} // changes the state of the list item as either complete or incomplete
      />
      
      <span style={{ fontSize: '30px', textDecoration: item.completed ? 'line-through' : 'none', marginLeft: "5px", marginRight: '5px' }}> 
        {item.title} 
      </span>

      <button style={{margin: '20px'}} onClick={() => removeItem(item.id)}><i class="bi bi-x-square-fill"></i></button>
    </li>
  );
}
