import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './AppRoutes';
import { Top } from './Top';



export const App = () => {
    return (
        <BrowserRouter>
            <Top />
            <AppRoutes />
        </BrowserRouter>
    )
}
