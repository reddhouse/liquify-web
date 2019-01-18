import React from 'react'
import styled, { css } from 'styled-components'
import { Droplet } from 'styled-icons/icomoon/Droplet.cjs'

function WhatItIs() {
  return (
    <Container>
      <Title><StyledDroplet size="18"/>{" "}What is Liquify?</Title>
      <SubTitle>Liquid Democracy in Action</SubTitle>

      {/* <SectionTitle>First, what is liquid democracy?</SectionTitle> */}
      <ShortBreak>&nbsp;</ShortBreak>
      <Indent>Liquid democracy fixes our government by removing special interests from the lawmaking process.</Indent>


      <ShortBreak>&nbsp;</ShortBreak>
      <div>Instead of electing a traditional representative every few years to make laws on your behalf, liquid democracy encourages citizens to vote on individual issues.</div>
      <ShortBreak>&nbsp;</ShortBreak>
      <div>If you are too busy, or disinterested in civic matters, you can delegate your votes to someone you know or trust. In turn, your delegate can delegate their own votes to another person, and all votes eventually <i>flow</i> down to your elected representative.</div>
      <ShortBreak>&nbsp;</ShortBreak>
      <div>Things get interesting when representatives in office become "liquid representatives", which means they have pledged to regularly tally liquid votes, and act in accordance with the majority of voters on EVERY policy choice.</div>

      <br />
      <SectionTitle>Liquify enhances liquid democracy.</SectionTitle>
      <ShortBreak>&nbsp;</ShortBreak>
      <div>Liquify is a secure messaging app with three primary objectives:</div>
      <ShortBreak>&nbsp;</ShortBreak>
      <div><BoldSpan>{"1. "}</BoldSpan>Verify voters so that liquid representatives can trust that no outside influence has skewed their constituents' priorities.</div>
      <ShortBreak>&nbsp;</ShortBreak>
      <div><BoldSpan>{"2. "}</BoldSpan>Maintain the definitive list of the most important issues that the American public wants to solve through legislative action.</div>
      <ShortBreak>&nbsp;</ShortBreak>
      <div><BoldSpan>{"3. "}</BoldSpan>Provide resources for everyday citizens that want to run for office as a liquid representative.</div>
    </Container>
  )
}

export default WhatItIs

/***************************** Styled Components *****************************/

const Container = styled.div`

`

const Title = styled.div`
  margin: 6px 0px 2px 0px;
  font-weight: 600;
`

const SubTitle = styled.div`
  margin: 4px 0px 10px 0px;
`

const StyledDroplet = styled(Droplet)`
  display:inline;
`

const SectionTitle = styled.div`
  font-weight: 600;
`

const ShortBreak = styled.div`
  line-height: .5em;
`

const BoldSpan = styled.span`
  font-weight: 600;
`

const Indent = styled.div`
  margin: 0% 5%;
  margin-bottom: 4px;
  text-align: center;
  color: ${props => props.theme.color10};
  font-weight: 600;
`
