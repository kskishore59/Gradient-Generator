import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  MainHeading,
  MainPara,
  ColorPickContainer,
  InputEl,
  GenerateButton,
  UnorderedList,
  InputItemContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeId: gradientDirectionsList[0].value,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeColorOne = event => {
    this.setState({colorOne: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwo: event.target.value})
  }

  onClickGenerate = () => {
    const {activeId, colorOne, colorTwo} = this.state

    this.setState({
      gradientValue: `to ${activeId}, ${colorOne}, ${colorTwo}`,
    })
  }

  clickGradientDirectionItem = direction => {
    this.setState({activeId: direction})
  }

  render() {
    const {activeId, colorOne, colorTwo, gradientValue} = this.state

    return (
      <MainContainer value={gradientValue} data-testid="gradientGenerator">
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <MainPara>Choose Direction</MainPara>

        <MainPara>Pick the Colors</MainPara>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              clickGradientDirectionItem={this.clickGradientDirectionItem}
              isActive={each.value === activeId}
              gradientDirectionDetails={each}
              key={each.directionId}
            />
          ))}
        </UnorderedList>

        <ColorPickContainer>
          <InputItemContainer>
            <MainPara>{colorOne}</MainPara>
            <InputEl
              type="color"
              value={colorOne}
              color={colorOne}
              onChange={this.onChangeColorOne}
            />
          </InputItemContainer>
          <InputItemContainer>
            <MainPara>{colorTwo}</MainPara>
            <InputEl
              type="color"
              value={colorTwo}
              color={colorTwo}
              onChange={this.onChangeColorTwo}
            />
          </InputItemContainer>
        </ColorPickContainer>
        <GenerateButton onClick={this.onClickGenerate}>Generate</GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
