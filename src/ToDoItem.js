import React from 'react';

function ToDoItem({ item, toggleComplete, removeItem }) {
  const { id, title, completed } = item;

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {title}
      </span>
      <button onClick={() => removeItem(id)}>Remove</button>
    </li>
  );
}

export default ToDoItem;
