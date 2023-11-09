import React from 'react';
import {RiDeleteBin5Fill} from 'react-icons/ri'
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import useCart from '../hooks/useCart';


const ICON_CLASS = 'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1'
export default function CartItem({product, 
    product: {id, image, title, option, quantity, price}}) {
        const {addOrUpdateItem, removeItem} = useCart();
        const handleMinus = () => {
            if(quantity < 2) return;
            addOrUpdateItem.mutate({...product, quantity: quantity - 1})
            //addOrUpdateToCart(uid, {...product, quantity: quantity - 1})
        }
        const handlePlus = () => {
            if(quantity > 99) return;
            addOrUpdateItem.mutate({...product, quantity: quantity + 1})
            //addOrUpdateToCart(uid, {...product, quantity: quantity + 1})
        }
        const handleDelete = () => {
            if(product.length < 1) return;
            removeItem.mutate(id)
            //removeFromCart(uid, id);
        }
    return (
        <li className='flex justify-between my-2 items-center'>
            <img className='w-24 md:48 rounded-lg' src={image} alt={title} />
            <div className='flex-1 flex justify-between ml-4'>
                <div className='basis-3/5'>
                    <p className='text-lg'>{title}</p>
                    <p className='text-xl font-bold text-brand'>{option}</p>
                    <p>{price}</p>
                </div>
            </div>
            <div className='text-2xl flex items-center'>
            <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus}/>
            <span>{quantity}</span>
            <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus}/>
            <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete}/>
            </div>
        </li>
    );
}

