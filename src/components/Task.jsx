import React from 'react'
import { useState } from 'react'

function Task(props) {
  const text = props.value.e
  const [Completed, setCompleted] = useState(false)

  function updateText() {
    const elm = document.getElementById("text" + props.value.i)
    let content = elm.innerHTML

    if (elm.children.length > 0) {
      let tsks = props.value.tasks
      let index = props.value.i
      tsks[index] = document.getElementById("inputtext" + props.value.i).value
      props.value.setTasksStore(tsks)
      elm.innerHTML = document.getElementById("inputtext" + props.value.i).value

    }
    else {
      elm.innerHTML = `<input id=${"inputtext" + props.value.i} type='text' value="${elm.innerHTML}"></input>`
    }


  }
  function deleteText() {
    let tsks = props.value.tasks
    let index = props.value.i
    let curTask = props.value.e
    console.log(curTask)
    let updated_tasks = tsks.filter((ts, id) => id !== index)
    console.log(updated_tasks)
    setCompleted(false)
    props.value.setTasksStore(updated_tasks)
  }
  return (
    <div className={Completed ? ("completed Task") : "Task"}>
      <div className="TaskSubContainer">
        <input type="checkbox" name="chkbox" id="" value={Completed} onChange={() => { setCompleted(!Completed) }} />
        <span className={Completed ? ("completed tsk") : "tsk"} id={"text" + props.value.i}>{text}</span>
      </div>
      <div className="hvr">
        <button onClick={() => { updateText() }}>update</button>
        <button onClick={() => { deleteText() }}>delete</button>
      </div>

    </div>

  )
}

export default Task