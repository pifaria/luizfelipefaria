import Header from '../../components/Header'
import Tags from '../../components/Tags'
import { Container, Content } from './styles'

const Contact = () => {
    return(
        <Container>
            <Content>
                <Header/>
                <main>
                    <span>{`<${Tags.h1}>`}</span>
                        <h1>Contato</h1>
                    <span>{`<${Tags.h1}>`}</span>
                    <span>{`<${Tags.p}>`}</span>
                        <p> 
                            Estou interessado em oportunidades como freelancer ou CLT - 
                            para qualquer tipo de projeto front-end.
                            Se tiver aqui por sugestões ou dúvida, vamos trocar uma ideia. 
                            Entre em contato comigo pelo formulário abaixo.
                        </p>
                    <span>{`<${Tags.p}>`}</span>
                </main>
            </Content>
        </Container>
    )
}

export default Contact
