// src/AddScoreForm.tsx
import React, { useState } from 'react';
import './AddScoreForm.css';

interface AddScoreFormProps {
  onSubmit: (username: string, time: string) => void;
}

const AddScoreForm: React.FC<AddScoreFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, time);
    setUsername('');
    setTime('');
  };

  return (
    <div className="add-score-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="MM:SS::MSS"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Add Score</button>
      </form>
    </div>
  );
};

export default AddScoreForm;
