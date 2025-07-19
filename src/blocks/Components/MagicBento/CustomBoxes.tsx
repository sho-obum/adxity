'use client';
import React, { useState } from 'react';

// Component for Box 1
export const Box1Component = () => {
  return (
    <div className="box1-content">
      <h3>🎯 Analytics</h3>
      <div className="metric-display">
        <span className="big-number">1,234</span>
        <span className="label">Active Users</span>
      </div>
      <button onClick={() => alert('Analytics clicked!')}>
        View Details
      </button>
    </div>
  );
};

// Component for Box 2
export const Box2Component = () => {
  return (
    <div className="box2-content">
      <h3>📊 Dashboard</h3>
      <div className="chart-placeholder">
        <div className="bar" style={{height: '60%'}}></div>
        <div className="bar" style={{height: '80%'}}></div>
        <div className="bar" style={{height: '40%'}}></div>
      </div>
      <p>Monthly Revenue: $45,000</p>
    </div>
  );
};

// Component for Box 3
export const Box3Component = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2', 'Task 3']);
  
  return (
    <div className="box3-content">
      <h3>✅ Todo List</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <button onClick={() => setTasks([...tasks, `Task ${tasks.length + 1}`])}>
        Add Task
      </button>
    </div>
  );
};

// Component for Box 4
export const Box4Component = () => {
  return (
    <div className="box4-content">
      <h3>👤 Profile</h3>
      <div className="profile-info">
        <div className="avatar">JD</div>
        <div>
          <h4>John Doe</h4>
          <p>Developer</p>
        </div>
      </div>
      <div className="profile-stats">
        <span>Projects: 12</span>
        <span>Followers: 543</span>
      </div>
    </div>
  );
};

// Component for Box 5
export const Box5Component = () => {
  return (
    <div className="box5-content">
      <h3>🌤️ Weather</h3>
      <div className="weather-display">
        <div className="temperature">72°F</div>
        <div className="condition">Sunny</div>
        <div className="forecast">
          <span>High: 78°</span>
          <span>Low: 65°</span>
        </div>
      </div>
    </div>
  );
};

// Component for Box 6
export const Box6Component = () => {
  return (
    <div className="box6-content">
      <h3>🎵 Music Player</h3>
      <div className="music-info">
        <div className="song-title">Currently Playing</div>
        <div className="artist">Artist Name</div>
      </div>
      <div className="music-controls">
        <button>⏮️</button>
        <button>⏯️</button>
        <button>⏭️</button>
      </div>
    </div>
  );
};
