import { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { uid } from 'react-uid'
import { LiveHelp as Help } from '@styled-icons/material'
import { FAQs } from '../lib/dummyData'

/*
  TODO:
  - Prompt user to ask questions in the search bar, and provide explanation of async answer from liquid center volunteers
  - Allow user to opt-in to future contact by email to, for instance, have their question answered by email
  - Direct users to homepage.org for more info about org and movement, etc.
  - Show "help '?' buttons" for pop-up modal on hard topics like liquid democracy
*/

function QACombo({ qaObj, expandAll }) {
  const [localExpand, setLocalExpand] = useState(expandAll)

  useEffect(() => {
    if (expandAll == false)
      setLocalExpand(false)
  }, [expandAll])

  const firstWord = qaObj.q.substr(0, qaObj.q.indexOf(" "))
  const theRest = qaObj.q.substr(qaObj.q.indexOf(" "))

  return (
    <Combo>
      <Question onClick={() => setLocalExpand(!localExpand)} expanded={localExpand || expandAll}>
        <BoldQ>{firstWord}</BoldQ><span>{theRest}</span>
      </Question>
      {
        qaObj.a.map((answer, idx) => {
          return (
            <div key={uid(answer)}>
              {
                localExpand || expandAll
                  ? <Answer><BoldA idx={idx}>A.</BoldA>{" "}{answer}</Answer>
                  : <div></div>
              }
            </div>
          )
        })
      }
    </Combo>
  )
}

function Learn() {
  const [expandAll, setExpandAll] = useState(false)

  return (
    <Container>
      <ColorCap>
        <Title><StyledHelp size="20" />{" "}Frequently Asked Questions</Title>
        <SubTitle>Tap each question to see answer, or <Link onClick={() => setExpandAll(!expandAll)}>{expandAll ? "collapse" : "expand"}&nbsp;{"all"}.</Link></SubTitle>
      </ColorCap>
      {
        FAQs.map((qaObj) => <QACombo key={uid(qaObj)} qaObj={qaObj} expandAll={expandAll} />)
      }
    </Container>
  )
}

export default Learn

/***************************** Styled Components *****************************/

const Container = styled.div`

`

const ColorCap = styled.div`
  margin: -10px -10px 12px -10px;
  padding: 10px 10px 6px 10px;
  border-radius: 10px 10px 0px 0px;
  color: ${props => props.theme.color2};
  background-color: ${props => props.theme.color11};
`

const Title = styled.div`
  margin: 2px 0px 2px 0px;
  font-weight: 600;
`

const SubTitle = styled.div`
  margin: 4px 0px 4px 0px;
  font-size: 0.9em;
`

const Link = styled.span`
  cursor: pointer;
  color: ${props => props.theme.color4};
`

const StyledHelp = styled(Help)`
  display:inline;
`

const Combo = styled.div`
  margin-bottom: 20px;
`

const Question = styled.div`
  ${props => props.expanded && css`
    font-weight: 600;
  `}
`

const Answer = styled.div`
  margin-bottom: 10px;
`

const BoldQ = styled.span`
  font-weight: 600;
`

const BoldA = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  ${props => !props.idx == 0 && css`
    display: none;
  `}
`
