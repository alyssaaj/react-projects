import Student from "./Student"

function App() {

  return (
    <>
      <Student name="Ron" age={18} isStudent={false}></Student>
      <Student name="May" age={17} isStudent={true}/>
      <Student name="Harris" age={16} isStudent={true}/>
      <Student name="Rina"/>
    </>
  )
}

export default App
