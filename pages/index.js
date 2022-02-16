import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Chat from '../components/Chat'
import Footer from '../components/Footer'
import Menu from '../components/Menu'

const IndexPage = () => {
  const router = useRouter()
  // Send entryPath to Chat to handle initiatives shared by custom URL
  const entryPath = router.pathname

  // Create a "loading screen" for effect only at this point
  const [opacity, setOpacity] = useState('1')
  const [splashVisible, setSplashVisible] = useState(true)

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setOpacity('0')
    }, 1050) //1050
    let timer2 = setTimeout(() => {
      setSplashVisible(false)
      setOpacity('1')
      // Whatever URL you came from, let's send you "forward" to '/'
      history.pushState(null, '', '/')
    }, 1350) //1350

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <BackgroundImage>
      {
        splashVisible
          ? <Splash><SplashText opacity={opacity}>LIQUIFY</SplashText></Splash>
          : <Container opacity={opacity} >
            <Header />
            <Center>
              <LeftOpenSpace />
              <Menu />
              <CenterOpenSpace />
              <ChatContainer>
                <Chat entryPath={entryPath} />
              </ChatContainer>
              <RightOpenSpace />
            </Center>
            <Footer />
          </Container>
      }
    </BackgroundImage>
  )
}

export default IndexPage

/***************************** Styled Components *****************************/

const BackgroundImage = styled.div`
  position: relative;
  height: 100%;
  background-image: url("/samara-doole-380287-unsplash-tiny.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Splash = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SplashText = styled.div`
  opacity: ${props => props.opacity};
  transition: opacity 550ms ease-in-out;
  color: ${props => props.theme.color1};
  font-family: 'Montserrat', sans-serif;
  font-size: 3em;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  max-height: 100%;

  ${'' /* Create the effect of new messages fading onto screen.  */}
  opacity: ${props => props.opacity};
  transition: opacity 550ms ease-in-out;
`

const CenterOpenSpace = styled.div`
  flex: 1 2 auto;
  background-color: transparent;
  max-width: 10px;
`

const Center = styled.div`
  flex: 99 1 auto;
  max-height: 75vh;
  display: flex;
  ${props => props.theme.media.phone`max-height: 85vh;`}
`

const LeftOpenSpace = styled.div`
  flex: 1 1 auto;
  background-color: transparent;
`

const ChatContainer = styled.div`
  flex: 1 1 400px;
  max-width: 650px;
  background-color: ${props => props.theme.color1};
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%2329648a' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
`

const RightOpenSpace = styled.div`
  flex: 1 1 auto;
  background-color: transparent;
`


/************************** Tagged Template Literals **************************/

// Tagged Template Literals are a new-ish feature in ES6. They let you define custom
// string interpolation rules, which is the magic behind styled components.

// If you pass no interpolations, the first argument your function receives is an
// array with a string in it.

// These are equivalent:
// fn`some string here`
// fn(['some string here'])

// Once you pass interpolations, the array contains the passed string, split at
// the positions of the interpolations. The rest of the arguments will be the
// interpolations, in order.

// const aVar = 'good'

// These are equivalent:
// fn`this is a ${aVar} day`
// fn(['this is a ', ' day'], aVar)

// This is a bit cumbersome to work with, but it means that we can receive variables,
// functions, or mixins (css helper) in styled components and can flatten that into
// pure CSS.
