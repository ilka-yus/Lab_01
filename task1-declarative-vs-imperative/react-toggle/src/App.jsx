import { useState } from 'react';
import './App.css';

function App() {
  // Task 2
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <div className="container">
      <h2>Declarative Approach (React)</h2>
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        {isHighlighted ? 'Remove Highlight' : 'Add Highlit'}
      </button>

      <p className={isHighlighted ? 'highlight' : ''}>
        This paragraph changes based on state, not direct DOM manipulation.
      </p>
    </div>
  );
}

export default App;