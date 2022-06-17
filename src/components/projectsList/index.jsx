import burguer from '../../assets/imgs/projects/burguer.png'
import click from '../../assets/imgs/projects/click.png'
import hub from '../../assets/imgs/projects/hub.png'
import rick from '../../assets/imgs/projects/rick.png'
import shop from '../../assets/imgs/projects/shop.png'

import { Container, Content } from './styles'

const projects = [
    {
        id: 1,
        name: "API - Rick and Morty", 
        img: `${rick}`,
        description: "Esse foi meu primeiro projeto utilizando React.js e o primeiro que eu posto também, uma aplicação feita na Kenzie Academy Brasil que consome uma API com dados dos personagens da série Rick and Morty.  Uma aplicação simples mas foi muito divertida de faze-la, e para quem gosta da série da para perder um tempinho nela."
    },
    {
        id: 2,
        name: "Click Finder", 
        img: `${click}`,
        description: "Projeto de encerramento da primeira fase do curso da Kenzie Academy, na qual, nos formamos como front end. Esta é uma aplicação com a ideia inicial de facilitar o serviço de fotografia com uma forma rápida  de encontrar o tipo de ensaio que você procura, com fotógrafos da sua região. O trabalho foi desenvolvido em grupo e organizado com a metodologia scrum. Graças a dedicação e habilidade de cada integrante do grupo, com apenas uma semana e meia foi concluída grande parte do projeto e com grande possibilidade de escalonar e implementar novas funções."
    },
    {
        id: 3,
        name: "Kenzie Burguer", 
        img: `${burguer}`,
        description: "Projeto de uma hamburgueria feito com React.js e com consumo de API. Barra de pesquisa feita de forma dinâmica, na qual, as sugestões aparecem a cada caractere digitado, melhorando assim, a experiência do usuário, tornando-a mais ágil. A página foi feita de forma responsiva com mobile first." 
    },
    {
        id: 4,
        name: "Kenzie Hub", 
        img: `${hub}`,
        description: "Projeto feito para a kenzie academy brasil, até o momento é o trabalho que tenho mais orgulho, pela complexidade da aplicação e o resultado final dela. Um hub de portfólios de programadores com consumo de uma API da kenzie!"
    },
    {
        id: 5,
        name: "Kenzie Shop", 
        img: `${shop}`,
        description: "Aplicação de um e-commerce utilizando React.js, um projeto muito especial devido ao fato das estampas das camisetas serem criações minha, e vendidas na stonedshop.com.br"
    },
]

const ProjectsList = () => {
    return(
        <Container>
                {projects.map((project) => (
                    <Content key={project.id}>
                        <h2>{project.name}</h2>
                        <img alt={project.name} src={project.img}/>
                        <article>{project.description}</article>
                    </Content>
                ))}
        </Container>
    )
}

export default ProjectsList