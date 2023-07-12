import React from 'react'
import Cartlogo from '../../assets/imgcarrinho.png'
import { Container, CartImg, Wrapper } from './styles'

import { CartItems, CartResume, Header } from '../../components'

export function Cart() {
    return (

        <Container>
            <Header />
            <CartImg src={Cartlogo} alt="logo da carrinho" />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>
    )
}
