import { useState, useContext } from 'react'
import styled from 'styled-components'
import { LiquidContext } from '../lib/LiquidStore'
import Agenda from './Agenda'
import VoteRocker from './VoteRocker'

function BillDetails({ bill, idx }) {
  const { addMessage } = useContext(LiquidContext)
  const [votes, setVotes] = useState(bill.votes)

  // TODO: Make "adjustVote" function to pass down to VoteRocker to visibly change
  // the number of votes an bill displays when the rocker is toggled.

  function handleAgenda() {
    addMessage({
      scroll: true,
      disappearIf: "AGENDA",
      makeDisappear: "AGENDA",
      variableHeightMsg: "AGENDA",
      jsx: <Agenda />
    })
  }

  return (
    <Container>
      <FlexColorTab></FlexColorTab>
      <FlexContent>
        <Title>{bill.editedTitle}</Title>
        <ShortBreak>&nbsp;</ShortBreak>
        <div>{bill.summary}<ExternalLink href={bill.congressDotGov} target="_blank" rel="noopener noreferrer"> read more...</ExternalLink></div>
        <hr />
        <div>This bill corresponds to the following <Link onClick={() => handleAgenda()}>{"liquid agenda "}</Link> item(s):</div>
        <ShortBreak>&nbsp;</ShortBreak>
        <Indented>None! The sponsor of this bill is attempting to solve a problem that a majority of Americans have ranked NOT important.</Indented>

        {/*
          TODO: Once connected, consider listing the number of priorities that preceed
          the top corresponding initiative. For instance, if the bill corresponds to
          initiatives 25, 69, and 3050, then list all of those, but point out that there
          are 24 more pressing problems to solve first, etc.
        */}

        <hr />
        <ShortBreak>&nbsp;</ShortBreak>
        <div>{((votes / 5000) * 100).toPrecision(2)}{'%'} percent of registered voters in district 3 are instructing your representative to vote YES on this bill.</div>
        <ShortBreak>&nbsp;</ShortBreak>
        <FlexFooter>

          <Stats>
            <MetricBold>{bill.officialCode}</MetricBold>
            <Metric>Introduced on:</Metric>
            <Metric>{bill.introducedOn}</Metric>
          </Stats>

          <Support>
            <div>Make Law?</div>
            <VoteRocker />
          </Support>

        </FlexFooter>
      </FlexContent>
    </Container>
  )
}

export default BillDetails

/***************************** Styled Components *****************************/

const Container = styled.div`
  display: flex;
`

const FlexColorTab = styled.div`
  min-height: 100%;
  min-width: 10px;
  margin: -10px 8px -10px -10px;
  background-color: ${props => props.theme.color5};
  border-radius: 10px 0px 0px 10px;
`

const FlexContent = styled.div`
  margin-left: 4px;
`

const Title = styled.div`
  font-weight: 600;
`

const Indented = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 0.8em;
  font-weight: bold;
`

const Link = styled.span`
  cursor: pointer;
  color: ${props => props.theme.color4};
`

const ExternalLink = styled.a`
  color: ${props => props.theme.color4};
  text-decoration: inherit;
`

const FlexFooter = styled.div`
  display: flex;
  justify-content: space-between;
`

const Stats = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Support = styled.div`
  flex: 0 1 auto;
  text-align: center;
`

const Metric = styled.div`
  flex: 0 1 auto;
`

const MetricBold = styled.div`
  flex: 0 1 auto;
  font-weight: 600;
`

const ShortBreak = styled.div`
  line-height: .5em;
`
