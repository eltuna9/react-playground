import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { CounterWithHooks } from './CounterWithHooks';
import { JokeTeller } from './jokes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h3>Counter without hooks</h3>
        <Counter />
        <h3>Counter with hooks</h3>
        <CounterWithHooks /> */}

        <h3>The joker here:</h3>
        <JokeTeller />
      </header>
    </div>
  );
}

export default App;
