import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = ()=> {setCount(count +1)}
  const decrement = ()=> {
     if (count > 0) {setCount(count -1)}
   }
   const reset = ()=> {setCount(0)}
  

  return (
   <>
      <h1>Counter App</h1>
      <div className="card">
         <div className="counting-row">
            <button className="decrement" onClick={decrement}> - </button>
            <button className="count"> {count} </button>
            <button className="increment" onClick={increment}> + </button>
         </div>
         <div className="reset-container">
            <button className="reset" onClick={reset}>Reset</button>
         </div>
      </div>
   </>
  );
}

export default App;
