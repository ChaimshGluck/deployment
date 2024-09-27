import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the message from the back-end
    fetch('/api/message')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error('Error fetching message:', error);
        setError(error.message);
      });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>{message ? message : "Loading..."}</h1>
      </header>
    </div>
  );
}

export default App;
