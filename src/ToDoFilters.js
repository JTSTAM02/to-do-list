import React from 'react';

export default function ToDoFilters({ view, changeView }) { // state
  
  return (
    <div>
      <button className='btn btn-primary m-1' onClick={() => changeView('All')} disabled={view === 'All'}> 
      {/* onClick triggers the changeView paramter and disabled is used to show button cannot be clicked again   */}
        All
      </button>
      <button className='btn btn-primary m-1' onClick={() => changeView('Completed')} disabled={view === 'Completed'}>
        Completed
      </button>
      <button className='btn btn-primary m-1' onClick={() => changeView('To-Do')} disabled={view === 'To-Do'}>
        To-Do
      </button>
    </div>
  );
}

