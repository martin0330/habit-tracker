import React from 'react';

import { Link } from 'react-router-dom';

const HabitList = ({ habits, title }) => {
  if (!habits.length) {
    return <h3>No Habits Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {habits &&
        habits.map((habit) => (
          <div key={habit._id} className='card mb-3'>
            <p className='card-header'>
              {/* Link to habit-specific page...should we have this or not? */}
              <Link
                to={`/${habit.habitName}`}
                style={{ fontWeight: 700 }}
                className='text-light'
              >
                {habit.habitName}
              </Link>{' '}
              Habit completed {habit.completedAt.length} times.
              {/* Should we create a util that checks for number of times and edits the text to say time(s) based on number? */}
            </p>
          </div>
        ))}
    </div>
  );
};

export default HabitList;
