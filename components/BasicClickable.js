import { useContext } from 'react'
import styled from 'styled-components'
import { LiquidContext } from '../lib/LiquidStore'

function BasicClickable(props) {
  const { addMessage } = useContext(LiquidContext)

  return (
    <Container
      onClick={() => {
        addMessage({
          scroll: props.scroll,
          disappearIf: props.disappear,
          makeDisappear: props.disappear,
          fromJustin: props.fromJustin,
          jsx: props.nextMsg
        })
      }}
    >
      {props.content}
    </Container>
  )
}

export default BasicClickable

/***************************** Styled Components *****************************/

const Container = styled.div`
  cursor: pointer;
  padding: 8px;
`
