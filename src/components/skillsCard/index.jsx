import { Container, Content } from "./styles";

const SkillsCard = ({children}) => {
    return(
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default SkillsCard