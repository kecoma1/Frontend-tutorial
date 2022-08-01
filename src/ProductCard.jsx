import React from 'react'

export const ProductCard = ({ product }) => {

    return (
        <div className='product'>
            <h3>{product.name}</h3>
            <p><b>{product.price}</b></p>
            <p>{product.description}</p>
        </div>
    )
}
