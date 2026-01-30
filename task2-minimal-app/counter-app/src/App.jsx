import { useState } from 'react';
import './App.css';

function Counter() {
  //Используем useState для хранения значения
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
   <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '20px' }}>
    <h3>Count: {count}</h3>
    <div className='buttons'>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
   </div>
  );
}

function App() {
  return (
    <div className="centered-container">
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;