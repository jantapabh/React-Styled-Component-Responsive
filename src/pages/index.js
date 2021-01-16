import React, { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ServiceSection from '../components/ServiceSection'
import FooterSection from '../components/Footer'

const Home = () => {

    const [ isOpen, setIsOpen] = useState(false)

    const toggle = () => {

        setIsOpen(!isOpen)

    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <ServiceSection />
            <InfoSection {...homeObjThree} />
            <FooterSection />
        </>
    )
}

export default Home
