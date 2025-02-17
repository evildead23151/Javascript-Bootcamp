const element = <h1>Hello, React!</h1>;
function Greeting() {
  return <h1>Hello, Gitesh!</h1>;
}
class Greeting extends React.Component {
  render() {
    return <h1>Hello, Gitesh!</h1>;
  }
}
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
