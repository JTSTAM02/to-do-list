import React, { useState } from 'react';

function ToDoInput({ addItem }) {
  const [newItemTitle, setNewItemTitle] = useState('');

  function generateUniqueId() {
    return Math.random().toString();
  }

  function HandleSubmit(event) {
    event.preventDefault();
    if(newItemTitle.trim() != '') {
        const newItem = {
            id: generateUniqueId(),
            title: newItemTitle,
            completed: false
        };
        addItem(newItem);
        setNewItemTitle('')
    }
  }

  return (
    <form onSubmit={HandleSubmit}>
      <input
        type="text"
        value={newItemTitle}
        onChange={(event) => setNewItemTitle(event.target.value)}
        placeholder="Enter a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ToDoInput;
