import React, { useEffect, useState } from 'react';
import ToDoItem from './ToDoItem';
import InputBar from './InputBar';
import ToDoFilters from './ToDoFilters';
import './App.css';


export default function ToDoList() { // state variables
  const [toDoList, setToDoList] = useState([]);
  const [view, setView] = useState('All');
  const [listCollapsed, setListCollapsed] = useState(false);
  
  
  useEffect(() => {
    // Load items 
    const savedItems = localStorage.getItem("todoItems");
    if (savedItems.length !== null && savedItems.length > 0) {
      setToDoList(JSON.parse(savedItems)); //turns data into a string
    }
  }, []);

  useEffect(() => {
    // Save items to local storage whenever the to-do list changes
    if(toDoList.length > 0) {
    localStorage.setItem("todoItems", JSON.stringify(toDoList));
    }
  }, [toDoList]);

  // add item to to do list
  function addItem(newItem) {
    setToDoList((prevToDoList) => [...prevToDoList, newItem]);
  }

  // switch view based upon user input of views (see ToDoFilters)
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

  // toggles completion of list item in state
  function toggleComplete(itemId) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((item) => {
        if (item.id === itemId) { // checks for if list item matches itemID given as prop
          return { ...item, completed: !item.completed }; //toggles completed to not completed
        }
        return item;
      })
    );
  }

  // removes items by checking for item matching the generated itemId
  function removeItem(itemId) {
    setToDoList((prevToDoList) =>
      prevToDoList.filter((item) => item.id !== itemId)
    );
  }

  // makes Complete All items button functional
  function completeAllItems() {
    setToDoList((prevToDoList) =>
      prevToDoList.map((item) => ({ ...item, completed: true }))
    );
  }

  // makes Activate All button functional
  function activateAllItems() {
    setToDoList((prevToDoList) =>
      prevToDoList.map((item) => ({ ...item, completed: false }))
    );
  }

  // counts remaining list items not completed
  const remainingItemsCount = toDoList.filter((item) => !item.completed).length;

  // displays necessary componenets 
  return (
    <div className='container'>
    <div className='row justify-content-center'>
      <div className='col-lg-6'>
      <InputBar addItem={addItem} />
      <button onClick={() => setListCollapsed(!listCollapsed)}>
        {listCollapsed ? '⬆' : '⬇'}
      </button>
      {!listCollapsed && (
        <>
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
        </>
      )}
      <hr />
      <div className=' align-items-center'>
      <p className='m-3'>{remainingItemsCount} items remaining</p>
      <ToDoFilters view={view} changeView={setView} />
          <button className='btn btn-primary shadow m-2' onClick={completeAllItems}>Complete All</button>
          <button className='btn btn-primary shadow' onClick={activateAllItems}>Activate All</button>
      </div>
      </div>
      </div>
      </div>
  );
}

