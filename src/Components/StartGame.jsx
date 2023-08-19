import styled from 'styled-components'
import { Button } from './styled/Button'

const StartGame = ({toggleGamePlay}) => {
  return (
    <Container>
      <div>
        <img src="./Images/dices.png" alt="" />
      </div>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggleGamePlay}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    display: flex;
    max-width: 1180px;
    margin: auto;
    height: 100vh;
    align-items: center;

    .content{
        /* SASS Way */
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        h1{
            font-size: 96px;    
            white-space: nowrap;
        }
    }
`

// const Button = styled.button`
//     padding: 10px 18px;
//     background-color: black;
//     color: white;
//     border: 1px solid transparent;
//     border-radius: 5px;
//     min-width: 220px;
//     font-size: 16px;
//     cursor: pointer;
//     transition: .3s ease-in-out;

//     &:hover{
//         background-color: white;
//         border: 1px solid black;
//         color: black;
//     }
// `
