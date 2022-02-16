// TODO: scrollHelper does not handle cases where messages are made to disappear
// (a feature of messages with makeDisappear and disappearIf properties).
// Consider tagging messages with an additional property in the LiquidStore to signify
// they are "repeat renders."

export function scrollHelper(ref, lastMsg) {
  let { offsetHeight, scrollHeight } = ref.current
  let prevDivHeight = ref.current.lastScrollHeight || offsetHeight
  let contentHeight = scrollHeight - prevDivHeight

  // Check if the last message explicitly declines a scroll action
  if (!lastMsg.scroll) {
    ref.current.lastScrollHeight = scrollHeight
    return
  }

  // If we have not overflowed yet, render from top (i.e. do nothing)
  if (prevDivHeight <= offsetHeight - 10) {
    ref.current.lastScrollHeight = scrollHeight
    return
  }

  // Check if new content is too long to fit on screen.
  if (scrollHeight > prevDivHeight + offsetHeight) {

    // Scroll to a location that is 40 pixels above the start of the new content.
    ref.current.scrollTop = scrollHeight - (contentHeight + 40)
    ref.current.lastScrollHeight = scrollHeight
    return
  }

  // Default, scroll to the bottom
  ref.current.scrollTop = scrollHeight
  ref.current.lastScrollHeight = scrollHeight
}
