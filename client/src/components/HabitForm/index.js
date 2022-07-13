import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_HABIT } from "../../utils/mutations";
import { QUERY_HABIT, QUERY_ME } from "../../utils/queries";

const HabitForm = () => {
  const [habitName, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addHabit, { error }] = useMutation(ADD_HABIT, {
    update(cache, { data: { addHabit } }) {
      // could potentially not exist yet, so wrap in a try/catch
      try {
        // update 'me' array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, habits: [...me.habits, addHabit] } },
        });
      } catch (e) {
        console.warn("First habit insertion by user!");
      }

      // update habits array's cache
      const { habits } = cache.readQuery({ query: QUERY_HABIT });
      cache.writeQuery({
        query: QUERY_HABIT,
        data: { habits: [addHabit, ...habits] },
      });
    },
  });

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // add habit to database
      await addHabit({
        variables: { habitName },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <p className={`m-0 ${characterCount === 280 || error ? "text-error" : ""}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch" onSubmit={handleFormSubmit}>
        <textarea placeholder="Get a New Habit Started!" value={habitName} className="form-input col-12 col-md-9" onChange={handleChange}></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HabitForm;
