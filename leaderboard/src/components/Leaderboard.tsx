// src/Leaderboard.tsx
import React from 'react';
import { Score } from './types';
import './Leaderboard.css';

interface LeaderboardProps {
  scores: Score[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
  return (
    <div className="leaderboard">
      <h2>Top Scores</h2>
      <ol>
        {scores.map((score, index) => (
          <li key={score.id}>
            <span className="rank">{index + 1}</span>
            <span className="username">{score.username}</span>
            <span className="time">{score.time}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
