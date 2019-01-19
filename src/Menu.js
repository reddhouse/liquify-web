import React from 'react'
import styled, { css } from 'styled-components'
import WhatItIs from './WhatItIs'
import Agenda from './Agenda'
import Legislation from './Legislation'
import Account from './Account'
import Learn from './Learn'
import MenuItem from './MenuItem'
import { Today } from 'styled-icons/material/Today.cjs'
import { Person } from 'styled-icons/material/Person.cjs'
import { LiveHelp as Help } from 'styled-icons/material/LiveHelp.cjs'
import { FormatListNumbered as List } from 'styled-icons/material/FormatListNumbered.cjs'
import { Droplet } from 'styled-icons/icomoon/Droplet.cjs'

function Menu() {
  // IMPORTANT! When adding/deleting a menu item, keep in mind that the search bar
  // floats in proportional location to the chat window. I am mirroring the width
  // of this (menu) component in the footer. Check Footer.js to add a new "LongestMenuItem"
  // if necessary.
  return (
    <Container>

      <MenuButton>
        <MenuItem
          title="What is Liquify?"
          component={<WhatItIs />}
          icon={<StyledDroplet size="18"/>}
          disappear="WHATITIS"
        />
      </MenuButton>

      <MenuButton>
        <MenuItem
          title="Liquid Agenda"
          component={<Agenda />}
          icon={<StyledList size="20"/>}
          disappear="AGENDA"
          variableHeightMsg={"AGENDA"}
        />
      </MenuButton>

      <MenuButton>
        <MenuItem
          title="Legislation in Progress"
          component={<Legislation />}
          icon={<StyledToday size="20"/>}
          disappear="LEGISLATION"
          variableHeightMsg={"LEGISLATION"}
        />
      </MenuButton>

      <MenuButton>
        <MenuItem
          title="My Account"
          component={<Account />}
          icon={<StyledPerson size="20"/>}
          disappear="ACCOUNT"
        />
      </MenuButton>

      <MenuButton>
        <MenuItem
          title="FAQs"
          component={<Learn />}
          icon={<StyledHelp size="20"/>}
          disappear="LEARN"
        />
      </MenuButton>

    </Container>
  )
}

export default Menu

/***************************** Styled Components *****************************/

const Container = styled.div`
  ${props => props.theme.media.phone`display: none;`}
  flex: 1 99 auto;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 290px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.color1};
  overflow-y: auto;
`

const MenuButton = styled.div`
  cursor: pointer;
  flex: 0 1 auto;
  margin: 1vh;
  width: 100%;
  max-width: 250px;
  color: ${props => props.theme.color7};
  background-color: ${props => props.theme.color1};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border: 1px solid ${props => props.theme.color4};
  border-radius: 10px;
`

const StyledList = styled(List)`
  display:inline;
`

const StyledToday = styled(Today)`
  display:inline;
`

const StyledHelp = styled(Help)`
  display:inline;
`

const StyledPerson = styled(Person)`
  display:inline;
`

const StyledDroplet = styled(Droplet)`
  display:inline;
`
