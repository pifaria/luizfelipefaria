import { useProjects } from "../../providers/projects"
import Header from "../Header"
import { Box, Container, Content } from "./styles"
import { AiOutlineArrowLeft, AiOutlineGlobal } from 'react-icons/ai'

const ProjectsModal = () => {
    const { closeProject, selectedProject } = useProjects()
    const {name, img, description, href} = selectedProject

    return (
        <Container>
            <Box>
                <Header/>
                <AiOutlineArrowLeft size={35} onClick={() => closeProject()}/>
                <Content>
                    <h1>{name}</h1>
                    <div>
                        <img alt={name} src={img}/>
                        <article>{description}</article>
                    </div>
                    <a href={href} target="_blank" rel="noreferrer">
                        <AiOutlineGlobal size={25}/>
                        <p>abrir {name}</p>
                    </a>
                </Content>
            </Box>
        </Container>
    )
}

export default ProjectsModal