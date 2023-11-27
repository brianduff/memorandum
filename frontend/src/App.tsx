import { Alignment, Button, ButtonGroup, Navbar } from '@blueprintjs/core'
import './App.css'
import { Editor } from './components/Editor'
import { css } from '@emotion/react'
import { NoMemos } from './NoMemos'

function App() {
  return (
    <>
      {/* <Navbar fixedToTop={true} >
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Memorandum</Navbar.Heading>
        </Navbar.Group>
      </Navbar> */}
      <NoMemos />
    </>
  )
}

export default App
