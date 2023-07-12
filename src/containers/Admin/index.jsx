import React from 'react'
import Orders from './Orders'
import { SideMenuAdmin } from '../../components'
import ListProducts from './ListProducts'
import { Container, ContainerItems } from './styles'
import PropTypes from 'prop-types'
import paths from '../../services/constants/paths'
import { useLocation } from 'react-router-dom'
import NewProduct from './NewProduct'
import EditProducts from './EditProduct'
export function Admin() {
const {pathname}= useLocation()
    return (
        <Container>
            <SideMenuAdmin  pathname={pathname}/>
            <ContainerItems>
                {pathname === paths.Order && <Orders /> }
                {pathname === paths.Produtcs &&  <ListProducts /> }
                {pathname === paths.NewProduct &&  <NewProduct /> }
                {pathname === paths.EditProduct &&  <EditProducts /> }
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })

}