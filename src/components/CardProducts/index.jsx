import React from "react";
import PropTypes from 'prop-types'
import { Button } from '../Button'
import { Container, Image, ProductsName, ProductsPrice } from './styles'
import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";



export function CardProducts({ product }) {
    const { putProductsInCart } = useCart()
    const navigate = useNavigate()

    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />
            <div>
                <ProductsName>{product.name}</ProductsName>
                <ProductsPrice>{product.formatedPrice}</ProductsPrice>
                <Button onClick={() => {
            putProductsInCart(product)
            navigate('/carrinho')
          }}>Adicionar</Button>
            </div>
        </Container>
    )

}


CardProducts.prototypes = {
    product: PropTypes.object
}