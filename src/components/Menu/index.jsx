import { Container, Content } from "./styles";
import pi from '../../assets/imgs/pi.jpg'
import {AiFillGithub, AiOutlineLinkedin} from 'react-icons/ai'
import { useMenu } from "../../providers/menu";
import { useHistory } from "react-router-dom";

const Menu = ({show = false}) => {
    const { closeModal } = useMenu()

    const history = useHistory()
    
    const handleRedirect = (page) =>{
        return history.push(`${page}`)
    }

    return(
        <Container show={show} >
                <Content>
                    <header>
                        <label onClick={closeModal}>X</label>
                        <img alt="Logo" src={pi}/>
                        <div>
                            <h1>Luiz Felipe de Faria</h1>
                            <p>Desenvolvedor web</p>
                        </div>
                    </header>
                    <main>
                        <div>
                            <h4 onClick={() => handleRedirect('/profile')}>Sobre mim</h4>
                            <h4 onClick={() => handleRedirect('/projects')}>Projetos</h4>
                            <h4 onClick={() => handleRedirect('/contact')}>Contato</h4>
                            <h4 onClick={() => handleRedirect('/skills')}>Skills</h4>
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