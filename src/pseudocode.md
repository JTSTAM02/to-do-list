# To-Do List (React)

## MoSCoW

    - Must-Haves: 
        * Create UI (input bar with dropdown)
        * Allow User to Create List Items
        * Sort Items by three views: All, Completed,and To-Do (not completed)
        * Allow user to check off an item as "completed"
        * Show count of remaining items
        * Allow user to remove an item from the list
        * check off or cross out all items in one click with "complete all"
        * allow user to press a single button for all checked off items to become active again
        * localStorage to save data in state
        * Must be responsive across all web sizes (Bootstrap)

    - Should-Haves: 
        * Sub sections


    -Could-Haves:
        * Option to separate by importance

    -Won't-Haves/Wish:
        * Options to separate by email accounts/logins 

## Atomic Design Principles
    - Header as atom
    - Input field as molecule
    - To Do List as organism


## User Stories
    - As a user. I can view my to do list, so that I can see the items I need to complete.
    
    - As a user, I can edit my to do list, so that I can make changes to the items when needed

    - As a user, I can delete my to do list items, so that I can show what items I have completed so far

    - As a user, I can end the page and return later to see my information intact so that I can see my information over time


## Questions
    - How do I collect user input and store it into localStorage?
    - How do I add an option to add an item and x out an item dynamically once the user enters an item on their to do list?
    - How do I sort the data into different views while maintaining best practices? (DRY)


## Solutions
    - Create components to listen for user input
    - Create components that generate a unique id for each to do list item
    - Use .filter to sort through each view based upon user click


## Procedural
    ### BEGIN
    ### INIT

        - Create React App
        - Create variable named toDoList to store list of to-do-items. 
            * Start as an empty array (state)

        - Create variable named newItem to store the value of a new item entered by the user
            * Start as an empty string. (state)

        - Create variable named View to keep track of current view.
            * Start as "All"

        - Create separate arrays to store the items for each view
            * Examples: [allItems], [completedItems], [todoItems]
            
        - Create input field and button to allow user to enter their new to do list item.
            * button will need event handler to dynamically create list item

        - Create function to handle creation of new items
            * function will include user input as a parameter
        
        - Create function to allow user to mark item as completed
        - Create function to handle removal of item from list
        - Create function to check off all items on list as completed
        - Create a function that unchecks off all items on list as completed
        - Create a function that generates a unique ID for a new list item
        - Create functions to save and get LocalStorage
        - Render these functions as components in React (conditional render based upon selected view)
        -Apply Bootstrap layouts for responsiveness

## Functional
    // create new list item upon use of "Enter"
    - function createListItem

  // Create a new to-do item object with the user's input
    -function handleAddItem() {
  const newItem = {
    id: generateUniqueId(),
    title: newItemTitle,
    completed: false,
  };

  // Update the to-do list state by adding the new item
  setToDoList((prevToDoList) => [...prevToDoList, newItem]);

  // Clear the input field
  setNewItemTitle('');

  // Save the updated to-do list to localStorage
  saveToLocalStorage('toDoList', toDoList);
}


    -function removeToDoItem (todoList, itemId) {
        const updatedList = todoList.filter((item) => item.id != itemId);
        return updatedList;
    }

    - function checkAllItems (todoList) {
        const updatedList = todoList.map((item) => {
            
        })
    }

    -function uncheckAllItems (todoList) {
        const updatedList = todoList.map((item) => {
            return
        })
    }

    -function generateId() {
        return Math.random().toString()
    }

// function to get Items by View
    -function getItemsByView(view) {
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


    -function saveToLocalStorage (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    -function getLocalStorage(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }


## Object-Oriented



## React

### Components
- export function createListItem ({ toDoItems }) {
    return(
        <ul>
            {toDoItems.map(({id, content, complete}) => (
                <Item id={id}> content= {content} complete={complete}/>

            ))}
        </ul>
    );
}

// saves to Local Storage
- export function saveToLocalStorage = (storageKey, storageValue) => {
    localStorage.setItem(storageKey, JSON.stringify(storageValue))


};


### State
// need to set State
- const [setItem, setnewItem] = useState(saveToLocalStorage('item') || []);
