import React, { useState } from 'react';

// functionality for input bar
function ToDoInput({ addItem }) {
  const [newItemTitle, setNewItemTitle] = useState('');

  function generateUniqueId() {
    return Math.random().toString();
  }

  function HandleSubmit(event) {
    event.preventDefault(); // prevents excessive page refresh
    if(newItemTitle.trim() !== '') {
        const newItem = {
            id: generateUniqueId(),
            title: newItemTitle,
            completed: false
        };
        addItem(newItem);
        setNewItemTitle('') //clears the input field

    }
  }
// displays input bar and Add button
  return (
    <form onSubmit={HandleSubmit}>
      <input
        type="text"
        value={newItemTitle}
        onChange={(e) => setNewItemTitle(e.target.value)} // updates state by getting current value or the input field
        placeholder="Enter a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ToDoInput;
