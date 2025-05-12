import { useState, useEffect } from 'react'
import Input from './components/Input'
import Task from './components/Task'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  function setTasksStore(val) {
    setTasks(val)
    localStorage.setItem("tasks", val.toString())
  }
  useEffect(() => {
    let data = localStorage.getItem("tasks")
    if (data != null) {
      setTasks(data.split(","))
    }
  }, [])

  return (
    <>
      <h1 className='pt-sans-bold'>Taskcarian</h1>
      <Input classname="imput" value={{ tasks, setTasksStore }} />
      {tasks.map((e, i) => {
        return (
          <Task key={i} value={{ e, i, tasks, setTasksStore }} />
        )
      })}
    </>
  )
}

export default App
