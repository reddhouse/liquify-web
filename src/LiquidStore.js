import React, { useState } from 'react'
import { uid } from 'react-uid'
import { DummyInitiatives, DummyBills } from './DummyData'

export const LiquidContext = React.createContext()

function LiquidStore(props) {
  const [messageList, setMessageList] = useState([])

  function addMessage(newMsg) {
    // First, handle variable height messages when rendered last in list
    // See notes below, and in Chat.js for more details
    if (newMsg.variableHeightMsg)
      setLastMsg(newMsg.variableHeightMsg)
    else
      setLastMsg(null)

    // Add new message to existing list, return new array.
    setMessageList((messageList) => {
      if (newMsg.makeDisappear) {
        let prunedList = messageList.filter(oldMsg => oldMsg.disappearIf !== newMsg.makeDisappear)
        return [ ...prunedList,
          {
            id: uid(newMsg),
            ...newMsg
          }
        ]
      } else {
        return [ ...messageList,
          {
            id: uid(newMsg),
            ...newMsg
          }
        ]
      }
    })
  }

  // Use/set fake prop in variable height messages like Agenda.js to force
  // Chat.js to re-render.
  // This is a hack to fix div height running off screen when switching between
  // variable height message "pages", but ONLY when those messages are the last
  // message in the list.
  const [fakeProp, setFakeProp] = useState(0)
  const [lastMsg, setLastMsg] = useState(null)
  function changeFakeProp() {
    console.log("Forcing chat re-render with new fake prop")
    setFakeProp(fakeProp => fakeProp + 1)
  }

  // Use hardcoded dummy data until back-end is connected.
  const [initiatives, setInitiatives] = useState(() =>
    DummyInitiatives.sort((obj1, obj2) => obj2.votes - obj1.votes)
  )
  const [bills, setBills] = useState(DummyBills)


  return (
    <LiquidContext.Provider
      value={{
        messageList,
        addMessage,
        fakeProp,
        changeFakeProp,
        lastMsg,
        initiatives,
        bills
      }}
    >
      {props.children}
    </LiquidContext.Provider>
  )
}

export default LiquidStore
