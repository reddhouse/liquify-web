import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

function AppMessage(props) {
  const [opacity, setOpacity] = useState('0')

  useEffect(() => {
    setOpacity('1')
  }, [])

  return (
    <Container fromUser={props.fromUser}>
      <Img src="/jt.jpg" fromJustin={props.fromJustin} opacity={opacity} />
      <Message
        clickable={props.clickable}
        partOfGroup={props.partOfGroup}
        fromJustin={props.fromJustin}
        fromUser={props.fromUser}
        opacity={opacity}
      >
        {props.jsx}
      </Message>
    </Container>
  )
}

export default AppMessage

/***************************** Styled Components *****************************/
const Container = styled.div`
  position: relative;
  display: flex;
  ${props => props.fromUser && css`
    justify-content: flex-end;
  `}
`

const Img = styled.img`
  ${props => !props.fromJustin && css`
    display: none;
  `}
  position: absolute;
  z-index: 1;
  margin: 2px 0px 0px 6px;
  border-radius: 50%;

  opacity: ${props => props.opacity};
  transition: opacity 550ms ease-in-out;
`

const Message = styled.div`
  flex: 0 1 auto;
  margin: 10px;
  padding: 8px;
  display: inline-block;
  position: relative;
  color: ${props => props.theme.color8};
	background-color: ${props => props.theme.color2};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 10px;

  ${props => props.partOfGroup && css`
    margin-top: 3px;
    margin-bottom: 3px;
  `}

  ${props => props.fromJustin && css`
    margin-left: 20px;
  `}

  ${props => props.fromUser && css`
    position: relative;
    color: ${props => props.theme.color1};
    background-color: ${props => props.theme.color4};
    &:after{
    	content: '';
    	position: absolute;
    	width: 0;
    	height: 0;
      left: auto;
    	right: 0px;
    	bottom: -12px;
    	border: 10px solid;
    	border-color: ${props => props.theme.color4} ${props => props.theme.color4} transparent transparent;
    }
  `}

  ${props => props.clickable && css`
    padding: 0px;
    color: ${props => props.theme.color7};
    background-color: ${props => props.theme.color1};
    ${'' /* border: 1px solid ${props => props.theme.color4}; */}
  `}

  ${'' /* Create the effect of new messages fading onto screen.  */}
  opacity: ${props => props.opacity};
  transition: opacity 550ms ease-in-out;
`
