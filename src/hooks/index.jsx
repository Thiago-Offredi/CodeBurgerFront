import React from "react";
import PropTypes from 'prop-types'
import { UserProvider } from "./UsersContext";
import { CartProvider } from "./CartContext";


const AppProvider = ({ children }) => (
    <CartProvider>
        <UserProvider>
            {children}
        </UserProvider>
    </CartProvider>
)
AppProvider.prototypes = {
    children: PropTypes.node
}
export default AppProvider
