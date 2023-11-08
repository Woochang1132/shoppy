import React from 'react';
import { useAuthContext } from '../component/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import CartItem from '../component/CartItem';
import Price from '../component/Price';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import {FaEquals} from 'react-icons/fa'
import Button from '../component/ui/Button';

const SHIPPING = 3000;
export default function MyCart() {
    const {uid} = useAuthContext();
    const {isLoading , data: products } = useQuery({
        queryKey: ['carts'],
        queryFn: () => getCart(uid)
    })
    if(isLoading) return <p>Loding...</p>

    const hasProducts = products && products.length > 0;
    const totalPrice = products && products.reduce((prev, current) => prev + parseInt(current.price) * current.quantity, 0)
    return (
        <section className='p-8 flex flex-col'>
            <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>내 장바구니</p>
            {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
            {hasProducts && <>
                <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
                    {products && products.map((product) => (
                        <CartItem key={product.id} product={product} uid={uid}></CartItem>
                    ))}
                </ul>
                <div className='flex justify-between items-center p-2 mb-6 md:px-8 lg:px-16'>
                    <Price text="상품 총액" price={totalPrice}/>
                    <BsFillPlusCircleFill className='shrink-0'/>
                    <Price text="배송액" price={SHIPPING}/>
                    <FaEquals className='shrink-0'/>
                    <Price text='총가격' price={totalPrice + SHIPPING}/>
                </div>
                <Button text='주문하기'/>
            </>}
        </section>
    );
}

