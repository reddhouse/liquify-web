import React, { useRef, useContext } from 'react'
import styled, { css } from 'styled-components'
import Textarea from 'react-textarea-autosize';
import { Send } from 'styled-icons/material/Send.cjs'
import { Today } from 'styled-icons/material/Today.cjs'
import { LiquidContext } from './LiquidStore'

function Footer() {
  const inputRef = useRef()
  const { addMessage } = useContext(LiquidContext)

  function handleSubmit(e) {
    e.preventDefault()

    // Show the user what they just typed
    addMessage({
      scroll: true,
      fromUser: true,
      jsx: <div>{inputRef.current.value}</div>,
    })

    // Clear the input field
    inputRef.current.value = ""

    // Respond to the user with this placeholder message until more backend
    // stuff is added.
    setTimeout(() => {
      addMessage({
        scroll: true,
        fromJustin: true,
        jsx:  <div>
                <div><JustinSpacer />Sorry, search didn't make the alpha release.</div>
                <ShortBreak>&nbsp;</ShortBreak>
                <div>This future feature will provide a search mechanism, and also a way to chat with Liquify support.</div>
                <ShortBreak>&nbsp;</ShortBreak>
                <div>In the mean time, feel free to email your questions or comments to reddhouse@pm.me</div>
              </div>
      })
    }, 1000)
  }

  return (
    <Center>
      <LeftOpenSpaceMirror />

      {/* See notes in Menu.js regarding why mirroring is necesary */}
      {/* Currently, the longest menu items is Legislation in Progress*/}
      <MenuMirrorContainer>
        <MenuMirrorButton>
          {<StyledToday size="20"/>}{" "}{"Legislation in Progress"}
        </MenuMirrorButton>
      </MenuMirrorContainer>

      <CenterOpenSpaceMirror />

      <ChatMirror>
        <StyledTextArea inputRef={ref => inputRef.current = ref} placeholder="Search, or Ask a Question" />
        <SendButton onClick={handleSubmit}><Send size="30"/></SendButton>
      </ChatMirror>
      <RightOpenSpaceMirror />
    </Center>
  )
}

export default Footer

/***************************** Styled Components *****************************/
const Center = styled.div`
  flex: 1 1 auto;
  display: flex;
  max-height: 75vh;
  ${'' /* background-color: ${props => props.theme.color8}; */}
  ${props => props.theme.media.phone`max-height: 85vh;`}
`

const LeftOpenSpaceMirror = styled.div`
  flex: 1 1 auto;
`

const MenuMirrorContainer = styled.div`
  ${props => props.theme.media.phone`display: none;`}
  flex: 1 99 auto;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 290px;
`

const MenuMirrorButton = styled.div`
  flex: 0 1 auto;
  margin: 1vh;
  padding: 8px;
  width: 100%;
  max-width: 250px;
  color: transparent;
  background-color: transparent;
  box-shadow: 0 1px 3px transparent, 0 1px 2px transparent;
  border: 1px solid transparent;
  border-radius: 10px;
`

const CenterOpenSpaceMirror = styled.div`
  flex: 1 2 auto;
  background-color: transparent;
  max-width: 10px;
`

const StyledToday = styled(Today)`
  display:inline;
`

const ChatMirror = styled.div`
  flex: 1 1 400px;
  max-width: 650px;
  display: flex;
  ${props => props.theme.media.phone`
    align-items: center;
    padding: 0;
  `}
`

const StyledTextArea = styled(Textarea)`
  flex: 99 0 auto;
  resize: none;
  border: 0;
  border-radius: 3px;
  margin: 10px 10px 10px 10px;
  ${props => props.theme.media.phone`margin: 10px 10px 10px 10px;`}
  padding: 4px;
  font-family: inherit;
  font-size: 1em;
`

const SendButton = styled.div`
  color: ${props => props.theme.color1}
  margin: 7px 10px 7px 0px;
  ${props => props.theme.media.phone`margin: 0px 10px 0px 0px;`}
`

const RightOpenSpaceMirror = styled.div`
  flex: 1 1 auto;
`

const JustinSpacer = styled.span`
  margin-left: 20px;
`

const ShortBreak = styled.div`
  line-height: .5em;
`
