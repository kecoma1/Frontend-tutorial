import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard';

export const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/products/', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(response => setProducts(response));
    }, []);

    return (
        <div>
            {
                products.map(
                    (product, i) => <ProductCard key={'product-'+i} product={product} />
                )
            }
        </div>
    )
}
