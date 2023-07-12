import React, { useEffect, useState } from 'react'
import Offers from '../../assets/OFERTAS.png'
import api from '../../services/api'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../utils/formatCurrency'
import { useCart } from '../../hooks/CartContext'
import { useNavigate } from 'react-router-dom'

export function OffersCarousel() {

    const [offers, setOffers] = useState([])
    const navigate = useNavigate()
    const { putProductsInCart } = useCart()

    useEffect(() => {

        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data.filter(product => product.offer).map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })

            setOffers(onlyOffers)
        }
        loadOffers()
    }, [])

    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 },

    ]


    return (
        <Container>
            <CategoryImg src={Offers} alt="logo da oferta" />
            <Carousel itemsToShow={5} style={{ width: '92%' }} breakPoints={breakpoints}>
                {
                    offers &&
                    offers.map(product => (
                        <ContainerItems key={product.id}>
                            <Image src={product.url} alt='foto do produto' />
                            <p>{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button onClick={() => {
                                putProductsInCart(product)
                                navigate('/carrinho')
                            }}>Peça agora</Button>
                        </ContainerItems>
                    ))
                }
            </Carousel>
        </Container>
    )
}
