import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/todos')
    .then(async (response) => {
      const data = await response.json();
      setTodos(data.Todos)
    })
  },[todos])
  

  return (
    <div>
      hi mom!
      <CreateTodo/>
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
