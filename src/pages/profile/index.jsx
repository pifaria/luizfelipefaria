import Header from "../../components/Header"
import Tags from "../../components/Tags"
import { Container, Content } from "./styles"

const Profile = () => {
    return(
        <Container>
            <Content>
                <Header/>
                <main>
                    <span>{`<${Tags.h1}>`}</span>
                        <h1>Eu, eu mesmo e o Pi</h1>
                    <span>{`<${Tags.h1}>`}</span>
                    <span>{`<${Tags.article}>`}</span>
                        <article>
                            Meu nome é Luiz Felipe de Faria Machado, mas raramente sou chamado pelo nome, sou mais conhecido como Pi; 
                            o apelido não é por causa do filme As aventuras de Pi, apesar da coincidência. 
                        </article>
                        <article>
                            Entrei para a área de tecnologia quando conheci o curso de desenvolvedor fullstack da Kenzie Academy Brasil, 
                            e descobri que o quê eu queria para minha vida era ser um desenvolvedor web. 
                        </article>
                        <article>
                            Como desenvolvedor front-end, 
                            sou apaixonado pela criação de páginas dinâmicas, intuitivas, bonitas  e que melhorem a experiência do usuário.
                            Sou uma pessoa muito organizada e dedicada em cada projeto, matendo o código o mais limpo possível e 
                            utilizando de boas práticas. 
                        </article>
                        <article>
                            Sou grande fã de arte visual, desde pequeno gosto de desenhar e criar ilustrações. 
                            Atualmente é o meu principal hobby, e com isso comecei produzir estampas de camisetas para a loja stoned shop.
                        </article>
                    <span>{`<${Tags.article}>`}</span>
                </main>
            </Content>
        </Container>
    )
}

export default Profile