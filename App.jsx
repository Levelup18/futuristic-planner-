import { useState } from "react";
import "./App.css";

const routine = {
  Sunday: [
    "6:00 AM - Wake up, drink water",
    "6:15 AM - Cold shower & grooming",
    "6:30 AM - Workout",
    "7:30 AM - Breakfast",
    "8:00 AM - 11:00 AM - Study",
    "11:00 AM - Face massage",
    "12:00 PM - Bath",
    "12:30 PM - Lunch",
    "1:00 PM - 3:00 PM - Light reading or skills",
    "3:00 PM - 3:30 PM - Prep for tuition",
    "4:00 PM - 6:00 PM - Geography tuition",
    "6:30 PM - Dinner",
    "7:00 PM - Reflect/journal, grooming",
    "9:00 PM - Meditation",
    "9:30 PM - Sleep"
  ]
};

export default function App() {
  const [openDays, setOpenDays] = useState({});

  const toggleDay = (day) => {
    setOpenDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <div className="container">
      <h1 className="title">Futuristic Weekly Planner</h1>
      {Object.entries(routine).map(([day, tasks]) => (
        <div key={day} className="card">
          <div className="header" onClick={() => toggleDay(day)}>
            <h2>{day}</h2>
            <span>{openDays[day] ? "-" : "+"}</span>
          </div>
          {openDays[day] && (
            <ul className="tasks">
              {tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
