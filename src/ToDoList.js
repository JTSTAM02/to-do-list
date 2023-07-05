import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import ToDoInput from './ToDoInput';
import ToDoFilters from './ToDoFilters';

export function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const [view, setView] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function addItem(newItem) {
    setToDoList((prevToDoList) => [...prevToDoList, newItem]);
  }

  function toggleComplete(itemId) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((item) => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  }

  function removeItem(itemId) {
    setToDoList((prevToDoList) =>
      prevToDoList.filter((item) => item.id !== itemId)
    );
  }

  function completeAllItems() {
    setToDoList((prevToDoList) =>
      prevToDoList.map((item) => ({ ...item, completed: true }))
    );
  }

  function activateAllItems() {
    setToDoList((prevToDoList) =>
      prevToDoList.map((item) => ({ ...item, completed: false }))
    );
  }

  function getItemsByView() {
    switch (view) {
      case 'All':
        return toDoList;
      case 'Completed':
        return toDoList.filter((item) => item.completed);
      case 'To-Do':
        return toDoList.filter((item) => !item.completed);
      default:
        return toDoList;
    }
  }

  const remainingItemsCount = toDoList.filter((item) => !item.completed).length;

  return (
    <div>
      <ToDoInput addItem={addItem} />
      <button onClick={() => setDropdownOpen(!dropdownOpen)}>
        {dropdownOpen ? '▲' : '▼'}
      </button>
      {dropdownOpen && (
        <>
          <ToDoFilters view={view} changeView={setView} />
          <ul>
            {getItemsByView().map((item) => (
              <ToDoItem
                key={item.id}
                item={item}
                toggleComplete={toggleComplete}
                removeItem={removeItem}
              />
            ))}
          </ul>
          <p>{remainingItemsCount} items remaining</p>
          <button onClick={completeAllItems}>Complete All</button>
          <button onClick={activateAllItems}>Activate All</button>
        </>
      )}
    </div>
  );
}

export default ToDoList;
