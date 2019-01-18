import React, { useState, useContext, useEffect, useLayoutEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { uid } from 'react-uid'
import { scrollHelper } from './helpers'
import { LiquidContext } from './LiquidStore'
import AppMessage from './AppMessage'
import BasicClickable from './BasicClickable'
import Welcome0 from './Welcome0'
import Welcome1 from './Welcome1'
import InitiativeDetails from './InitiativeDetails'

function Chat(props) {
  const { messageList, addMessage, fakeProp, initiatives } = useContext(LiquidContext)

  // Conditionally scroll to the bottom of our div as new messages are added.
  const containerRef = useRef()
  useLayoutEffect(() => {
    const lastMsg = messageList[messageList.length - 1] || { scroll: true }
    scrollHelper(containerRef, lastMsg)
  })

  // If user is navigating to the app from a shared link, render the initiative,
  // otherwise, run normal welcome sequence.
  useEffect(() => {
    const pathArray = props.entryPath.split('/')
    if (props.entryPath !== '/') {
      let foundAtIdx = initiatives.findIndex(init => init.initiativeId == pathArray[2])
      addMessage({
        scroll: false,
        altBackground4: true,
        jsx: <InitiativeDetails initiative={initiatives[foundAtIdx]} idx={foundAtIdx}/>
      })
      addMessage({
        scroll: false,
        fromJustin: true,
        jsx: <div><JustinSpacer />Hello! It looks like someone shared a link with you to the liquid agenda item above.</div>
      })
      addMessage({
        scroll: false,
        clickable: true,
        jsx: <BasicClickable
                scroll={true}
                fromJustin={true}
                disappear="WELCOME1"
                content="What does it all mean? Tap here for a quick intro."
                nextMsg={<Welcome1 />}
              />
      })
    } else {
      addMessage({
        scroll: false,
        fromJustin: true,
        jsx: <Welcome0 />
      })
      addMessage({
        scroll: false,
        fromJustin: true,
        jsx: <Welcome1 />
      })
    }
  }, [])

  return (
    <Container ref={containerRef}>
      {
        messageList.map((msg) => {
          return (
            <AppMessage
              key={uid(msg)}
              { ...msg }
            />
          )
        })
      }
      {/* Used for re-render hack. See details in LiquidStore */}
      <FakePropContainer fakeProp={fakeProp} />
    </Container>
  )
}

export default Chat

/***************************** Styled Components *****************************/

const Container = styled.div`
  width: 100%;
  max-height: 98%;
  margin: 1% 0 1% 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const JustinSpacer = styled.span`
  margin-left: 20px;
`

const ShortBreak = styled.div`
  line-height: .5em;
`

const FakePropContainer = styled.div`
  display: none;
`
