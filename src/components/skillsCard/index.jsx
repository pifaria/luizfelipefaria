import { Container, Content } from "./styles";

const SkillsCard = ({title, date, children}) => {
    return(
        <Container>
            <Content>
                <h2>{title}</h2>
                <div>
                    <h3>Kenzie Academy Brasil</h3>
                    <p>{date}</p>
                </div>
                <ul>
                   {children}
                </ul>
            </Content>
        </Container>
    )
}

export default SkillsCard