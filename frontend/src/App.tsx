import './App.css'
import { EditMemo } from './EditMemo'
// import { NoMemos } from './NoMemos'

function App() {
  return (
    <>
      {/* <Navbar fixedToTop={true} >
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Memorandum</Navbar.Heading>
        </Navbar.Group>
      </Navbar> */}
      <EditMemo />
    </>
  )
}

export default App
