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
    agostinho,
    brabos,
    einstein,
    freira,
    gnomo,
    jordan,
    lhama,
    macaco,
    macMiller,
    parada,
    timMaia
]

const Catalogue = () =>{
    return (
        <Container>
            {shirtsPrint.map((print, index) => (
                <Content key={index}>
                    <img alt='estampa' src={print}/>
                </Content>
            ))}
        </Container>
    )
}

export default Catalogue