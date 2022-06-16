import { Container, Content } from "./styles";
import pi from '../../assets/imgs/pi.jpg'
import {AiFillGithub, AiOutlineLinkedin} from 'react-icons/ai'

const Menu = () => {
    return(
        <Container>
            <Content>
                <header>
                    <label>X</label>
                    <img alt="Logo" src={pi}/>
                    <div>
                        <h1>Luiz Felipe de Faria</h1>
                        <p>Desenvolvedor web</p>
                    </div>
                </header>
                <main>
                    <div>
                        <h4>Sobre mim</h4>
                        <h4>Projetos</h4>
                        <h4>Contato</h4>
                        <h4>Skills</h4>
                    </div>
                    <div className="icons">
                        <AiFillGithub size={30}/>
                        <AiOutlineLinkedin size={30}/>
                    </div>
                </main>
            </Content>
        </Container>
    )
}

export default Menu