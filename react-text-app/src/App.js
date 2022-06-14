import React from "react"
import "./App.css"
import Box from "./box"
import boxes from "./Boxes"


function App(props) {

  const [squares, setSquares] = React.useState(boxes)


  const squaresElement  = squares.map(square =>(
    <Box key={square.id} on = {square.on}/>
  ))


  return (
    <main>
      
      {squaresElement}

    </main>
  );
}

export default App;
