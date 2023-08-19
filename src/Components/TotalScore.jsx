import styled from 'styled-components'

const TotalScore = ({score=0}) => {
  return (
    <ScoreComponent>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreComponent>
  )
}

export default TotalScore

const ScoreComponent = styled.div`
    max-width: 200px;
    text-align: center;
    h1{
        font-size: 100px;
        font-weight: 500;
        line-height: 100px;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`