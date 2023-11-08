import React from 'react';
import {RiDeleteBin5Fill} from 'react-icons/ri'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { addOrUpdateToCart, removeFromCart } from '../api/firebase';

export default function CartItem({product, 
    product: {id, image, title, option, quantity, price}, uid}) {
        const handleMinus = () => {
            if(quantity < 2) return;
            addOrUpdateToCart(uid, {...product, quantity: quantity - 1})
        }
        const handlePlus = () => {
            if(quantity > 99) return;
            addOrUpdateToCart(uid, {...product, quantity: quantity + 1})
        }
        const handleDelete = () => {
            if(product.length < 1) return;
            removeFromCart(uid, id);
        }
    return (
        <li>
            <img src={image} alt={title} />
            <div>
                <p>{title}</p>
                <p>{option}</p>
            </div>
            <div>
            <AiOutlineMinusSquare onClick={handleMinus}/>
            <span>{quantity}</span>
            <AiOutlinePlusSquare onClick={handlePlus}/>
            <RiDeleteBin5Fill onClick={handleDelete}/>
            </div>
        </li>
    );
}

