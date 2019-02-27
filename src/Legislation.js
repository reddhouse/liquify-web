import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import { uid } from 'react-uid'
import { Today } from 'styled-icons/material/Today.cjs'
import { ArrowLeft } from 'styled-icons/fa-solid/ArrowLeft.cjs'
import { ArrowRight } from 'styled-icons/fa-solid/ArrowRight.cjs'
import { LiquidContext } from './LiquidStore'
import BillDetails from './BillDetails'

function Legislation() {
  const [leftArrowVisible, setLeftArrowVisible] = useState(false)
  const [rightArrowVisible, setRightArrowVisible] = useState(true)
  const [pageIdx, setPageIdx] = useState(0)
  const { addMessage, lastMsg, changeFakeProp, bills } = useContext(LiquidContext)

  function handleRightNav() {
    setLeftArrowVisible(true)
    if (pageIdx + 6 >= bills.length) {
      setRightArrowVisible(false)
    }
    setPageIdx(pageIdx => pageIdx + 3)
    // See comments in LiquidStore.js regarding necessity of fakeProp
    if (lastMsg == "LEGISLATION")
      changeFakeProp()
  }

  function handleLeftNav() {
    setRightArrowVisible(true)
    if (pageIdx == 3) {
      setLeftArrowVisible(false)
    }
    setPageIdx(pageIdx => pageIdx - 3)
    // See comments in LiquidStore.js regarding necessity of fakeProp
    if (lastMsg == "LEGISLATION")
      changeFakeProp()
  }

  function showBillDetails(bill, idx) {
    addMessage({
      scroll: true,
      disappearIf: `BILL${bill.billId}`,
      makeDisappear: `BILL${bill.billId}`,
      jsx: <BillDetails bill={bill} idx={idx}/>
    })
  }

  return (
    <Container>
      <ColorCap>
        <Title><StyledToday size="20"/>{" "}Legislation in Progress</Title>
        <SubTitle>Bills Introduced by Lawmakers (newest first)</SubTitle>
      </ColorCap>
      {bills.slice(pageIdx, pageIdx + 3).map((bill, idx) => {
        return (
          <Bill key={uid(bill)} onClick={() => showBillDetails(bill, idx)}>
            <div>{bill.editedTitle}&nbsp;<LinkShrink>{"[+]"}</LinkShrink></div>
            <Hr />
            <TopicContainer>
              <Topic>{bill.topic}</Topic>
              <IntroducedOn>{bill.introducedOn}</IntroducedOn>
            </TopicContainer>
          </Bill>
        )
      })}
      <NavContainer>
        <Nav hidden={!leftArrowVisible} onClick={() => handleLeftNav()}><ArrowLeft size="24" /></Nav>
        <Filler />
        <Nav hidden={!rightArrowVisible} onClick={() => handleRightNav()}><ArrowRight size="24" /></Nav>
      </NavContainer>
    </Container>
  )
}

export default Legislation

/***************************** Styled Components *****************************/

const Container = styled.div`

`

const ColorCap = styled.div`
  margin: -10px -10px 12px -10px;
  padding: 10px 10px 6px 10px;
  border-radius: 10px 10px 0px 0px;
  color: ${props => props.theme.color1};
  background-color: ${props => props.theme.color5};
`

const Title = styled.div`
  margin: 2px 0px 2px 0px;
  font-weight: 600;
`

const SubTitle = styled.div`
  margin: 4px 0px 4px 0px;
  font-size: 0.9em;
`

const Bill = styled.div`
  cursor: pointer;
  margin: 4px;
  padding: 8px;
  color: ${props => props.theme.color7};
  background-color: ${props => props.theme.color1};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  ${'' /* border: 1px solid ${props => props.theme.color5}; */}
  border-radius: 10px;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Nav = styled.div`
  cursor: pointer;
  flex: 0 1 auto;
  margin: 15px 10px 0px 10px;

  ${props => props.hidden && css`
    display: none;
  `}
`

const Filler = styled.div`
  flex: 1 1 25%;
`

const Hr = styled.hr`
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;
`

const TopicContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Topic = styled.div`
  flex: 0 1 auto;
  font-variant: small-caps;
  font-weight: 600;
  line-height: .5em;
  color: black;
`

const IntroducedOn = styled.div`
  flex: 0 1 auto;
  padding-top: 2px;
  font-size: 0.8em;
  font-weight: 600;
  line-height: .5em;
  color: black;
`

const StyledToday = styled(Today)`
  display:inline;
`

const LinkShrink = styled.span`
  cursor: pointer;
  font-size: 0.85em;
  color: ${props => props.theme.color4};
`
