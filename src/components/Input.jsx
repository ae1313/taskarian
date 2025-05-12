import React, { useState } from 'react'

function Input(props) {
    const [newTask, setNewTask] = useState("")
    function handleAdd() {
        if (newTask != "") {
            props.value.setTasksStore([...props.value.tasks, newTask])
            setNewTask("")
        }

    }
    return (
        <div className="input">
            <input className='inputInput' type="text" id='userInput' value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
            <input type="button" value="+" className='inputButton' onClick={handleAdd} />
        </div>
    )
}

export default Input