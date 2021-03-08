import * as React from 'react';

interface Joke {
  id: number;
  punchline: string;
  setup: string;
  type: string;
}

export function JokeTeller() {
  const [joke, setJoke] = React.useState<Joke | null>(null);

  const getTheJoke = async () => {
    const theJoke = await (await fetch('https://official-joke-api.appspot.com/random_joke')).json();
    setJoke(theJoke);
    console.log(theJoke);
  };

  return (
    <div>
      <h3>Hi, I am the joke teller. Click the button for funs</h3>
      <button style={{ padding: '1rem', color: 'red' }} onClick={() => getTheJoke()}>
        Tell me a joke buddy
      </button>
      {joke && (
        <>
          <h2>The joke is:</h2>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </>
      )}
    </div>
  );
}
