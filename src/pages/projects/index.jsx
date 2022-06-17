import Header from "../../components/Header";
import ProjectsList from "../../components/projectsList";
import Tags from "../../components/Tags";
import { Container, Content } from "./styles";

const Projects = () =>{
    return(
        <Container>
            <Content>
                <Header/>
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