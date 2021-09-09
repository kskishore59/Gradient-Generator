// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.value});
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
`

export const MainPara = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
`
export const ColorPickContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  padding: 20px;
`

export const InputEl = styled.input`
        background-color: {props => props.color}
        border: 0px none;
        height: 30px;
        width: 80px;
        margin: 15px;
        outline: none
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  border: 0px none;
  border-radius: 5px;
  color: #1e293b;
  font-weight: bold;
  font-family: 'Roboto';
  padding: 15px;
  cursor: pointer;
`

export const UnorderedList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const InputItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`
