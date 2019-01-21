import React, { useState, useLayoutEffect, useRef } from 'react'
import styled, { css } from 'styled-components'

function RockerSwitch() {
  const [checked, setChecked] = useState(false)
  const [masked, setMasked] = useState(true)
  const [zIndex, setZIndex] = useState(99)
  const [zIndex2, setZIndex2] = useState(99)
  const firstUpdate = useRef(true)

  useLayoutEffect(() => {
    // Effects run on every render, but we need to keep RockerMask's z-index at
    // initial value until "masked" changes.
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    // zIndex2 used in Positioners, and zIndex used in main RockerMask
    setZIndex2(-1)
    let timer1 = setTimeout(() => {
      setZIndex(-1)
    }, 550)
    return () => clearTimeout(timer1)
  }, [masked])

  return (
    <Container>

      {/*
        Positioner1 is an exact copy of RockerMask, but made to be invisible.
        The problem was that RockerMask was larger than Rocker/RockerWrapper, so
        I needed a dummy placeholder to fill the actual (relative) space in the container.

        Update: As it happens, I needed a non-transparent (less opaque) version of the
        button text also, so this worked perfectly.
      */}

      <Positioner1 onClick={() => setMasked(false)}>
        <Positioner2 zIndex={zIndex2}>Delegated</Positioner2>
        <Positioner3 zIndex={zIndex2}>tap to vote</Positioner3>

        <RockerWrapper>
          <Rocker onClick={() => setChecked(!checked)}>
            <SwitchLeft checked={checked}>Yes</SwitchLeft>
            <SwitchRight checked={checked}>No</SwitchRight>
          </Rocker>
        </RockerWrapper>
        <RockerMask masked={masked} zIndex={zIndex}><MaskContent1>Delegated</MaskContent1><MaskContent2>tap to vote</MaskContent2></RockerMask>


      </Positioner1>
    </Container>
  )
}

export default RockerSwitch

/***************************** Styled Components *****************************/

// Inspired by @MarcusConnor
// https://codepen.io/marcusconnor/pen/QJNvMa

const Container = styled.div`
  cursor: pointer;
`

const Positioner1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 8px 8px 8px;
  border: 2px solid transparent;
  background-color: transparent;
`

const Positioner2 = styled.div`
  opacity: 1;
  font-size: 0.85em;
  font-weight: 600;
  color: ${props => props.theme.color1};
  z-index: ${props => props.zIndex};
`

const Positioner3 = styled.div`
  opacity: 1;
  font-size: 0.7em;
  font-weight: 600;
  color: ${props => props.theme.color1};
  z-index: ${props => props.zIndex};
`

const RockerWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  font-family: 'Arial' sans-serif;
  font-size: 100%;
  padding: 0;
`

const Rocker = styled.div`
  ${'' /* https://stackoverflow.com/questions/5106934/prevent-grey-overlay-on-touchstart-in-mobile-safari-webview */}
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  box-sizing: border-box;
  display: inline-block;
  position: relative;
  font-size: 0.75em;
  ${'' /* Change to large rocker */}
  ${'' /* font-size: 2em; */}
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
  height: 4em;
  width: 7em;
  border-bottom: 0.5em solid ${props => props.theme.color1};

  &::before {
    content: "";
    position: absolute;
    top: 0.5em;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #999;
    border: 0.5em solid ${props => props.theme.color1};
    border-bottom: 0;
  }
`

const Switch = styled.span`
  box-sizing: border-box;
  cursor: pointer;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &::before {
    content: "";
    position: absolute;
  }
`

const SwitchLeft = styled(Switch)`
  height: 2.4em;
  width: 2.75em;
  left: 0.85em;
  bottom: 0.4em;
  background-color: #ddd;
  color: #888;
  transform: rotate(15deg) skewX(15deg);

  &::before {
    height: 2.45em;
    width: 0.4em;
    left: -0.4em;
    bottom: -0.45em;
    background-color: #ccc;
    transform: skewY(-65deg);
    ${props => props.checked && css`
      background-color: transparent;
    `}
  }

  ${props => props.checked && css`
    height: 2.5em;
    width: 3em;
    bottom: 0px;
    left: 0.5em;
    background-color: #478547;
    color: #fff;
    transform: rotate(0deg) skewX(0deg);
  `}
`

const SwitchRight = styled(Switch)`
  height: 2.5em;
  width: 3em;
  bottom: 0;
  right: 0.5em;
  background-color: #bd5757;
  color: #fff;
  transform: rotate(0deg) skewX(0deg);

  &::before {
    height: 2.45em;
    width: 0.4em;
    bottom: -0.45em;
    right: -0.375em;
    background-color: transparent;
    transform: skewY(65deg);
    ${props => props.checked && css`
      background-color: #ccc;
    `}
  }

  ${props => props.checked && css`
    height: 2.4em;
    width: 2.75em;
    right: 0.8em;
    bottom: 0.4em;
    background-color: #ddd;
    color: #888;
    transform: rotate(-15deg) skewX(-15deg);
  `}
`

const RockerMask = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 8px 8px 8px;
  border: 2px solid ${props => props.theme.color1};
  background-color: ${props => props.theme.color11};
  opacity: 0.6;
  z-index: ${props => props.zIndex};

  ${props => !props.masked && css`
    opacity: 0;
    transition: opacity 550ms ease-in-out;
  `}
`

const MaskContent1 = styled.div`
  font-size: 0.85em;
  font-weight: 600;
  color: ${props => props.theme.color1};
`

const MaskContent2 = styled.div`
  font-size: 0.7em;
  font-weight: 600;
  color: ${props => props.theme.color1};
`
