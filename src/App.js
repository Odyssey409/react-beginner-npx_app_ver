import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const iRunOnlyOnce = () => {
    console.log("I run only once.");
  };

  useEffect(iRunOnlyOnce, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("I run only when keyword changes");
    }
  }, [keyword]);

  useEffect(() => {
    if (counter !== 0) {
      console.log("I run only when counter changes");
    }
  }, [counter]);

  useEffect(() => {
    console.log("I run only when keyword and counter changes");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder="Search here..."
        onChange={onChange}
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
