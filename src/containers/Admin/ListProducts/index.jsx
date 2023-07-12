import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import { Container, Img, EditIconStyle } from './styles'
import CancelIcon from '@mui/icons-material/Cancel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import formatCurrency from '../../../utils/formatCurrency'
import { useNavigate } from 'react-router-dom';
import paths from '../../../services/constants/paths';



function ListProducts() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('products')

      setProducts(data)

    }


    loadOrders()
  }, [])

  function isOffer(offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: '#228B22' }} />
    } return < CancelIcon style={{ color: '#cc1717' }} />
  }

  function editProducts(product) {
    navigate(paths.EditProduct, { state: { product } });
  }

  return (

    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome:</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell align='center'>Produto em oferta</TableCell>
              <TableCell align='center'>Imagem do Produto</TableCell>
              <TableCell>Editar Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell>{formatCurrency(product.price)}</TableCell>
                <TableCell align='center'>{isOffer(product.offer)}</TableCell>
                <TableCell align='center'><Img src={product.url} alt='imagem-do-produto' /></TableCell>
                <TableCell align='center'><EditIconStyle onClick={() => editProducts(product)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>


  )
}
export default ListProducts