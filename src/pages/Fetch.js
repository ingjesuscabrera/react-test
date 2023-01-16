import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
}

export default App;
