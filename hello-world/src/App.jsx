import './App.css'

function Welcome() {
  return (
    <div>Welcome, William!</div>
  )
}


function Button() {
  return (
    <button>Click Me</button>
  )
}


function App() {

  return (
    <>
      <div>
        <h1>React Simplified</h1>
        <Welcome />
        <Button />
      </div>
    </>
  )
}

export default App
