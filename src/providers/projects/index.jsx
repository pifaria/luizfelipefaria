import { createContext, useContext, useState } from "react";

const ProjectsContext = createContext()

export const ProjectsProvider = ({children}) => {
    const [projects, setProjects] = useState(false)
    const [selectedProject, setSelectedProject] = useState()

    const openProject = (data) => {
        setSelectedProject(data)
        setProjects(true)
    }
    
    const closeProject = () => {
        setProjects(false)
    }

    return (
        <ProjectsContext.Provider value={{openProject, closeProject, projects, selectedProject}}>
            {children}
        </ProjectsContext.Provider>
    )
}

export const useProjects = () => useContext(ProjectsContext)