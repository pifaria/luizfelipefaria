import agostinho from '../../assets/imgs/prints/agostinho.png'
import brabos from '../../assets/imgs/prints/brabos.png'
import einstein from '../../assets/imgs/prints/einstein.png'
import freira from '../../assets/imgs/prints/freira.png'
import gnomo from '../../assets/imgs/prints/gnomo.png'
import jordan from '../../assets/imgs/prints/jordan.png'
import lhama from '../../assets/imgs/prints/lhama.png'
import macaco from '../../assets/imgs/prints/macaco.jpg'
import macMiller from '../../assets/imgs/prints/macMiller.png'
import parada from '../../assets/imgs/prints/parada.png'
import timMaia from '../../assets/imgs/prints/timMaia.png'

import { Container, Content } from './styles'

const shirtsPrint = [
    {
        img: agostinho,
        href: "https://www.stoned.com.br/camiseta-masculina-vogue-"
    },
    {
        img: parada,
        href: "https://www.stoned.com.br/camiseta-masculina-parada-no-posto"
    },
    {
        img: einstein,
        href: "https://www.stoned.com.br/camiseta-masculina-acid-einstein"
    },
    {
        img: timMaia,
        href: "https://www.stoned.com.br/produto/camiseta-tim-maia.html"
    },
    {
        img: gnomo,
        href: "https://www.stoned.com.br/camiseta-masculina-gnome"
    },
    {
        img: jordan,
        href: "https://www.stoned.com.br/camiseta-masculina-stoned-jordan-"
    },
    {
        img: lhama,
        href: "https://www.stoned.com.br/camiseta-masculina-lhama"
    },
    {
        img: macaco,
        href: "https://www.stoned.com.br/camiseta-masculina-stoned-monkey"
    },
    {
        img: macMiller,
        href: "https://www.stoned.com.br/camiseta-masculina-mac-stoned-miller-"
    },
    {
        img: brabos,
        href: ""
    },
    {
        img: freira,
        href: ""
    },
]

const Catalogue = () =>{
    return (
        <Container>
            {shirtsPrint.map((print, index) => (
                <Content key={index}>
                    <img alt='estampa' src={print.img}/>
                    <a href={print.href} target="_blank" rel="noreferrer">Ver no site</a>
                </Content>
            ))}
        </Container>
    )
}

export default Catalogue