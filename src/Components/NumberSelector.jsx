import styled from 'styled-components'
const NumberSelector = ({ selectedValue, setSelectedValue, arr, error, setError }) => {
    const handleSelection = (value) => {
        setSelectedValue(value)
        setError("");
    }
    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='boxes'>
                {
                    arr.map((value, i) => {
                        return <Box
                            isSelected={selectedValue === arr[i]}
                            key={i}
                            onClick={() => handleSelection(arr[i])}
                        >
                            {value}
                        </Box>
                    })
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector

const NumberSelectorContainer = styled.div`
    position: relative;
    .boxes{
        display: flex;
        gap: 24px;
        margin-bottom: 30px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
        text-align: end;
    }
    .error{
        position: absolute;
        top: -37px;
        font-weight: 400;
        color: red;
        font-size: 18px;
        right: 0px;
    }
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    transition: 0.2s ease-in-out;
    background-color: ${(props) => (props.isSelected ? "black" : "white")}; 
    color: ${(props) => (!props.isSelected ? "black" : "white")}; 
    cursor: pointer;
`
