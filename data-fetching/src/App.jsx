// import { useState, useEffect } from "react";
import { useState } from "react";
import "./App.css";
import WindowTracker from "./components/WindowTracker";

function App() {
  // const [starWarsData, setStarWarsData] = useState(null);
  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   fetch(`https://swapi.dev/api/people/${count}`)
  //     .then((res) => res.json())
  //     .then((data) => setStarWarsData(data));
  // }, [count]);

  const [show, setShow] = useState(true);

  const toggleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {/* <div>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>
          Get Next Character
        </button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div> */}
      <main className="container">
        <button onClick={toggleClick}>Toggle WindowTracker</button>
        {show && <WindowTracker />}
      </main>
    </>
  );
}

export default App;
