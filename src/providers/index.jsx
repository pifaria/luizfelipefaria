import { MenuProvider } from "./menu"
import { ProjectsProvider } from "./projects"

const Providers = ({children}) => {
    return(
        <MenuProvider>
            <ProjectsProvider>
                {children}
            </ProjectsProvider>
        </MenuProvider>
    )
}

export default Providers