import styled from 'styled-components'
import {Button} from './styled/Button';
const RollDice = ({currentDice, roll, setTotalScore, setSelectedValue, setShowRules, showRules}) => {

    const resetScore = ()=>{
        setTotalScore(0)
        setSelectedValue(undefined)
    }

    const showHideRules = ()=>{
        setShowRules(prev=>!prev)
    }

    return (
        <DiceContainer>
            <div className='dice' onClick={roll}>
                <img src={`./Images/dice_${currentDice}.png`} alt="Dice" />
            <p>Click on dice to roll</p>
            </div>
            <div className='btn-container'>
                <Button isOutline={true} onClick={resetScore}>Reset Score</Button>
                <Button onClick={showHideRules}>{showRules?"Hide Rules":"Show Rules"}</Button>
            </div>
        </DiceContainer>
    )
}

export default RollDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
    p{
        font-size: 24px;
        font-weight: 500;
        text-align: center;
    }
    .dice{
        cursor: pointer;
    }

    .btn-container{
        margin-top: 36px;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
`
