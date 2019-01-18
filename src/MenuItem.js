import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { LiquidContext } from './LiquidStore'

function MenuItem(props) {
  const { addMessage } = useContext(LiquidContext)

  return (
    <Container onClick={() => {
      addMessage({
        // scroll: force scroll to bottom of chat message list
        scroll: true,

        // altBackgrounds: the component needs different colors than the default AppMessage.js styling
        altBackground1: props.altBackground1,
        altBackground2: props.altBackground2,
        altBackground3: props.altBackground3,
        altBackground4: props.altBackground4,

        // disappearIf: tag this message to self destruct if/when "makeDisappear" calls it out by name
        disappearIf: props.disappear,

        // makeDisappear: force previous messages with the same string in "disappearIf" to vanish
        makeDisappear: props.disappear,

        // variableHeightMsg: force a re-render for some messages that have lateral swipes, and hence, variable heights
        variableHeightMsg: props.variableHeightMsg,

        // jsx: the content and/or component(s)
        jsx: props.component
      })
    }}>
      {props.icon}{" "}{props.title}
    </Container>
  )
}

export default MenuItem

/***************************** Styled Components *****************************/

const Container = styled.div`
  padding: 8px;
`
