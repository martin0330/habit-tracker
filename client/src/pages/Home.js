import React from 'react';

const Home = () => {
  return (
    <main>
      <div className=''>
        <h2>
          Welcome to "Habit Tracker", your app for creating habits and a better
          you!
        </h2>
      </div>
      <div className=''>{/* <img>Insert image here </img> */}</div>
      <section className=''>
        <h3>Reasons to use Habit Tracker:</h3>
        <ul>
          <li>Create Habits that will enrich your life.</li>
          <li>Keep track of your habits and improve your work ethic.</li>
          <li>Remind yourself of habits to avoid.</li>
        </ul>
      </section>
    </main>
  );
};

export default Home;
