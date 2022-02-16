import styled from 'styled-components'
import { Droplet } from '@styled-icons/icomoon'

function WhatItIs() {
  return (
    <Container>
      <ColorCap>
        <Title><StyledDroplet size="18" />{" "}What is Liquify?</Title>
        <SubTitle>It's liquid democracy in action!</SubTitle>
      </ColorCap>

      {/* <SectionTitle>First, what is liquid democracy?</SectionTitle> */}
      <ShortBreak>&nbsp;</ShortBreak>
      <Indent>Liquid democracy improves our government by removing special interests from the lawmaking process.</Indent>


      <ShortBreak>&nbsp;</ShortBreak>
      <div>Instead of giving your elected representative free reign to make laws on your behalf, liquid democracy encourages citizens to vote on individual issues.</div>
      <ShortBreak>&nbsp;</ShortBreak>
      <div>If you're too busy, you can delegate your votes to someone you know or trust. All votes, delegated or direct, eventually make their way to your elected representative.</div>
      <ShortBreak>&nbsp;</ShortBreak>
      <div>Things get interesting when representatives in office become "liquid representatives", which means they have pledged to regularly tally liquid votes, and act in accordance with the majority of voters on every policy choice.</div>

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

const ColorCap = styled.div`
  margin: -10px -10px 12px -10px;
  padding: 10px 10px 6px 10px;
  border-radius: 10px 10px 0px 0px;
  color: ${props => props.theme.color1};
  background-color: ${props => props.theme.color10};
`

const Title = styled.div`
  margin: 2px 0px 2px 0px;
  font-weight: 600;
`

const SubTitle = styled.div`
  margin: 4px 0px 4px 0px;
  font-size: 0.9em;
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
  margin-bottom: 4px;
  font-weight: 600;
`
