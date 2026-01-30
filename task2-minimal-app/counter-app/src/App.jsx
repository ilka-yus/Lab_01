import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
   <div style={{ padding: '20px', border: '1px solid #ccc' }}>
    <h3>Counter: {count}</h3>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
   </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Lab 1.2: Minimal App</h1>
      <Counter />
    </div>
  );
}

export default App;