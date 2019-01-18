import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import VoteRocker from './VoteRocker'

function InitiativeDetails({ initiative, idx }) {
  const [votes, setVotes] = useState(initiative.votes)
  const [error, setError] = useState(false)

  return (
    <Container>
      <Title>{initiative.title}</Title>
      <hr />
      <div>{initiative.summary}<Link onClick={() => setError(!error)}> read more...</Link></div>
      {
        error && <ErrorMsg onClick={() => setError(!error)}>Sorry, this is only an alpha release of Liquify, and most of these initiatives are only placeholders.<LinkShrink>{"[-]"}</LinkShrink></ErrorMsg>
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
    </Container>
  )
}

export default InitiativeDetails

/***************************** Styled Components *****************************/

const Container = styled.div`

`

const Title = styled.div`
  font-weight: 600;
`

const Link = styled.span`
  color: ${props => props.theme.color4};
`

const LinkShrink = styled.span`
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
