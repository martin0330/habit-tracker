import React from 'react';
import '../Calendar/index.css';

// import { Link } from 'react-router-dom';

const Calendar = ({ habits }) => {
  const handleClick = (event) => {
    if (event.target.style.backgroundColor) {
      event.target.style.removeProperty('background-color');
    } else {
      event.target.style.setProperty('background-color', 'red');
    }
  };

  return (
    <section className='' id='calendar'>
      <div className='' id='fullDiv'>
        <p className=''>JULY</p>
        <ul>
          <li>SUN</li>
          <li>MON</li>
          <li>TUE</li>
          <li>WED</li>
          <li>THUR</li>
          <li>FRI</li>
          <li>SAT</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>
            <div>
              {habits &&
                habits.map((habit) => (
                  <div
                    key={habit._id}
                    className='card mb-3'
                    onClick={handleClick}
                  >
                    {habit.habitName}
                  </div>
                ))}
            </div>
            14
          </li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    </section>
  );
};

export default Calendar;
