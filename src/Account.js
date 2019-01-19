import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Person } from 'styled-icons/material/Person.cjs'
import { MapSigns } from 'styled-icons/fa-solid/MapSigns.cjs'
import { Bot } from 'styled-icons/boxicons-regular/Bot.cjs'

function Account() {
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [error3, setError3] = useState(false)

  function toggleError(numError) {
    switch (numError) {
      case '1':
        return setError1(!error1)
      case '2':
        return setError2(!error2)
      case '3':
        return setError3(!error3)
      default:
        return
    }
  }

  return (
    <Container>
      <ColorCap>
        <Title><StyledPerson size="20"/>{" "}My Account</Title>
        <SubTitle>Choose Your Delegate</SubTitle>
      </ColorCap>

      <Button>
        <div>Hello <ColorSpan>new user!</ColorSpan> Until you are registered, your vote is currently being delegated to <ColorSpan>Matt K.</ColorSpan></div>
        <FlexRow onClick={() => toggleError('1')}>
          <div><Link>Settings</Link></div>
          <div><Link>Voting History</Link></div>
        </FlexRow>
        {
          error1 && <ErrorMsg onClick={() => toggleError('1')}>Sorry, this is only an alpha release of Liquify. A working version of this feature will be available soon. <LinkShrink>{"[-]"}</LinkShrink></ErrorMsg>
        }
      </Button>

      <Button>
        <div onClick={() => toggleError('2')}><StyledBot size="30" /><CenteredText><span>&nbsp;&nbsp;</span>My Liquid Representative</CenteredText></div>
        {
          error2 && <ErrorMsg onClick={() => toggleError('2')}>Yup, that's a robot. Makes you think, doesn't it? Stay tuned. <LinkShrink>{"[-]"}</LinkShrink></ErrorMsg>
        }
      </Button>

      <Button>
        <div onClick={() => toggleError('3')}><StyledMap size="30" /><CenteredText><span>&nbsp;&nbsp;</span>My District</CenteredText></div>

        {
          error3 && <ErrorMsg onClick={() => toggleError('3')}>Coming soon. <LinkShrink>{"[-]"}</LinkShrink></ErrorMsg>
        }
      </Button>
    </Container>
  )
}

export default Account

/***************************** Styled Components *****************************/

const Container = styled.div`

`

const ColorCap = styled.div`
  margin: -10px -10px 12px -10px;
  padding: 10px 10px 6px 10px;
  border-radius: 10px 10px 0px 0px;
  color: ${props => props.theme.color2};
  background-color: ${props => props.theme.color7};
`

const Title = styled.div`
  margin: 2px 0px 2px 0px;
  font-weight: 600;
`

const SubTitle = styled.div`
  margin: 4px 0px 4px 0px;
  font-size: 0.9em;
`

const StyledPerson = styled(Person)`
  display:inline;
`

const StyledMap = styled(MapSigns)`
  vertical-align: middle;
  display:inline;
`

const StyledBot = styled(Bot)`
  vertical-align: middle;
  display:inline;
`

const Button = styled.div`
  margin: 4px;
  padding: 8px;
  color: ${props => props.theme.color8};
  background-color: ${props => props.theme.color2};
  box-shadow: 0 1px 3px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.48);
  ${'' /* border: 1px solid ${props => props.theme.color7}; */}
  border-radius: 10px;
`

const ColorSpan = styled.span`
  color: ${props => props.theme.color7};
  font-weight: 600;
`

const FlexRow = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`

const CenteredText = styled.span`
  vertical-align: middle;
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
