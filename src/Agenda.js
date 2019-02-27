import React, { useState, useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
import { uid } from 'react-uid'
import { FormatListNumbered as List } from 'styled-icons/material/FormatListNumbered.cjs'
import { ArrowLeft } from 'styled-icons/fa-solid/ArrowLeft.cjs'
import { ArrowRight } from 'styled-icons/fa-solid/ArrowRight.cjs'
import { Plus } from 'styled-icons/fa-solid/Plus.cjs'
import { LiquidContext } from './LiquidStore'
import InitiativeDetails from './InitiativeDetails'

function Agenda() {
  const [leftArrowVisible, setLeftArrowVisible] = useState(false)
  const [rightArrowVisible, setRightArrowVisible] = useState(true)
  const [pageIdx, setPageIdx] = useState(0)
  const { addMessage, lastMsg, changeFakeProp, initiatives } = useContext(LiquidContext)

  function handleRightNav() {
    setLeftArrowVisible(true)
    if (pageIdx + 6 >= initiatives.length) {
      setRightArrowVisible(false)
    }
    setPageIdx(pageIdx => pageIdx + 3)
    // See comments in LiquidStore.js regarding necessity of fakeProp
    if (lastMsg == "AGENDA")
      changeFakeProp()
  }

  function handleLeftNav() {
    setRightArrowVisible(true)
    if (pageIdx == 3) {
      setLeftArrowVisible(false)
    }
    setPageIdx(pageIdx => pageIdx - 3)
    // See comments in LiquidStore.js regarding necessity of fakeProp
    if (lastMsg == "AGENDA")
      changeFakeProp()
  }

  function showInitiativeDetails(initiative, idx) {
    addMessage({
      scroll: true,
      disappearIf: `INITIATIVE${initiative.initiativeId}`,
      makeDisappear: `INITIATIVE${initiative.initiativeId}`,
      jsx: <InitiativeDetails initiative={initiative} idx={idx}/>
    })
  }

  return (
    <Container>
      <ColorCap>
        <Title><StyledList size="22" />{" "}Liquid Agenda</Title>
        <SubTitle>Initiatives Ranked by Priority (voter&nbsp;support)</SubTitle>
      </ColorCap>
      {initiatives.slice(pageIdx, pageIdx + 3).map((initiative, idx) => {
        return (
          <Initiative key={uid(initiative)} onClick={() => showInitiativeDetails(initiative, idx)}>
            <Rank>{pageIdx + idx + 1}</Rank>
            <span>{". "}{initiative.title}&nbsp;<LinkShrink>{"[+]"}</LinkShrink></span>
            <Hr />
            <Problem>{initiative.problem}</Problem>
          </Initiative>
        )
      })}
      <NavContainer>
        <AddNew><Plus size="24" /></AddNew>
        <Filler />
        <Nav hidden={!leftArrowVisible} onClick={() => handleLeftNav()}><ArrowLeft size="24" /></Nav>
        <Nav hidden={!rightArrowVisible} onClick={() => handleRightNav()}><ArrowRight size="24" /></Nav>
      </NavContainer>
    </Container>
  )
}

export default Agenda

/***************************** Styled Components *****************************/

const Container = styled.div`

`

const ColorCap = styled.div`
  margin: -10px -10px 12px -10px;
  padding: 10px 10px 6px 10px;
  border-radius: 10px 10px 0px 0px;
  color: ${props => props.theme.color1};
  background-color: ${props => props.theme.color4};
`

const Title = styled.div`
  margin: 2px 0px 2px 0px;
  font-weight: 600;
`

const SubTitle = styled.div`
  margin: 4px 0px 4px 0px;
  font-size: 0.9em;
`

const StyledList = styled(List)`
  display:inline;
`

const Rank = styled.span`
  font-weight: 600;
`

const Initiative = styled.div`
  cursor: pointer;
  margin: 4px;
  padding: 8px;
  color: ${props => props.theme.color7};
  background-color: ${props => props.theme.color1};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  ${'' /* border: 1px solid ${props => props.theme.color4}; */}
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

const AddNew = styled.div`
  cursor: pointer;
  flex: 0 1 auto;
  margin: 15px 0px 0px 0px;
  color: ${props => props.theme.color9};
`

const Filler = styled.div`
  flex: 1 1 25%;
`

const Hr = styled.hr`
  margin-block-start: 0.25em;
  margin-block-end: 0.25em;
`

const Problem = styled.div`
  font-variant: small-caps;
  font-weight: 600;
  line-height: .5em;
  color: black;
`

const LinkShrink = styled.span`
  cursor: pointer;
  font-size: 0.85em;
  color: ${props => props.theme.color4};
`
