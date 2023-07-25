import './App.css'
import projects from "./projects/projects"

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <img src={projects[0].image} alt="" />
    </div>
  )
}

export default App
