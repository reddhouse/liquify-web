import React, { useEffect, useContext } from 'react'
import styled, { css } from 'styled-components'
// Webpack tree shaking was not working, or I would have imported as such...
// import { Today, LiveHelp as Help, FormatListNumbered as List } from 'styled-icons/material'
import { Menu } from 'styled-icons/boxicons-regular/Menu.cjs'
import { Today } from 'styled-icons/material/Today.cjs'
import { Person } from 'styled-icons/material/Person.cjs'
import { LiveHelp as Help } from 'styled-icons/material/LiveHelp.cjs'
import { FormatListNumbered as List } from 'styled-icons/material/FormatListNumbered.cjs'
import { UserCircle } from 'styled-icons/fa-solid/UserCircle.cjs'
import { Droplet } from 'styled-icons/icomoon/Droplet.cjs'
import { LiquidContext } from './LiquidStore'
import MenuItem from './MenuItem'
import WhatItIs from './WhatItIs'
import Agenda from './Agenda'
import Legislation from './Legislation'
import Account from './Account'
import Learn from './Learn'

function Header() {
  const { addMessage } = useContext(LiquidContext)

  function addMenuToMessages() {
    addMessage({
      scroll: true,
      clickable: true,
      partOfGroup: true,
      disappearIf: 'MENU_WHATITIS',
      makeDisappear: 'MENU_WHATITIS',
      jsx: <MenuItem
              title="What is Liquify?"
              component={<WhatItIs />}
              icon={<StyledDroplet size="18"/>}
              disappear="WHATITIS"
            />
    })
    addMessage({
      scroll: false,
      clickable: true,
      partOfGroup: true,
      disappearIf: 'MENU_AGENDA',
      makeDisappear: 'MENU_AGENDA',
      jsx: <MenuItem
              title="Liquid Agenda"
              component={<Agenda />}
              icon={<StyledList size="20"/>}
              disappear="AGENDA"
              altBackground4={true}
              variableHeightMsg={"AGENDA"}
            />
    })
    addMessage({
      scroll: false,
      clickable: true,
      partOfGroup: true,
      disappearIf: 'MENU_LEGISLATION',
      makeDisappear: 'MENU_LEGISLATION',
      jsx: <MenuItem
              title="Legislation in Progress"
              component={<Legislation />}
              icon={<StyledToday size="20"/>}
              disappear="LEGISLATION"
              altBackground3={true}
              variableHeightMsg={"LEGISLATION"}
            />
    })
    addMessage({
      scroll: true,
      clickable: true,
      partOfGroup: true,
      disappearIf: 'MENU_ACCOUNT',
      makeDisappear: 'MENU_ACCOUNT',
      jsx: <MenuItem
              title="My Account"
              component={<Account />}
              icon={<StyledPerson size="20"/>}
              disappear="ACCOUNT"
              altBackground1={true}
            />
    })
    addMessage({
      scroll: true,
      clickable: true,
      partOfGroup: true,
      disappearIf: 'MENU_LEARN',
      makeDisappear: 'MENU_LEARN',
      jsx: <MenuItem
              title="FAQs"
              component={<Learn />}
              icon={<StyledHelp size="20"/>}
              disappear="LEARN"
            />
    })
  }

  function addAccountToMessages() {
    addMessage({
      scroll: true,
      disappearIf: 'ACCOUNT',
      makeDisappear: 'ACCOUNT',
      altBackground1: true,
      jsx: <Account />
    })
  }

  return (
    <Container>
      <SubContainer>
        <MobileMenu onClick={() => addMenuToMessages()}><StyledMenu size="48"/></MobileMenu>
        <Title onClick={() => addMenuToMessages()}>liquify</Title>
        <MobileAccount onClick={() => addAccountToMessages()}><StyledUserCircle size="34"/></MobileAccount>
      </SubContainer>
    </Container>
  )
}

export default Header

/***************************** Styled Components *****************************/

const Container = styled.div`
  flex: 0 0 auto;
`

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: transparent;
`

const Title = styled.div`
  color: ${props => props.theme.color1};
  margin-left: 20px;
  ${props => props.theme.media.phone`display: none;`}
  font-size: 1.5em;
  font-variant: small-caps;
  font-weight: 600;
`

const MobileMenu = styled.div`
  display: none;
  ${props => props.theme.media.phone`display: inherit;`}
`

const MobileAccount = styled.div`
  display: none;
  ${props => props.theme.media.phone`display: inherit;`}
`

const StyledMenu = styled(Menu)`
  color: ${props => props.theme.color1}
`

const StyledUserCircle = styled(UserCircle)`
  color: ${props => props.theme.color1}
  margin-right: 6px;
`

const StyledList = styled(List)`
  display:inline;
`

const StyledToday = styled(Today)`
  display:inline;
`

const StyledHelp= styled(Help)`
  display:inline;
`

const StyledPerson = styled(Person)`
  display:inline;
`

const StyledDroplet = styled(Droplet)`
  display:inline;
`
