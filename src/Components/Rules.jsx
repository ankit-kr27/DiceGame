import styled from 'styled-components'
export default function Rules(){
return (
    <RulesComponent>
        <h2>How to play dice game</h2>
        <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
            <li>if you get wrong guess then  2 point will be dedcuted </li>
        </ul>
    </RulesComponent>
)
}

const RulesComponent = styled.div`
    margin: 64px auto;
    max-width: 794px;
    background-color: #FBF1F1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ul{
        list-style: none;
        padding: 0;
    }
`

