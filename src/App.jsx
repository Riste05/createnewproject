import React , { useState } from 'react' ;
import { SideBar }  from "./components/SideBar.jsx";
import { NewProject } from './components/NewProject.jsx';
import { NoProjectSelected } from './components/NoProjectSelected.jsx';
import { SelectedProject } from './components/SelectedProject.jsx';

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined ,
    projects: [],
    tasks: []
  })  

  function addTaskHandle(text) {
    setProjectsState(prevItem => {
      const taskID = Math.random()  ;
      const newTask =  {
        text: text ,
        projectID: prevItem.selectedProject ,
        id: taskID
      }

      return {
        ...prevItem ,
        tasks: [...prevItem.tasks , newTask]
      }

    })
  }

  function deleteTaskHandle(id) {
     setProjectsState(prevState => {
      return {
        ...prevState , 
        tasks: prevState.tasks.filter(tasks => tasks.id !== id) 
      }
    })
  }
  

  function handleStartAddProject() {
    setProjectsState(prevState => ({      
        ...prevState, 
        selectedProject: null,    
    }))
  }

  function addProjectHandle(projectData) {
    setProjectsState(prevState => {

      const newProject = {
        ...projectData , 
        id: Math.round(Math.random() * 100000)
      }

      return {
        ...prevState ,
        selectedProject: undefined ,
        projects: [...prevState.projects , newProject]
      }
    })
  }

  function cancelHandle() {
    setProjectsState(prevState => {
      return {
        ...prevState , 
        selectedProject: undefined
      }
    })
  }

  function selectProjecthandle(id) {
        setProjectsState(prevState => ({      
        ...prevState, 
        selectedProject: id,    
    }))
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject) ;


function deleteProjectHandle() {
   setProjectsState(prevState => {
      return {
        ...prevState , 
        selectedProject: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProject) 
      }
    })
}


  let content = <SelectedProject  project={selectedProject} deleteProjectHandle={deleteProjectHandle} addTaskHandle={addTaskHandle} deleteTaskHandle={deleteTaskHandle} tasks={projectsState.tasks} /> 
  if(projectsState.selectedProject === null) {
      content = <NewProject onAdd={addProjectHandle} cancelHandle={cancelHandle} />
  }else if(projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
     <SideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects} selectProjecthandle={selectProjecthandle} selectedProjectId={projectsState.selectedProject}/>
      {content}
    </main>
  );
}

export default App;
