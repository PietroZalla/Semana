import React, { useState } from 'react';

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function restart() {
    setCounter(counter * 0);
  }

  return (
  <div>
    <Header>Counter: {counter}</Header>
   <button onClick={increment}>Add</button><button onClick={restart}>Restart</button>
   </div>
  );
}

export default App;
