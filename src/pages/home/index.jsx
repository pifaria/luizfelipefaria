import Header from "../../components/Header";
import { Container, Content } from "./styles";
import Tags from "../../components/Tags";
import Button from '../../components/Button'
import Menu from '../../components/Menu'
import { useMenu } from "../../providers/menu";
import Aside from "../../components/aside";
import { useHistory } from "react-router-dom";

const Home = () => {
    const { modal } = useMenu()

    const history = useHistory()

    const handleRedirect = () => {
        return history.push("/contact")
    }

    return (
        <Container>
            <Content>
                {modal && <Menu/>}
                <Header/>
                <Aside/>
                <main>
                    <section>
                        <span>{`<${Tags.h1}>`}</span>
                            <h1>Hello World!</h1>
                        <span>{`<${Tags.h1}>`}</span>
                        <span>{`<${Tags.h2}>`}</span>
                            <h2>Sou o Luiz Felipe, desenvolvedor web </h2>
                        <span>{`<${Tags.h2}>`}</span>
                        <span>{`<${Tags.p}>`}</span>
                        <p>Front End developer | Especialidade em React.js</p>
                        <span>{`<${Tags.p}>`}</span>
                        <Button onClick={handleRedirect}>Fale comigo</Button>
                    </section>
                </main>
            </Content>
        </Container>
    )
}

export default Home