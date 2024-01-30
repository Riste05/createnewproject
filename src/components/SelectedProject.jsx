import React from 'react' ;

import { Button } from './Button';
import { Task } from './Task';

export const SelectedProject = ({ project, deleteProjectHandle, addTaskHandle, deleteTaskHandle, tasks }) => {
    
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month:'short',
        day:'numeric'
    })

  return (
    <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                <Button onClick={deleteProjectHandle}>delete</Button>
            </div>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600 white-space-wrap">{project.description}</p>
        </header>
        <Task addTaskHandle={addTaskHandle} deleteTaskHandle={deleteTaskHandle} tasks={tasks} />
    </div>
  )
}
