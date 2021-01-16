import React from 'react'
import { ServicesContainer, ServicesCard, ServicesP, ServicesH1, ServicesH2, ServicesWrapper, ServicesIcon} from './ServiceElements'
import Icon1 from '../../images/svg-18.svg'
import Icon2 from '../../images/svg-19.svg'
import Icon3 from '../../images/svg-20.svg'

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenese</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your
                         overall revenue</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online
                    anywhere in the world.
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that
                    turns 5% cash back.
                    </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
