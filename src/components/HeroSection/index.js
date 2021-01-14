import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroBtnWrapper,
    HeroH1,
    HeroP,
    ArrowForward,ArrowRight
} from './HeroElements';

import { Button } from '../ButtonElement';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {

        setHover(!hover)

    }


    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Intern Dev In Pi R Square</HeroH1>
                <HeroP>Sign up a new account today and recieve $250 in
                credit towards your
                         next payment</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        
                        >Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection