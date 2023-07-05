import React from 'react';

export default function ToDoFilters({ view, changeView }) {
  return (
    <div>
      <button onClick={() => changeView('All')} disabled={view === 'All'}>
        All
      </button>
      <button onClick={() => changeView('Completed')} disabled={view === 'Completed'}>
        Completed
      </button>
      <button onClick={() => changeView('To-Do')} disabled={view === 'To-Do'}>
        To-Do
      </button>
    </div>
  );
}

