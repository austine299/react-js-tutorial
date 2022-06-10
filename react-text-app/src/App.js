import React from "react"
import Header from "./Header"
import Body from "./Body"
import "./App.css"


function App() {

  const [user, setUser] = React.useState("Ugochukwu")

  return (
    <div className="counter">
      
      <Header user = {user}/>
      <Body user = {user} />

    </div>
  );
}

export default App;
