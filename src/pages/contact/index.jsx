import Form from '../../components/form'
import Header from '../../components/Header'
import Tags from '../../components/Tags'
import { Container, Content } from './styles'
import { useMenu } from '../../providers/menu'
import Menu from '../../components/Menu'
import Aside from '../../components/aside'

const Contact = () => {
    const { modal } = useMenu()

    return(
        <Container>
            <Content>
                {modal && <Menu/>}
                <Header/>
                <Aside/>
                <main>
                    <span>{`<${Tags.h1}>`}</span>
                        <h1>Contato</h1>
                    <span>{`<${Tags.h1}>`}</span>
                    <span>{`<${Tags.p}>`}</span>
                        <p> 
                            Estou interessado em oportunidades como freelancer ou CLT - 
                            para qualquer tipo de projeto front-end.
                        </p>
                        <p>
                            Se tiver aqui por sugestões ou dúvida, vamos trocar uma ideia. 
                            Entre em contato comigo pelo formulário abaixo.
                        </p>
                    <span>{`<${Tags.p}>`}</span>
                    <span>{`<${Tags.form}>`}</span>
                        <Form/>
                    <span>{`<${Tags.form}>`}</span>
                </main>
            </Content>
        </Container>
    )
}

export default Contact
