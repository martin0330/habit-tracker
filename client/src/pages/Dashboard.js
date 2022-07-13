import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';
import Calendar from '../components/Calendar';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';
import Auth from '../utils/auth';

const Dashboard = () => {
  const loggedIn = Auth.loggedIn();
  const { data: userData } = useQuery(QUERY_ME);

  return (
    <main>
      <div className=''>
        {loggedIn && userData && (
          <section className=''>
            <Calendar habits={userData.me.habits} />
          </section>
        )}
        {loggedIn && (
          <div className=''>
            <HabitForm />
          </div>
        )}
        {loggedIn && userData ? (
          <div className=''>
            <HabitList habits={userData.me.habits} />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Dashboard;
