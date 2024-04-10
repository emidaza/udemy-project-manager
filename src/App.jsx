import { useState } from "react";
import CreateProject from './components/CreateProject';
import DefaultView from './components/DefaultView';
import EditProject from './components/EditProject';
import Sidebar from "./components/Sidebar";

function App() {
  const [projects, setProjects] = useState([]);
  const [isCreatingProject, setIsCreatingProject] = useState(false);
  const [projectIdxInEdition, setProjectIdxInEdition] = useState();
  const projectInEdition = projects[projectIdxInEdition];

  function handleAddProject(newProject) {
    setIsCreatingProject(false);
    setProjects(prevProjects => {
      const projectsCopy = prevProjects.map(project => ({ ...project }));
      projectsCopy.push(newProject);
      return projectsCopy;
    })
  }

  function handleCreateNewProject() {
    setIsCreatingProject(true);
    setProjectIdxInEdition(undefined);
  }

  function handleCancelNewProject() {
    setIsCreatingProject(false);
    setProjectIdxInEdition(undefined);
  }

  function handleEditProject(projectIdx) {
    setIsCreatingProject(false);
    setProjectIdxInEdition(projectIdx);
  }

  function handleDeleteProject() {
    setProjects(prevProjects => {
      const projectsCopy = prevProjects.map(project => ({ ...project }));
      projectsCopy.splice(projectIdxInEdition, 1);
      return projectsCopy;
    })
    setProjectIdxInEdition(undefined);
  }

  function handleAddTaskToProject(task) {
    setProjects(prevProjects => {
      const projectsCopy = prevProjects.map((project, i) => {
        if (i === projectIdxInEdition) {
          return { ...project, tasks: [...project.tasks, task] };
        }
        return { ...project }
      });

      return projectsCopy;
    })
  }

  function handleClearTask(taskIndex) {
    setProjects(prevProjects => {
      const projectsCopy = prevProjects.map((project, i) => {
        if (i === projectIdxInEdition) {
          return {
            ...project,
            tasks: [...project.tasks.slice(0, taskIndex), ...project.tasks.slice(taskIndex + 1)]
          };
        }
        return { ...project }
      });

      return projectsCopy;
    })
  }

  return (
    <div className="flex flex-row">
      <Sidebar onEditProject={handleEditProject} projects={projects} onCreateNewProject={handleCreateNewProject}></Sidebar>
      <main className="h-screen pl-10 w-4/5">
        {(!projectInEdition && !isCreatingProject) ?
          <DefaultView onNewProject={handleCreateNewProject} /> :
          projectInEdition ? <EditProject onAddTask={handleAddTaskToProject} project={projectInEdition} onDeleteProject={handleDeleteProject} onClearTask={handleClearTask} /> :
            <CreateProject onAddNewProject={handleAddProject} onCancel={handleCancelNewProject} />}
      </main>
    </div>
  );
}

export default App;
