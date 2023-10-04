import React from "react";
import { useState } from 'react';

import "./style.css";

export default function App() {
  return (
    <div>
      < useDate/>
      <NewDate/>
    </div>
  );
}


function useDate(initialDate = new Date()) {
  const [date, setDate] = useState(initialDate);

  const addDays = (daysToAdd) => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + daysToAdd);
    setDate(newDate);
  };

  const addMonths = (monthsToAdd) => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + monthsToAdd);
    setDate(newDate);
  };

  return {
    date,
    addDays,
    addMonths,
  };
}

function NewDate() {
  const { date, addDays, addMonths } = useDate();

  return (
    <div>
      <p>Date: {date.toLocaleDateString()}</p>
      <button onClick={() => addDays(1)}>Add 1 Days</button>
      <button onClick={() => addMonths(1)}>Add 1 Month</button>
    </div>
  );
}


