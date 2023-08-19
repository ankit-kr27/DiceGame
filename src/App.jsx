import { useState } from "react"
import "./App.css"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setGameStarted] = useState(true);

  const toggleGamePlay = ()=>{
    setGameStarted(prev => !prev);
  }
  
  return (
    <>
      {isGameStarted ? <GamePlay/> : <StartGame toggleGamePlay={toggleGamePlay}/>}
    </>
  )
}

export default App
