// src/App.tsx
import React, { useState } from 'react';
import Leaderboard from './components/Leaderboard';
import AddScoreForm from './components/AddScoreForm';
import Footer from './components/Footer';
import './App.css';

const initialScores = [
  { id: 1, username: 'Alice', time: '01:23::456' },
  { id: 2, username: 'Bob', time: '02:34::567' },
  // Add more dummy data as needed
];

const App: React.FC = () => {
  const [scores, setScores] = useState(initialScores);

  const handleAddScore = (username: string, time: string) => {
    const newScore = { id: scores.length + 1, username, time };
    const updatedScores = [...scores, newScore].sort((a, b) => {
      const timeA = parseTime(a.time);
      const timeB = parseTime(b.time);
      return timeA - timeB;
    }).slice(0, 10); // Ensure only top 10 scores
    setScores(updatedScores);
  };

  const parseTime = (time: string) => {
    const [minutes, seconds, milliseconds] = time.split(/[:::]/).map(Number);
    return minutes * 60000 + seconds * 1000 + milliseconds;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Leaderboard</h1>
      </header>
      <Leaderboard scores={scores} />
      <AddScoreForm onSubmit={handleAddScore} />
      <Footer />
    </div>
  );
};

export default App;
