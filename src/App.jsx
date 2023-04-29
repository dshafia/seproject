import { useState } from 'react'
import './App.css'
import 'spectre.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Taskone from './TaskOne/Taskone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Taskone />
    </>
  )
}

export default App
