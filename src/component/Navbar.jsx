import React, { useState } from 'react';
import {AiOutlineShopping} from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { login } from '../api/firebase';

export default function Navbar() {
    const {logincheck} = useState(false);

    return (
        <header className='flex justify-between border-b border-gray-300 p-2'>
            <Link to='/' className='flex items-center text-4xl text-brand'>
                <AiOutlineShopping/>
                <h1>Shoppy</h1>
            </Link>
            <nav className='flex items-center gap-4 font-semibold'>
                <Link to='/products'>Products</Link>
                <Link to='/carts'>Carts</Link>
                <Link to='/products/new' className='text-2xl'>
                    <BsFillPencilFill/>
                </Link>
                <button onClick={login}>{logincheck ? 'Logout' : 'Login'}</button>
                {/* 인자와 호출하는 인자가 동일하면 생락 가능하다. 
                    () => login() 
                    login 다음과 같이 생략이 가능하다.
                */}
            </nav>
        </header>
    );
}

