import Header from "../../components/Header";
import Tags from "../../components/Tags";
import { Container, Content } from "./styles";
import SkillsCard from "../../components/skillsCard";
import Menu from "../../components/Menu";
import { useMenu } from "../../providers/menu";
import Aside from "../../components/aside";

const Skills = () => {
    const { modal } = useMenu()

    return(
        <Container>
            <Content>
                {modal && <Menu/>}
                <Header/>
                <Aside/>
                <main>
                    <span>{`<${Tags.h1}>`}</span>
                        <h1>Skills e experiências</h1>
                    <span>{`<${Tags.h1}>`}</span>
                    <span>{`<${Tags.p}>`}</span>
                        <p>
                            Sou especializado em desenvolvimento front-end, na criação de páginas rápidas, fáceis de usar, responsivas e construídas com boas práticas.
                        </p>
                        <p>
                            Estudando back-end para me tornar um desenvolvedor fullstack.
                        </p>
                        <p>
                            Visite meu Linkedin ou entre em contato comigo para mais detalhes.
                        </p>
                    <span>{`<${Tags.p}>`}</span>
                    <div>
                        <SkillsCard title="Front End" date="09/2021 - 05/2022">
                                <li>- React.js</li>
                                <li>- HTML</li>
                                <li>- CSS</li>
                                <li>- Javascript</li>
                                <li>- Typescript</li>
                        </SkillsCard>
                        <SkillsCard title="Fullstack" date="09/2021 - 11/2022">
                                <li>- SQL</li>
                                <li>- Python</li>
                                <li>- API REST</li>
                        </SkillsCard>
                    </div>
                </main>
            </Content>
        </Container>
    )
}

export default Skills