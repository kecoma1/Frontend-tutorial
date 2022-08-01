import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Top = () => {

    const navigate = useNavigate();

    return (
        <div className='topBar'>
            <button onClick={() => navigate('/')} >Index</button>
            <button onClick={() => navigate('/products')} >Products</button>
            <button onClick={() => navigate('/create_product')} >Create Product</button>
        </div>
    )
}
