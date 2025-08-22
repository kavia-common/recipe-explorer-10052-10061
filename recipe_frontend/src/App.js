import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  const handleNewNote = () => {
    /**
     * This is a placeholder action for creating a new note.
     * Integration point: Open a modal or navigate to a note creation view.
     */
    // eslint-disable-next-line no-alert
    alert('New Note action triggered!');
  };

  return (
    <div className="App">
      {/* Simple top bar to host key actions */}
      <div className="topbar" role="region" aria-label="Primary actions">
        <button
          className="btn new-note-btn"
          onClick={handleNewNote}
          aria-label="Create a new note"
        >
          ＋ New Note
        </button>
        <button
          className="btn theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
