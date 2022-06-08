import React from "react"
// import Count from "./counter"


function App() {

const [count, setCount] = React.useState(0)

function Add(){
  setCount (prevCount => prevCount + 1)
}

function subtract(){
  setCount (prevCount => prevCount - 1)
}

  return (
    <div className="counter">
    <button className="counter--minus" onClick={subtract}>-</button>
    
    <div className="counter--count">
        <h1>{count}</h1>
    </div>
    <button className="counter--plus" onClick={Add}>+</button>

    </div>
  );
}

export default App;
