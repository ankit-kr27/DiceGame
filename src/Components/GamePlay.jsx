import { useState } from 'react'
import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from 'styled-components'
import Rules from './Rules'

const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);

  
  // const [currentDiceVal, setCurrentDiceval] = useState()

  const [selectedValue, setSelectedValue] = useState()
  const arr = [1, 2, 3, 4, 5, 6]

  const [totalScore, setTotalScore] = useState(0);

  const [error, setError] = useState("")

  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  }

  const roll = () => {
    console.log(selectedValue)
    if(!(selectedValue)){
      setError("You've not selected any number!")
      return;
    }
    const randomNumber = generateRandomNumber();
    setCurrentDice(randomNumber)
    
    if(randomNumber===selectedValue){
      setTotalScore(prev=>prev+randomNumber)
    }
    else{
      setTotalScore(prev=>prev-2);
    }
    setSelectedValue(undefined)
  }


  return (
    <Main>
      <div className="top-section">
        <TotalScore score={totalScore} />
        <NumberSelector selectedValue={selectedValue} setSelectedValue={setSelectedValue} arr={arr} error={error} setError={setError} />
      </div>
      <RollDice currentDice={currentDice} setCurrentDice={setCurrentDice} roll={roll} setTotalScore={setTotalScore} setSelectedValue={setSelectedValue} setShowRules={setShowRules} showRules={showRules}/>
      {showRules && <Rules />}
    </Main>
  )
}

export default GamePlay

const Main = styled.main`
    .top-section{
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1280px;
      margin: 64px auto 0px auto;
    }
`