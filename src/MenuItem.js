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
  flex: 1 1 auto;
  cursor: pointer;
  padding: 8px;
`
