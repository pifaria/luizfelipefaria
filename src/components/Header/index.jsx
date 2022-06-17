import { Container, Content } from "./styles";
import pi from '../../assets/imgs/pi.jpg'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useMenu } from "../../providers/menu";
import { useHistory } from "react-router-dom";

const Header = () => {
    const { openModal } = useMenu()

    const history = useHistory()

    const handleRedirect = () =>{
        return history.push('/')
    }

    return(
        <Container>
            <Content>
                <img alt="Logo" src={pi} onClick={handleRedirect}/>
                <HiOutlineMenuAlt3 size={40} onClick={openModal}/>
            </Content>
        </Container>
    )
}

export default Header