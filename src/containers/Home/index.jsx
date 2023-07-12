import React from 'react'
import Homelogo from '../../assets/burger (1) 1.svg'
import { Container, HomeImg } from './styles'
import {CategoryCarousel,OffersCarousel,Header} from '../../components'

export function Home() {
    return (
        <Container>
            <Header/>

          
            <HomeImg src={Homelogo} alt="logo da home" />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )
}
