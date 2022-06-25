import { Container, Content } from "./styles.js";
import pi from '../../assets/imgs/pi.jpg'
import {AiFillGithub, AiOutlineLinkedin} from 'react-icons/ai'
import { useHistory } from "react-router-dom";

const Aside = () => {
    const history = useHistory()
    
    const handleRedirect = (page) =>{
        return history.push(`${page}`)
    }

    return(
        <Container>
                <Content>
                    <header>
                        <img alt="Logo" src={pi} onClick={() => handleRedirect("/")}/>
                        <div>
                            <h1>Luiz Felipe de Faria</h1>
                            <p>Desenvolvedor web</p>
                        </div>
                    </header>
                    <section>
                        <div>
                            <h4 onClick={() => handleRedirect('/profile')}>Sobre mim</h4>
                            <h4 onClick={() => handleRedirect('/projects')}>Projetos</h4>
                            <h4 onClick={() => handleRedirect('/contact')}>Contato</h4>
                            <h4 onClick={() => handleRedirect('/skills')}>Skills</h4>
                        </div>
                        <div className="icons">
                            <a href="https://github.com/pifaria" target="_blank" rel="noreferrer">
                                <AiFillGithub size={30}/>
                            </a>
                            <a href="https://www.linkedin.com/in/luiz-felipe-faria-machado/" target="_blank" rel="noreferrer">
                                <AiOutlineLinkedin size={30}/>
                            </a>
                        </div>
                    </section>
                </Content>
        </Container>
    )
}

export default Aside

