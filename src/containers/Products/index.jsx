import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProductsLogo from '../../assets/products-logo.png'
import formatCurrency from '../../utils/formatCurrency'
import PropTypes from 'prop-types'

import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'
import api from '../../services/api'
import { CardProducts, Header } from '../../components'





export function Products() {
    const { state } = useLocation()

    let categoryId = 0;
    if (state?.categoryId) {
        categoryId = state.categoryId;
    }

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setfilteredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(categoryId)

   

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            const newCategories = [{ id: 0, name: 'Todas' }, ...data]
            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')
            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })
            setProducts(newProducts)
        }

        loadProducts()
        loadCategories()
    }, [])

    useEffect(() => {
        if (activeCategory === 0) {
            setfilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(product => product.category_id === activeCategory)
            setfilteredProducts(newFilteredProducts)
        }


    }, [activeCategory, products])


    return (
        <Container>
            <Header />
            <ProductsImg src={ProductsLogo} alt="logo dos products" />
            <CategoriesMenu>
                {categories && categories.map(category => (
                    <CategoryButton type="button" key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => {
                            setActiveCategory(category.id)
                        }}
                    >
                        {category.name}
                    </CategoryButton>

                ))}
            </CategoriesMenu>
            <ProductsContainer>
                {filteredProducts && filteredProducts.map(product => (


                    <CardProducts key={product.id} product={product} />


                ))}

            </ProductsContainer>
        </Container>
    )
}
Products.propTypes = {
    location: PropTypes.object
}