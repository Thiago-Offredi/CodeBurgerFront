import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import paths from '../../services/constants/paths';
const listLinks = [{
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagIcon
},
{
    id: 2,
    label: 'Listar Produtos',
    link: paths.Produtcs,
    icon: ShoppingCartIcon
},
{
    id: 3,
    label: 'Novo Produtos',
    link: paths.NewProduct,
    icon: AddShoppingCartIcon
}

]
export default listLinks