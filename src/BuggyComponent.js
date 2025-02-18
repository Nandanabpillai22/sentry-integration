import React, { useState, useEffect } from 'react';
const BuggyComponent = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  useEffect(() => {
    // Runtime error: Trying to call an undefined function
    setTimeout(() => {
      nonExistentFunction();
    }, 2000);
  }, []);
  // Syntax Error: Missing closing bracket (fixed here but was intentional)
  const handleClick = () => {
    setCount(count + 1);
    // Logic Error: Infinite loop risk (this should be within useEffect)
    while (count < 5) {
      setCount(count + 1);
    }
  };
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div>
      <h1>Buggy React Component</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <p>Data: {data.title}</p> {/* Possible crash if data is null */}
    </div>
  );
};
export default BuggyComponent;









