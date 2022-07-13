import React from 'react';

// import { Link } from 'react-router-dom';

const handleClick = (event) => {
  if (event.target.style.textDecoration) {
    event.target.style.removeProperty('text-decoration');
  } else {
    event.target.style.setProperty('text-decoration', 'line-through');
  }
};

const HabitList = ({ habits }) => {
  if (!habits.length) {
    return <h3>No Habits Yet</h3>;
  }

  return (
    <div>
      <h3>Habit List</h3>
      {habits &&
        habits.map((habit) => (
          <div key={habit._id} className='card mb-3'>
            <p className='card-header' onClick={handleClick}>
              {habit.habitName}
            </p>
          </div>
        ))}
    </div>
  );
};

export default HabitList;
