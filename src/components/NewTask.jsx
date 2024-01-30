import React, { useState } from 'react'

export const NewTask = ({ addTaskHandle }) => {

const [enteredTask, setEnteredTask] = useState('') ;

function changeHandle(event) {
  setEnteredTask(event.target.value)
}

function clickHandle(){
  if(enteredTask.trim() === '') return ;
  addTaskHandle(enteredTask)
  setEnteredTask('') ;
}

  return (
    <div className="flex items-center gap-4">
        <input 
        type="text" 
        className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
        onChange={changeHandle}
        value={enteredTask}
        />
        <button className="text-stone-700 hover:text-stone-950" onClick={clickHandle}>Add Task</button>
    </div>
  )
}
