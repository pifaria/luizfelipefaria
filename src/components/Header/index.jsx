import { Container, Content } from "./styles";
import pi from '../../assets/imgs/pi.jpg'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Header = () => {
    return(
        <Container>
            <Content>
                <img alt="Logo" src={pi}/>
                <HiOutlineMenuAlt3 size={40}/>
            </Content>
        </Container>
    )
}

export default Header