import { useState } from "react";
import "./App.css";

// Make sure this is declared ABOVE App function
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
    "1:00 PM - 3:00 PM - Light reading",
    "3:00 PM - 3:30 PM - Prep for tuition",
    "4:00 PM - 6:00 PM - Geography tuition",
    "6:30 PM - Dinner",
    "7:00 PM - Reflect/journal, get ready for bed",
    "9:00 PM - Meditation",
    "9:30 PM - Sleep"
  ]
};

export default function App() {
  return (
    <div style={{ padding: "20px", color: "white", backgroundColor: "#121212", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", color: "#00FFF7" }}>My Futuristic Planner</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {routine.Sunday.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px", borderBottom: "1px solid #444", paddingBottom: "5px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
