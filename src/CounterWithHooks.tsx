import React, { useState } from 'react';

export function CounterWithHooks() {
  const [counterForNikky, setCounterForNikky] = useState(0);

  return (
    <div>
      <h1>The counter value is {counterForNikky}</h1>
      <button style={{ padding: '1rem' }} onClick={() => setCounterForNikky(counterForNikky + 1)}>
        +1
      </button>
    </div>
  );
}
