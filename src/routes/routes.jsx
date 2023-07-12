
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoute from "./private-routes";
import paths from "../services/constants/paths";

const myRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/cadastro" element={<Register />}  ></Route>
                <Route path="/" element={<PrivateRoute>
                    <Home />
                </PrivateRoute>
                } >
                </Route>
                <Route path="/produtos" element={<Products></Products>} ></Route>
                <Route path="/carrinho" element={<PrivateRoute>
                    <Cart />
                </PrivateRoute>
                } >
                </Route>
                <Route isAdmin path={paths.Order} element={<PrivateRoute>
                    <Admin />
                    </PrivateRoute>}>

                    </Route>
                    <Route isAdmin path={paths.Produtcs} element={<PrivateRoute>
                    <Admin />
                    </PrivateRoute>}>

                    </Route>
                    <Route isAdmin path={paths.NewProduct} element={<PrivateRoute>
                    <Admin />
                    </PrivateRoute>}>

                    </Route>
                    <Route isAdmin path={paths.EditProduct} element={<PrivateRoute>
                    <Admin />
                    </PrivateRoute>}>

                    </Route>
                    
            </Routes>
        </Router>
    )
}
export default myRoutes