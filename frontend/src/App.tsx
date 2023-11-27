import { Alignment, Navbar } from '@blueprintjs/core'
import './App.css'
import { Editor } from './components/Editor'

function App() {
  return (
    <>
      <Navbar fixedToTop={true} >
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Memorandum</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
      <Editor />
    </>
  )
}

export default App
