import React, { useState } from 'react'

export const CreateProduct = () => {

    const [{
        name,
        description,
        price
    }, setFormValues] = useState({
        name: '',
        description: '',
        price: ''
    });

    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = ({ target }) => {
        setFormValues(values => {
            return {
                ...values,
                [ target.name ]: target.value
            }
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/api/products/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, description, price })
        });

        if (response.status !== 200) 
            setErrorMsg('Error. Status code: ' + response.status + '. ' + response.statusText);
        else {

            setErrorMsg('Product created'); 
            // TODO: go to main page
        }

    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <label>Name</label>
            <input 
                name='name'
                maxLength='20'
                type='text'
                value={name}
                onChange={handleChange}
            />
            <label>Description</label>
            <textarea
                name='description'
                maxLength='300'
                type='text'
                value={description}
                onChange={handleChange}
            />
            <label>Price</label>
            <input 
                name='price'
                max='2000'
                type='number'
                value={price}
                onChange={handleChange}
            />
            <input 
                type='submit'
            />
            <p>{errorMsg}</p>
        </form>
    )
}
