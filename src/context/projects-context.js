import React, {createContext} from 'react'

import {useProjects} from '../hooks'
import { useContext } from 'react';


export const ProjectsContext = createContext();

export const ProjectsProvider = ({children}) =>{
    const {projects, setProjects} = useProjects()

    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}


export const useProjectsValue = () => useContext(ProjectsContext)