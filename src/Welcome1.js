import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { LiquidContext } from './LiquidStore'
import Agenda from './Agenda'
import Legislation from './Legislation'
import Account from './Account'
import WhatItIs from './WhatItIs'

function Welcome1() {
  const { addMessage } = useContext(LiquidContext)

  function handleWhatItIs() {
    addMessage({
      scroll: true,
      disappearIf: "WHATITIS",
      makeDisappear: "WHATITIS",
      jsx: <WhatItIs />
    })
  }

  function handleAgenda() {
    addMessage({
      scroll: true,
      disappearIf: "AGENDA",
      makeDisappear: "AGENDA",
      variableHeightMsg: "AGENDA",
      jsx: <Agenda />
    })
  }

  function handleLegislation() {
    addMessage({
      scroll: true,
      disappearIf: "LEGISLATION",
      makeDisappear: "LEGISLATION",
      variableHeightMsg: "LEGISLATION",
      jsx: <Legislation />
    })
  }

  function handleAccount() {
    addMessage({
      scroll: true,
      disappearIf: "ACCOUNT",
      makeDisappear: "ACCOUNT",
      jsx: <Account />
    })
  }

  return (
    <Container>
      <div><JustinSpacer /><Link onClick={() => handleWhatItIs()}>{"Liquify "}</Link>is the fastest way to turn great ideas into law.</div>
      <ShortBreak>&nbsp;</ShortBreak>
      <div>
        {" View the "}
        <Link onClick={() => handleAgenda()}>{"liquid agenda "}</Link>
        {"to see top priorities, or vote on legislation that has already been "}
        <Link onClick={() => handleLegislation()}>{"introduced in congress."}</Link>
      </div>
      <ShortBreak>&nbsp;</ShortBreak>
      <div>
        {"Lastly, check who is currently "}
        <Link onClick={() => handleAccount()}>{"voting on your behalf"}</Link>
        {" in My Account."}
      </div>
    </Container>
  )
}

export default Welcome1

/***************************** Styled Components *****************************/

const Container = styled.div`

`

const JustinSpacer = styled.span`
  margin-left: 20px;
`

const ShortBreak = styled.div`
  line-height: .5em;
`

const NoWrap = styled.span`
  white-space: nowrap;
`

const Link = styled.span`
  cursor: pointer;
  color: ${props => props.theme.color4};
`
