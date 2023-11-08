import React from 'react';
import { useAuthContext } from '../component/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import CartItem from '../component/CartItem';
import Price from '../component/Price';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import {FaEquals} from 'react-icons/fa'

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
        <section>
            <p>내 장바구니</p>
            {!hasProducts && <p>장바구니에 상품이 없습니다.</p>}
            {hasProducts && <>
                <ul>
                    {products && products.map((product) => (
                        <CartItem key={product.id} product={product} uid={uid}></CartItem>
                    ))}
                </ul>
                <div>
                    <Price text="상품 총액" price={totalPrice}/>
                    <BsFillPlusCircleFill/>
                    <Price text="배송액" price={SHIPPING}/>
                    <FaEquals/>
                    <Price text='총가격' price={totalPrice + SHIPPING}/>
                </div>
            </>}
        </section>
    );
}

