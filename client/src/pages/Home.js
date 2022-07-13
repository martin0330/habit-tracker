import React from 'react';
import jumbotron from '../images/jumbotron.jpg';

const Home = () => {
  return (
    <main>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <img src={jumbotron} className='img-fluid' height='50' alt='An image with a journal, coffee, watch, and clips on a table' />
        </div>
      </div>

      <div className='text-center container'>
        <h2>
          Welcome to "Habit Tracker", your app for creating habits and a better
          you!
        </h2>
      </div>
      <div className='container'>
        <h3>Reasons to use Habit Tracker:</h3>
        <ul>
          <li>Create Habits that will enrich your life.</li>
          <li>Keep track of your habits and improve your work ethic.</li>
          <li>Remind yourself of habits to avoid.</li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
