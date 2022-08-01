import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { CreateProduct } from './CreateProduct';
import { Products } from './Products';

export const AppRoutes = () => {
    
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/products' element={<Products />} />
            <Route path='/create_product' element={<CreateProduct />} />
        </Routes>
    )
}
