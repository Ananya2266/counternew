import { useState } from "react";

function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <div>
        <div className="a">{count}</div>
        <button onClick={() => setcount(count + 1)}>-</button>
      </div>
    </>
  );
}

export default App;
