import { useState } from 'react'
import styled from 'styled-components'
import VoteRocker from './VoteRocker'

function InitiativeDetails({ initiative, idx }) {
  const [votes, setVotes] = useState(initiative.votes)
  const [error, setError] = useState(false)

  return (
    <Container>
      <FlexColorTab></FlexColorTab>
      <FlexContent>
        <Title>{initiative.title}</Title>
        <hr />
        <div>{initiative.summary}<Link onClick={() => setError(!error)}> read more...</Link></div>
        {
          error && <ErrorMsg onClick={() => setError(!error)}>This initiative is for demonstration purposes only. Links to initiative summaries will eventually be stack-ranked by Liquify users.<LinkShrink>{"[-]"}</LinkShrink></ErrorMsg>
        }
        <br />
        <FlexFooter>

          <Stats>
            <Metric>Rank: {(idx + 1).toLocaleString('en')}</Metric>
            <Metric>{votes.toLocaleString('en')} verified voters</Metric>
          </Stats>

          <Support>
            <div>Support?</div>
            <VoteRocker />
          </Support>

        </FlexFooter>
      </FlexContent>
    </Container>
  )
}

export default InitiativeDetails

/***************************** Styled Components *****************************/

const Container = styled.div`
  display: flex;
`

const FlexColorTab = styled.div`
  min-height: 100%;
  min-width: 10px;
  margin: -10px 6px -10px -10px;
  background-color: ${props => props.theme.color4};
  border-radius: 10px 0px 0px 10px;
`

const FlexContent = styled.div`
  margin-left: 4px;
`

const Title = styled.div`
  font-weight: 600;
`

const Link = styled.span`
  cursor: pointer;
  color: ${props => props.theme.color4};
`

const LinkShrink = styled.span`
  cursor: pointer;
  font-size: 0.85em;
  color: ${props => props.theme.color4};
`

const ErrorMsg = styled.div`
  margin-top: 8px;
  color: ${props => props.theme.color10};
  font-size: 0.9em;
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
