import Aside from "../../components/aside";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProjectsList from "../../components/projectsList";
import ProjectsModal from "../../components/projectsModal";
import Tags from "../../components/Tags";
import { useMenu } from "../../providers/menu";
import { useProjects } from "../../providers/projects";
import { Container, Content } from "./styles";

const Projects = () =>{
    const { modal } = useMenu()
    const { projects } = useProjects()

    return(
        <Container>
            <Content>
                {modal && <Menu/>}
                {projects && <ProjectsModal/>}
                <Header/>
                <Aside/>
                <main>
                    <span>{`<${Tags.h1}>`}</span>
                        <h1>Meus projetos</h1>
                    <span>{`<${Tags.h1}>`}</span>
                    <span>{`<${Tags.h3}>`}</span>
                        <h3>Front End</h3>
                    <span>{`<${Tags.h3}>`}</span>

                    <ProjectsList/> 
                </main>
            </Content>
        </Container>
    )
}

export default Projects