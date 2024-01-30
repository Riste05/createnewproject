import React from 'react' ;
import { NewTask } from './NewTask';

export const Task = ({ tasks, addTaskHandle, deleteTaskHandle }) => {
  return (
    <section>
        <h2 className="text-2xl font-bold text-stone 700 mb-4">Tasks</h2>
        <NewTask addTaskHandle={addTaskHandle} />
        {tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
        {tasks.length > 0 && 
        <ul className="py-4 mt-8 ">
            {tasks.map(task => (
              <li key={task.id} className="flex justify-between my-4 rounded-md bg-stone-100 p-4 capitalize">
                <span>{task.text}</span>
                <button className="text-stone-700 hover:text-red-500" onClick={() => deleteTaskHandle(task.id)}>Clear</button>
                </li>
            ))}
          </ul>}
    </section>
  )
}
