import React, { useState } from 'react';

// functionality for input bar
export default function InputBar({ addItem }) {
  const [newItemTitle, setNewItemTitle] = useState('');

  // needed for local storage
  function generateUniqueId() {
    return Math.random().toString();
  }

  function HandleSubmit(event) {
    if(event.key === "Enter") {
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
  }


// displays input bar and Add button
  return (
    <div>
    <div className='input-group mb-3'>
      <input
        type="text"
        className='form-control'
        value={newItemTitle}
        onChange={(e) => setNewItemTitle(e.target.value)} // updates state by getting current value or the input field
        onKeyDown ={HandleSubmit}
        placeholder="What needs to be done...?"
      />
      <button id='additem' className='btn btn-primary' type="button" onClick={HandleSubmit}>Add</button>
    </div>
    </div>
  );
}

