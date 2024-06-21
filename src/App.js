import Functiondata from './components/functiondata'
import Classdata from './components/classdata'
import Childrendata from './components/childrendata'
function App() {
  return (
    <>
      <h1>React Application</h1>
      <Functiondata name1="testdata" />
      <Classdata name="classtest is passed"></Classdata>
      <Childrendata>This is a children data is passed</Childrendata> 
    </>
  )
}

export default App
