import React from 'react';
import { addPlantToCart } from '../dispatchCartActions';

function AddItemFromCartButton({ item }) {
    const handleClick = () => {
        addPlantToCart(item);
    };
    return <button onClick={handleClick}>Add to Cart</button>;
}

export default AddItemFromCartButton;
