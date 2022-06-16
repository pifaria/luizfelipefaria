import Header from "../../components/Header";
import Tags from "../../components/Tags";
import { Container, Content } from "./styles";
import SkillsCard from "../../components/skillsCard";

const Skills = () => {
    return(
        <Container>
            <Content>
                <Header/>
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
                        <SkillsCard>
                            <h2>Front End</h2>
                            <div>
                                <h3>Kenzie Academy Brasil</h3>
                                <p>09/2021 - 05/2022</p>
                            </div>
                            <ul>
                                <li>- React.js</li>
                                <li>- HTML</li>
                                <li>- CSS</li>
                                <li>- Javascript</li>
                                <li>- Typescript</li>
                            </ul>
                        </SkillsCard>
                        <SkillsCard>
                            <h2>Fullstack</h2>
                            <div>
                                <h3>Kenzie Academy Brasil</h3>
                                <p>09/2021 - 11/2022</p>
                            </div>
                            <ul>
                                <li>- SQL</li>
                                <li>- Python</li>
                                <li>- API REST</li>
                            </ul>
                        </SkillsCard>
                    </div>
                </main>
            </Content>
        </Container>
    )
}

export default Skills