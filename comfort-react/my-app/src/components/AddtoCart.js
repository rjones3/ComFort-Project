import React from 'react'
import { getState } from '../helpers/state'

export default function AddtoCart(props) {
    const [{ cart }, dispatch] = getState();
    console.log('onload',cart);
    
    return (
        <button
        className='btn product-single-buy'
        onClick={() => {
            console.log('onclick',cart);
            
            let items = cart.items
            if (props.id) {
                items.push(props.id)
            }

            dispatch({
                type: 'changeCart',
                newCart: { items }
            })
        }}
        >
        Add to cart
        </button>
    );
}